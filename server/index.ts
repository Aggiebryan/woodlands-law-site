import { handleApi, publishedPosts, type Env } from './blog';
import { isEditor } from './auth';
import { render } from '../src/entry-server';
import template from '../dist/template.html';
const htmlResponse = (html: string, status = 200) => new Response(html, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    try {
      if (url.pathname.startsWith('/api/blog/')) return await handleApi(request, env);
      if (url.pathname.startsWith('/admin')) {
        if (!await isEditor(request, env)) return htmlResponse('<h1>Blog editor sign-in</h1><p>Sign in through Cloudflare Access with your @woodlands.law email address.</p><p>If sign-in is not available yet, the private editor is awaiting activation.</p>', 403);
      }
      const path = url.pathname.replace(/\/$/, '');
      if (path === '/blog' || path.startsWith('/blog/') || path.startsWith('/wp/') || path === '/news-events' || path === '/admin/blog') {
        const posts = await publishedPosts(env);
        const slug = /^\/(?:blog|wp)\/(?!category\/)(.+)$/.exec(path)?.[1];
        const article = slug ? posts.find(p => p.slug === slug) : null;
        const exists = !slug || !!article;
        const initialPosts = slug ? article ? [article, ...posts.filter(p => p.id !== article.id && p.categories.some(id => article.categories.includes(id))).slice(0, 3)] : [] : posts;
        const { html, helmet } = render(path, initialPosts);
        const tags = [helmet.title.toString(), helmet.meta.toString(), helmet.link.toString(), helmet.script.toString()].join('\n');
        const data = JSON.stringify(initialPosts).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
        return htmlResponse(template.replace('<!--app-html-->', html).replace('<!--head-tags-->', tags).replace('</head>', `<script>window.__BLOG_POSTS__=${data}</script></head>`), exists ? 200 : 404);
      }
      return env.ASSETS.fetch(request);
    } catch (error) {
      console.error('Blog request failed', error);
      return url.pathname.startsWith('/api/') ? Response.json({ error: 'Unable to load or save the blog. Please try again.' }, { status: 503, headers: { 'Cache-Control': 'no-store' } }) : htmlResponse('<h1>We will be right back.</h1><p>Please call <a href="tel:+18326260116">(832) 626-0116</a>.</p>', 503);
    }
  }
};
