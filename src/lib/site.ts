import site from '@/config/site.json';
import meta from '@/config/page-meta.json';
import { useEffect } from 'react';

export const config = site as Record<keyof typeof site, string>;
export type RouteKey = keyof typeof meta;
export const has = (v: string | undefined) => !!v && v.trim().length > 0;

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute('content', value);
}

export function usePageMeta(route: RouteKey) {
  useEffect(() => {
    const m = meta[route];
    document.title = m.title;
    setMeta('name', 'description', m.description);
    setMeta('property', 'og:title', m.title);
    setMeta('property', 'og:description', m.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'LeNou AI');
    setMeta('name', 'twitter:title', m.title);
    setMeta('name', 'twitter:description', m.description);
    setMeta('name', 'robots', route === '/privacy' || route === '/terms' ? 'noindex, follow' : 'index, follow');
    if (has(config.websiteUrl)) {
      const url = config.websiteUrl.replace(/\/$/, '') + route;
      setMeta('property', 'og:url', url);
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
      canonical.href = url;
    }
    window.scrollTo(0, 0);
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [route]);
}
