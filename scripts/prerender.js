import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { getAllRoutes } from './routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const clientDir = path.join(rootDir, 'dist', 'client');
const serverDir = path.join(rootDir, 'dist', 'server');

async function prerender() {
  // 1. Load the server-side render function (use file:// URL for Windows compatibility)
  const serverEntry = pathToFileURL(path.join(serverDir, 'entry-server.js')).href;
  const { render } = await import(serverEntry);

  // 2. Read the client HTML template
  const template = fs.readFileSync(path.join(clientDir, 'index.html'), 'utf-8');

  // 3. Get all routes to pre-render
  const routes = await getAllRoutes();

  console.log(`\nPre-rendering ${routes.length} routes...\n`);

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const { html: appHtml, helmet } = render(route);

      // Build head tags from helmet
      const headTags = [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].filter(Boolean).join('\n    ');

      // Inject into template
      let pageHtml = template
        .replace('<!--app-html-->', appHtml)
        .replace('<!--head-tags-->', headTags);

      // Determine output file path
      const filePath = route === '/'
        ? path.join(clientDir, 'index.html')
        : path.join(clientDir, route, 'index.html');

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, pageHtml);

      success++;
      process.stdout.write(`  \u2713 ${route}\n`);
    } catch (err) {
      failed++;
      process.stdout.write(`  \u2717 ${route}: ${err.message}\n`);

      // Fallback: write the SPA shell so the route still works via client-side rendering
      const fallbackPath = route === '/'
        ? path.join(clientDir, 'index.html')
        : path.join(clientDir, route, 'index.html');
      fs.mkdirSync(path.dirname(fallbackPath), { recursive: true });
      fs.writeFileSync(fallbackPath, template.replace('<!--app-html-->', '').replace('<!--head-tags-->', ''));
    }
  }

  console.log(`\nPre-rendering complete: ${success} succeeded, ${failed} failed out of ${routes.length} routes.\n`);

  if (failed > 0) {
    console.log('Failed routes will fall back to client-side rendering.');
  }
}

prerender().catch((err) => {
  console.error('Pre-render script failed:', err);
  process.exit(1);
});
