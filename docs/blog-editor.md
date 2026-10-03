# Blog editor

Open https://woodlands.law/admin/blog and sign in with your firm email address. Cloudflare Access verifies the email; the Worker also verifies the signed session and allows only addresses ending in @woodlands.law.

Choose **New article**, enter the title and introduction, select categories, and write the article. The formatting buttons add headings, bold, italics, and lists. **Add link** creates a link from selected text. Featured images accept JPEG, PNG, and WebP files up to 1 MB; include a useful image description.

**Save draft** keeps the article private. When editing a published article, saving a draft leaves the current published version unchanged. **Preview article** shows the body before publication. **Publish**, followed by **Confirm publish**, makes the saved version visible immediately. The article date is a display date, not a publication schedule. **Move to drafts** removes an article from the public blog while preserving it for later editing. Existing article addresses stay unchanged to preserve links. The editor rejects conflicting saves from another session rather than overwriting them.

The recovered WordPress export contains 83 posts and 81 locally stored media files. It is a historical export, not a new legal review of those articles. Existing `/wp/` article links remain supported; `/blog/` links also work. Events use the recovered event export. New and edited posts and uploaded images are stored in the Cloudflare D1 database `woodlands-law-blog`. Routine website rebuilds preserve them.

## Hosting configuration

The repository build produces the static site and the Worker. `wrangler.jsonc` binds static assets and the D1 database. The additive SQL migration is in `migrations/0001_blog.sql`; it must run once against production before editing is enabled.

Cloudflare Access must protect both `woodlands.law/admin/*` and `www.woodlands.law/admin/*`, along with the matching `/api/blog/admin*` paths. Use an Allow policy with **Emails ending in** `woodlands.law`, email one-time PIN sign-in, and a six-hour session. Set `ACCESS_TEAM_DOMAIN` to the account's actual `TEAM.cloudflareaccess.com` hostname and `ACCESS_AUD` to that application's audience. These identifiers are not passwords. If either identifier is absent, editor requests are denied. Public posts and other website pages continue to work. Direct Worker URLs also require a verified Access assertion to edit.

Run `npm run build`, `npm run test:blog`, and `npx tsc --noEmit -p tsconfig.app.json` before publishing code. The tests use isolated SQLite storage and temporary signing keys, never the production database. Cloudflare's D1 Time Travel provides recovery within the account's retention period; the original content and media export remains tracked in GitHub.

The production Access application is **Woodlands Law Blog Editor**, ID `ad1a823a-be07-41ad-89ca-0b23099d9af6`. Its Allow policy is **Woodlands Law staff**, restricted to `@woodlands.law` addresses, and its sole identity provider is **One-time PIN**. The actual team hostname and application audience are recorded in `wrangler.jsonc` and in the Worker's production runtime variables. If the Access application is replaced, update both values before deploying.

## Events

Open the **Events** tab in the same editor and choose **New event**, or select an existing event. Enter the title, event date, start time, description, and event photo. Photo description, end time, location, and registration link are also available. Photos accept JPEG, PNG, or WebP up to 1 MB. Times use Central Time; an optional end time must be later on the same day.

**Save event draft** keeps new events private and leaves a published event unchanged while you revise it. **Preview event** shows the photo and details. **Publish event**, then **Confirm publish event**, updates the website immediately. Upcoming events appear with photos and descriptions on the News & Events page, ordered by date and start time. An event remains upcoming through its event date, then appears under Past Events. **Move event to drafts** removes it from the public website and keeps it available to edit. Article and event changes remain open when switching editor tabs; leaving the page warns about unsaved changes.

Events are stored in the D1 `event_entries` table. Apply the additive migration `migrations/0002_events.sql` before deploying event editing. Existing WordPress event addresses and photos remain available.
