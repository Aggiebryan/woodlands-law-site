import seedEvents from '../content/events.json';
import sanitizeHtml from 'sanitize-html';
import { isEditor } from './auth';
import { cleanArticle, boundedBody, type Env } from './blog';
import type { WordPressEvent } from '../src/services/wordPressService';

type Entry = { slug: string; draft: string; published: string | null; revision: number; updated_at: string };
const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
const text = (value: unknown) => sanitizeHtml(String(value || ''), { allowedTags: [], allowedAttributes: {} }).trim();
const validTime = (value: unknown) => typeof value === 'string' && /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);
function cleanEvent(input: WordPressEvent, slug: string, id: number, publishing: boolean): WordPressEvent {
  const title = text(input.title?.rendered);
  if (!title || title.length > 250) throw new Error('Enter an event title of 250 characters or fewer.');
  const day = input.event_date;
  if (typeof day !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(day) || !Number.isFinite(Date.parse(day + 'T12:00:00Z')) || new Date(day + 'T12:00:00Z').toISOString().slice(0, 10) !== day) throw new Error('Choose a valid event date.');
  if (!validTime(input.event_time)) throw new Error('Choose a valid event time.');
  if (input.event_end_time && (!validTime(input.event_end_time) || input.event_end_time <= input.event_time!)) throw new Error('End time must be later than the start time on the same day.');
  if (typeof input.content?.rendered !== 'string' || input.content.rendered.length > 50000) throw new Error('Event description is too long.');
  const content = cleanArticle(input.content.rendered);
  if (publishing && !text(content)) throw new Error('Add a description before publishing the event.');
  const media = input._embedded?.['wp:featuredmedia']?.[0];
  const embedded: WordPressEvent['_embedded'] = {};
  if (media?.source_url) {
    if (!( /^\/blog-media\/[a-zA-Z0-9._-]+$/.test(media.source_url) || /^\/api\/blog\/media\/[a-f0-9-]{36}$/.test(media.source_url) || /^https:\/\//.test(media.source_url))) throw new Error('Choose a valid event photo.');
    embedded['wp:featuredmedia'] = [{ source_url: media.source_url, alt_text: text(media.alt_text).slice(0, 300) }];
  }
  const registration = input.registration_link || '';
  if (registration && !/^https:\/\//.test(registration) && !/^\/(?!\/)/.test(registration)) throw new Error('Registration link must use HTTPS or a website path.');
  return { id, slug, title: { rendered: title }, excerpt: { rendered: text(content.replace(/<\/(?:p|div|h[1-6])>/gi, '\n\n').replace(/<br\s*\/?>/gi, '\n')).slice(0, 500) }, content: { rendered: content }, date: input.date && Number.isFinite(Date.parse(input.date)) ? input.date : new Date().toISOString(), event_date: day, event_time: input.event_time, event_end_time: input.event_end_time || '', event_location: text(input.event_location).slice(0, 300), registration_link: registration, _embedded: embedded };
}
async function entries(env: Env) {
  return env.DB ? (await env.DB.prepare('SELECT slug, draft, published, revision, updated_at FROM event_entries').all<Entry>()).results : [];
}
export async function publishedEvents(env: Env): Promise<WordPressEvent[]> {
  const events = new Map<string, WordPressEvent>(seedEvents.map(event => [event.slug, event]));
  for (const entry of await entries(env)) {
    if (entry.published) events.set(entry.slug, JSON.parse(entry.published));
    else events.delete(entry.slug);
  }
  return [...events.values()];
}
export async function handleEventsApi(request: Request, env: Env) {
  const url = new URL(request.url);
  if (url.pathname === '/api/blog/events' && request.method === 'GET') return json(await publishedEvents(env));
  if (!await isEditor(request, env)) return json({ error: 'Sign in with your @woodlands.law email address.' }, 403);
  if (!env.DB) return json({ error: 'Event storage is awaiting activation.' }, 503);
  if (request.method === 'GET') {
    const events = new Map(seedEvents.map(event => [event.slug, { event: event as WordPressEvent, revision: 0, published: true, hasDraft: false }]));
    for (const entry of await entries(env)) events.set(entry.slug, { event: JSON.parse(entry.draft), revision: entry.revision, published: !!entry.published, hasDraft: entry.draft !== entry.published });
    return json([...events.values()].sort((a, b) => (b.event.event_date || b.event.date).localeCompare(a.event.event_date || a.event.date)));
  }
  if (url.pathname !== '/api/blog/admin/events' || request.method !== 'PUT') return json({ error: 'Method not allowed' }, 405);
  if (request.headers.get('Origin') !== url.origin || request.headers.get('Sec-Fetch-Site') === 'cross-site') return json({ error: 'This request must come from the editor.' }, 403);
  if (!request.headers.get('Content-Type')?.startsWith('application/json')) return json({ error: 'Expected JSON' }, 415);
  const bytes = await boundedBody(request, 80000);
  if (!bytes) return json({ error: 'Event is too large' }, 413);
  let input: { event: WordPressEvent; revision: number; action: string };
  try { input = JSON.parse(new TextDecoder().decode(bytes)); } catch { return json({ error: 'Invalid request' }, 400); }
  const slug = input?.event?.slug;
  if (typeof slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 200) return json({ error: 'Use a short event address with lowercase letters, numbers, and hyphens.' }, 400);
  if (!['draft', 'publish', 'unpublish'].includes(input.action)) return json({ error: 'Invalid action' }, 400);
  const existing = await env.DB.prepare('SELECT slug, draft, published, revision, updated_at FROM event_entries WHERE slug = ?').bind(slug).first<Entry>();
  const seed = seedEvents.find(event => event.slug === slug);
  if ((existing?.revision || 0) !== input.revision) return json({ error: 'This event changed in another session. Reload it before saving.' }, 409);
  if (!existing && seed && input.event.id !== seed.id) return json({ error: 'That event address already exists.' }, 409);
  let event: WordPressEvent;
  try { event = cleanEvent(input.event, slug, existing ? JSON.parse(existing.draft).id : seed?.id || Date.now(), input.action === 'publish'); } catch (error) { return json({ error: (error as Error).message }, 400); }
  const draft = JSON.stringify(event);
  const published = input.action === 'publish' ? draft : input.action === 'unpublish' ? null : existing ? existing.published : seed ? JSON.stringify(seed) : null;
  const now = new Date().toISOString();
  const result = existing
    ? await env.DB.prepare('UPDATE event_entries SET draft = ?, published = ?, revision = revision + 1, updated_at = ? WHERE slug = ? AND revision = ?').bind(draft, published, now, slug, input.revision).run()
    : await env.DB.prepare('INSERT INTO event_entries (slug, draft, published, revision, updated_at) VALUES (?, ?, ?, 1, ?) ON CONFLICT(slug) DO NOTHING').bind(slug, draft, published, now).run();
  if (result.meta.changes !== 1) return json({ error: 'This event was saved in another session. Reload the editor.' }, 409);
  return json({ event, revision: input.revision + 1, published: !!published, hasDraft: draft !== published });
}
