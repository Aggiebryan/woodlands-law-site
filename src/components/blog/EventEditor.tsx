import { useEffect, useState } from 'react';
import { Plus, Save, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { blogText } from '@/lib/blog-text';
import { centralDate, formatEventDate, formatEventTime } from '@/lib/event-date';
import type { WordPressEvent } from '@/services/wordPressService';

type Entry = { event: WordPressEvent; revision: number; published: boolean; hasDraft: boolean };
type Action = 'draft' | 'publish' | 'unpublish';
const description = (event: WordPressEvent) => blogText((event.content?.rendered || event.excerpt.rendered).replace(/<\/(?:p|div|h[1-6])>/gi, '\n\n').replace(/<br\s*\/?>/gi, '\n')).trim();
const descriptionHtml = (value: string) => value.split(/\n\s*\n/).map(paragraph => `<p>${paragraph.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</p>`).join('');

export default function EventEditor() {
  const [items, setItems] = useState<Entry[]>([]);
  const [current, setCurrent] = useState<Entry | null>(null);
  const [loaded, setLoaded] = useState(false), [busy, setBusy] = useState(false), [dirty, setDirty] = useState(false);
  const [message, setMessage] = useState(''), [search, setSearch] = useState(''), [preview, setPreview] = useState(false);
  const [body, setBody] = useState('');
  const [pendingAction, setPendingAction] = useState<Action | null>(null), [pendingEntry, setPendingEntry] = useState<Entry | null>(null);
  useEffect(() => {
    fetch('/api/blog/admin/events').then(async response => {
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Events could not be loaded. Reload the editor.');
      setItems(data); setLoaded(true);
    }).catch(error => setMessage(error.message));
  }, []);
  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => { if (dirty) { event.preventDefault(); event.returnValue = ''; } };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);
  const choose = (entry: Entry, discard = false) => {
    if (busy) return;
    if (dirty && !discard) { setPendingEntry(entry); return; }
    const copy = structuredClone(entry); copy.event.title.rendered = blogText(copy.event.title.rendered);
    setCurrent(copy); setBody(description(entry.event)); setDirty(false); setPreview(false); setMessage(''); setPendingEntry(null); setPendingAction(null);
  };
  const update = (patch: Partial<WordPressEvent>) => { setCurrent(entry => entry ? { ...entry, event: { ...entry.event, ...patch } } : null); setDirty(true); setPreview(false); setMessage(''); };
  const newEvent = () => choose({ event: { id: Date.now(), slug: '', date: new Date().toISOString(), title: { rendered: '' }, excerpt: { rendered: '' }, content: { rendered: '' }, event_date: centralDate(), event_time: '18:00', _embedded: {} }, revision: 0, published: false, hasDraft: true });
  const save = async (action: Action, confirmed = false) => {
    if (!current || busy) return;
    if (action !== 'draft' && !confirmed) { setPendingAction(action); return; }
    setPendingAction(null); setBusy(true); setMessage('');
    try {
      const response = await fetch('/api/blog/admin/events', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ event: current.event, revision: current.revision, action }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Event could not be saved.');
      setCurrent({ ...data, event: { ...data.event, title: { rendered: blogText(data.event.title.rendered) } } }); setBody(description(data.event)); setItems(all => [data, ...all.filter(entry => entry.event.slug !== data.event.slug)]); setDirty(false);
      setMessage(action === 'publish' ? 'Event published. Upcoming events appear on the News & Events page.' : action === 'unpublish' ? 'Event moved to drafts and removed from the public website.' : 'Event draft saved. The published version has not changed.');
    } catch (error) { setMessage((error as Error).message); } finally { setBusy(false); }
  };
  const upload = async (file?: File) => {
    if (!file || !current || busy) return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 1000000) { setMessage('Choose a JPEG, PNG, or WebP photo smaller than 1 MB.'); return; }
    setBusy(true); setMessage('Uploading photo…');
    try {
      const response = await fetch('/api/blog/admin/media', { method: 'POST', headers: { 'Content-Type': file.type }, body: file });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Photo upload failed.');
      update({ _embedded: { ...current.event._embedded, 'wp:featuredmedia': [{ source_url: data.url, alt_text: '' }] } });
      setMessage('Photo uploaded. Save the event to keep it.');
    } catch (error) { setMessage((error as Error).message); } finally { setBusy(false); }
  };
  const event = current?.event;
  const photo = event?._embedded?.['wp:featuredmedia']?.[0];
  const savedAddress = !!current?.revision || items.some(entry => entry.event.id === event?.id);
  return <>
    <div className="editor-document-actions"><p>Add events to the Upcoming Events section.</p><Button onClick={newEvent} disabled={!loaded || busy}><Plus /> New event</Button></div>
    <p role="status" className="editor-status">{message || (!loaded ? 'Loading your events…' : dirty ? 'Unsaved event changes' : '')}</p>
    {pendingEntry && <div className="editor-confirm" role="alert"><p>Discard unsaved changes and open the other event?</p><Button onClick={() => choose(pendingEntry, true)}>Discard event changes</Button><Button variant="outline" onClick={() => setPendingEntry(null)}>Keep editing</Button></div>}
    {pendingAction && <div className="editor-confirm" role="alert"><p>{pendingAction === 'publish' ? 'Publish this event for website visitors?' : 'Remove this event from the website and keep it as a draft?'}</p><Button disabled={busy} onClick={() => save(pendingAction, true)}>{pendingAction === 'publish' ? 'Confirm publish event' : 'Confirm move event to drafts'}</Button><Button variant="outline" onClick={() => setPendingAction(null)}>Cancel</Button></div>}
    <div className="editor-layout">
      <aside className="editor-articles"><label htmlFor="event-search">Find an event</label><Input id="event-search" value={search} onChange={change => setSearch(change.target.value)} placeholder="Search event titles" />
        <div className="article-list">{items.filter(entry => blogText(entry.event.title.rendered).toLowerCase().includes(search.toLowerCase())).map(entry => <button key={entry.event.slug} disabled={busy} className={event?.slug === entry.event.slug ? 'selected' : ''} onClick={() => choose(entry)}><strong>{blogText(entry.event.title.rendered)}</strong><span>{entry.published ? 'Published' : 'Draft'}{entry.published && entry.hasDraft ? ' · Changes saved as draft' : ''}</span><span>{formatEventDate(entry.event)}</span></button>)}</div>
      </aside>
      <section className="editor-document">{!current || !event ? <div className="editor-empty"><h2>Select an event or create a new one.</h2><p>Add a photo, date, time, title, and description. Draft events stay private until you publish.</p></div> : <fieldset disabled={busy} className="event-fields">
        <div className="editor-document-actions"><span>{current.published ? 'Published event' : 'Draft event'}</span><div><Button variant="outline" onClick={() => save('draft')}><Save /> Save event draft</Button><Button onClick={() => save('publish')}>{busy ? 'Saving…' : 'Publish event'}<ArrowUpRight /></Button></div></div>
        <label htmlFor="event-title">Event title</label><Input id="event-title" maxLength={250} value={event.title.rendered} onChange={change => { const title = change.target.value; update({ title: { rendered: title }, ...(!savedAddress ? { slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') } : {}) }); }} />
        <label htmlFor="event-slug">Event address</label><Input id="event-slug" disabled={savedAddress} value={event.slug} onChange={change => update({ slug: change.target.value })} /><p className="editor-help">/events/{event.slug || 'your-event'}{savedAddress ? ' · Kept unchanged to preserve existing links.' : ''}</p>
        <div className="event-date-time"><div><label htmlFor="event-date">Event date</label><Input id="event-date" type="date" value={event.event_date || event.date.slice(0, 10)} onChange={change => update({ event_date: change.target.value })} /></div><div><label htmlFor="event-time">Start time</label><Input id="event-time" type="time" value={event.event_time || ''} onChange={change => update({ event_time: change.target.value })} /></div><div><label htmlFor="event-end-time">End time (optional)</label><Input id="event-end-time" type="time" value={event.event_end_time || ''} onChange={change => update({ event_end_time: change.target.value })} /></div></div>
        <p className="editor-help">Times use Central Time. Events remain in Upcoming Events through their event date, then appear in Past Events.</p>
        <label htmlFor="event-description">Description</label><Textarea id="event-description" rows={8} value={body} onChange={change => { setBody(change.target.value); update({ content: { rendered: descriptionHtml(change.target.value) } }); }} />
        <label htmlFor="event-photo">Event photo</label><input id="event-photo" type="file" accept="image/jpeg,image/png,image/webp" onChange={change => { void upload(change.target.files?.[0]); change.target.value = ''; }} /><p className="editor-help">JPEG, PNG, or WebP. Maximum 1 MB.</p>
        {photo && <><img className="editor-image" src={photo.source_url} alt={photo.alt_text || ''} /><label htmlFor="event-photo-description">Photo description</label><Input id="event-photo-description" value={photo.alt_text || ''} onChange={change => update({ _embedded: { ...event._embedded, 'wp:featuredmedia': [{ ...photo, alt_text: change.target.value }] } })} /><Button variant="outline" onClick={() => update({ _embedded: { ...event._embedded, 'wp:featuredmedia': [] } })}>Remove event photo</Button></>}
        <label htmlFor="event-location">Location (optional)</label><Input id="event-location" value={event.event_location || ''} onChange={change => update({ event_location: change.target.value })} />
        <label htmlFor="event-registration">Registration link (optional)</label><Input id="event-registration" value={event.registration_link || ''} placeholder="https://…" onChange={change => update({ registration_link: change.target.value })} />
        <div className="editor-preview-controls"><Button variant="outline" onClick={() => setPreview(!preview)}>{preview ? 'Hide event preview' : 'Preview event'}</Button></div>
        {preview && <article className="event-preview"><p className="editor-kicker">EVENT PREVIEW</p>{photo && <img className="editor-image" src={photo.source_url} alt={photo.alt_text || ''} />}<h2>{event.title.rendered}</h2><p>{formatEventDate(event)} · {formatEventTime(event)}</p>{event.event_location && <p>{event.event_location}</p>}<p className="event-description">{body}</p></article>}
        {current.published && <div className="editor-bottom"><a href={'/events/' + event.slug} target="_blank" rel="noreferrer">View published event ↗</a><Button variant="outline" onClick={() => save('unpublish')}>Move event to drafts</Button></div>}
      </fieldset>}</section>
    </div>
  </>;
}
