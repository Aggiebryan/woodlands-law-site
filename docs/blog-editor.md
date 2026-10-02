# Blog editor

Open https://woodlands.law/admin/blog and sign in with your firm email address. Cloudflare Access verifies the email; the Worker also verifies the signed session and allows only addresses ending in @woodlands.law.

Choose **New article**, enter the title and introduction, select categories, and write the article. The formatting buttons add headings, bold, italics, and lists. **Add link** creates a link from selected text. Featured images accept JPEG, PNG, and WebP files up to 1 MB; include a useful image description.

**Save draft** keeps the article private. When editing a published article, saving a draft leaves the current published version unchanged. **Preview article** shows the body before publication. **Publish**, followed by **Confirm publish**, makes the saved version visible immediately. The article date is a display date, not a publication schedule. **Move to drafts** removes an article from the public blog while preserving it for later editing. Existing article addresses stay unchanged to preserve links. The editor rejects conflicting saves from another session rather than overwriting them.

The recovered WordPress export contains 83 posts and 81 locally stored media files. It is a historical export, not a new legal review of those articles. Existing `/wp/` article links remain supported; `/blog/` links also work. Events use the recovered event export. New and edited posts and uploaded images are stored in the Cloudflare D1 database `woodlands-law-blog`. Routine website rebuilds preserve them.

## Hosting configuration

The repository build produces the static site and the Worker. `wrangler.jsonc` binds static assets and the D1 database. The additive SQL migration is in `migrations/0001_blog.sql`; it must run once against production before editing is enabled.

Cloudflare Access must protect both `woodlands.law/admin/*` and `www.woodlands.law/admin/*`, along with the matching `/api/blog/admin*` paths. Use an Allow policy with **Emails ending in** `woodlands.law`, email one-time PIN sign-in, and an eight-hour session. Set `ACCESS_TEAM_DOMAIN` to the account's actual `TEAM.cloudflareaccess.com` hostname and `ACCESS_AUD` to that application's audience. These identifiers are not passwords. If either identifier is absent, editor requests are denied. Public posts and other website pages continue to work. Direct Worker URLs also require a verified Access assertion to edit.

Run `npm run build`, `npm run test:blog`, and `npx tsc --noEmit -p tsconfig.app.json` before publishing code. The tests use isolated SQLite storage and temporary signing keys, never the production database. Cloudflare's D1 Time Travel provides recovery within the account's retention period; the original content and media export remains tracked in GitHub.
