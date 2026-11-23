import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist/public');
const site = JSON.parse(await readFile(resolve(root, 'src/config/site.json'), 'utf8'));
const pages = JSON.parse(await readFile(resolve(root, 'src/config/page-meta.json'), 'utf8'));
const shell = await readFile(resolve(output, 'index.html'), 'utf8');
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
let origin = '';
if (site.websiteUrl.trim()) {
  const url = new URL(site.websiteUrl);
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash || url.pathname !== '/') {
    throw new Error('websiteUrl must be a verified HTTPS site origin, without credentials, path, query, or fragment.');
  }
  origin = url.origin;
}
const server = await createServer({ root, configFile: resolve(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  for (const [route, meta] of Object.entries(pages)) {
    let html = shell.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(meta.title)}</title>`);
    for (const [attribute, name, value] of [
      ['name', 'description', meta.description],
      ['property', 'og:title', meta.title],
      ['property', 'og:description', meta.description],
      ['name', 'twitter:title', meta.title],
      ['name', 'twitter:description', meta.description],
    ]) {
      html = html.replace(new RegExp(`<meta ${attribute}="${name}"[^>]*>`), `<meta ${attribute}="${name}" content="${escape(value)}" />`);
    }
    if (route === '/privacy' || route === '/terms') html = html.replace('content="index, follow"', 'content="noindex, follow"');
    if (origin) {
      const canonical = escape(origin + route);
      html = html.replace('</head>', `<link rel="canonical" href="${canonical}" /><meta property="og:url" content="${canonical}" /></head>`);
    }
    html = html.replace('<div id="root"></div>', `<div id="root">${renderToString(createElement(App, { ssrPath: route }))}</div>`);
    // "/about" is written as about.html: static hosts (GitHub Pages, Cloudflare
    // Pages) then serve /about as is, with no redirect to /about/ that the
    // app's router would not know.
    const file = route === '/' ? resolve(output, 'index.html') : resolve(output, `${route.slice(1)}.html`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
  }
  await writeFile(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : '# Sitemap will be generated when the owner configures websiteUrl.\n'}`);
  if (origin) {
    const routes = Object.keys(pages).filter(route => route !== '/privacy' && route !== '/terms');
    await writeFile(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${escape(origin + route)}</loc></url>`).join('')}</urlset>\n`);
  }
  console.log(`Pre-rendered ${Object.keys(pages).length} pages with unique metadata. ${origin ? 'Sitemap and canonical URLs generated.' : 'Absolute URLs and sitemap pending verified websiteUrl; no domain invented.'}`);
} finally {
  await server.close();
}
