import assert from 'node:assert/strict';
import fs from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { generateKeyPair, exportJWK, SignJWT } from 'jose';
import worker from '../dist/worker/index.js';

// All storage and signing keys are isolated here. No production credentials or posts are changed.
const database = new DatabaseSync(':memory:');
database.exec(fs.readFileSync('migrations/0001_blog.sql', 'utf8'));
const env = { ACCESS_TEAM_DOMAIN: 'blog-test.cloudflareaccess.com', ACCESS_AUD: 'test-editor-audience', ASSETS: { fetch: async () => new Response('static page') }, DB: { prepare(sql) { const statement = database.prepare(sql); let values = []; return { bind(...args) { values = args.map(v => v instanceof ArrayBuffer ? new Uint8Array(v) : v); return this; }, async all() { return { results: statement.all(...values) }; }, async first() { return statement.get(...values) ?? null; }, async run() { return { meta: statement.run(...values) }; } }; } } };
const { publicKey, privateKey } = await generateKeyPair('RS256', { extractable: true });
const jwk = await exportJWK(publicKey); jwk.kid = 'isolated-test-key'; jwk.alg = 'RS256';
globalThis.fetch = async url => { assert.equal(String(url), 'https://blog-test.cloudflareaccess.com/cdn-cgi/access/certs'); return Response.json({ keys: [jwk] }); };
async function token(email = 'bryan@woodlands.law', audience = env.ACCESS_AUD, expires = '1h') { return new SignJWT({ email }).setProtectedHeader({ alg: 'RS256', kid: jwk.kid }).setIssuer('https://' + env.ACCESS_TEAM_DOMAIN).setAudience(audience).setIssuedAt().setExpirationTime(expires).sign(privateKey); }
const identity = await token();
function call(path, { method = 'GET', body, jwt = identity, origin = 'https://test.invalid', type = 'application/json' } = {}) { return worker.fetch(new Request('https://test.invalid' + path, { method, headers: { Origin: origin, 'Content-Type': type, ...(jwt ? { 'cf-access-jwt-assertion': jwt } : {}) }, ...(body !== undefined ? { body: typeof body === 'string' || body instanceof Uint8Array ? body : JSON.stringify(body) } : {}) }), env); }
const posts = JSON.parse(fs.readFileSync('content/posts.json'));
assert.equal(posts.length, 83);
for (const post of posts) { const url = post._embedded?.['wp:featuredmedia']?.[0]?.source_url; if (url?.startsWith('/blog-media/')) assert.ok(fs.existsSync('public' + url), url); }
assert.equal((await call('/api/blog/posts', { jwt: null })).status, 200);
assert.equal((await (await call('/api/blog/posts', { jwt: null })).json()).length, 83);
for (const jwt of [null, 'forged', await token('outsider@example.com'), await token('bryan@woodlands.law.evil'), await token('bryan@woodlands.law', 'wrong-audience'), await token('bryan@woodlands.law', env.ACCESS_AUD, '-1h')]) assert.equal((await call('/api/blog/admin', { jwt })).status, 403);
assert.equal((await call('/admin/blog', { jwt: null })).status, 403);
assert.equal((await call('/api/blog/admin', { jwt: await token('staff@woodlands.law') })).status, 200);
assert.equal((await call('/api/blog/admin', { jwt: await token('BRYAN@WOODLANDS.LAW') })).status, 200);
let response = await call('/wp/' + posts[0].slug); assert.equal(response.status, 200); assert.ok((await response.text()).includes(posts[0].title.rendered));
assert.equal((await call('/blog/missing-article')).status, 404);
assert.equal(await (await call('/')).text(), 'static page');
assert.equal((await worker.fetch(new Request('https://test.invalid/api/blog/admin', { headers: { 'cf-access-authenticated-user-email': 'bryan@woodlands.law' } }), env)).status, 403);

const post = { id: 99999, slug: 'isolated-editor-test', date: '2026-10-02T12:00:00', title: { rendered: 'Isolated editor test' }, excerpt: { rendered: '<p>A test.</p>' }, content: { rendered: '<h2>Heading</h2><p>Body</p><script>alert(1)</script><img src="x" onerror="alert(2)"><a href="javascript:alert(3)">bad link</a>' }, categories: [2], _embedded: { author: [{ name: 'Test author' }] } };
const save = (action, revision, p = post, options = {}) => call('/api/blog/admin', { method: 'PUT', body: { post: p, action, revision }, ...options });
assert.equal((await save('draft', 0, post, { jwt: null })).status, 403);
assert.equal((await save('draft', 0, post, { origin: 'https://evil.invalid' })).status, 403);
response = await save('draft', 0); assert.equal(response.status, 200); const draft = await response.json();
assert.ok(!/script|onerror|javascript:/i.test(draft.post.content.rendered));
assert.ok(!(await (await call('/api/blog/posts')).json()).some(p => p.slug === post.slug));
assert.equal((await call('/blog/' + post.slug)).status, 404);
response = await save('publish', 1); assert.equal(response.status, 200);
assert.ok((await (await call('/api/blog/posts')).json()).some(p => p.slug === post.slug));
response = await call('/blog/' + post.slug); assert.equal(response.status, 200); assert.ok((await response.text()).includes('Isolated editor test'));
const changed = { ...post, title: { rendered: 'Draft replacement title' } };
assert.equal((await save('draft', 2, changed)).status, 200);
assert.equal((await (await call('/api/blog/posts')).json()).find(p => p.slug === post.slug).title.rendered, post.title.rendered);
assert.equal((await save('publish', 2, changed)).status, 409);
assert.equal((await save('unpublish', 3, changed)).status, 200);
assert.equal((await call('/blog/' + post.slug)).status, 404);
const seed = posts[0];
assert.equal((await save('draft', 0, { ...seed, title: { rendered: 'Changed imported title' } })).status, 200);
assert.equal((await (await call('/api/blog/posts')).json()).find(p => p.slug === seed.slug).title.rendered, seed.title.rendered);
assert.equal((await save('unpublish', 1, seed)).status, 200);
assert.ok(!(await (await call('/api/blog/posts')).json()).some(p => p.slug === seed.slug));
assert.equal((await save('publish', 2, seed)).status, 200);
const png = new Uint8Array(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jewoAAAAASUVORK5CYII=', 'base64'));
response = await call('/api/blog/admin/media', { method: 'POST', type: 'image/png', body: png }); assert.equal(response.status, 201); const image = await response.json();
response = await call(image.url, { jwt: null }); assert.equal(response.status, 200); assert.equal(response.headers.get('content-type'), 'image/png'); assert.deepEqual(new Uint8Array(await response.arrayBuffer()), png);
assert.equal((await call('/api/blog/admin/media', { method: 'POST', type: 'image/svg+xml', body: '<svg/>' })).status, 415);
assert.equal((await call('/api/blog/admin/media', { method: 'POST', type: 'image/png', body: 'fake image' })).status, 400);
assert.equal((await call('/api/blog/admin/media', { method: 'POST', type: 'image/png', body: new Uint8Array(1000001) })).status, 413);
console.log('PASS: 83 recovered posts and media; verified domain-wide JWT sign-in; rejected forged, expired, wrong-audience and outsider tokens; private drafts; publishing; unpublishing; safe HTML; concurrent-edit protection; image persistence and validation; legacy article routes and static-page forwarding.');
