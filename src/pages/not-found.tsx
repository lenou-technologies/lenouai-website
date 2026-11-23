import { useEffect } from 'react';
import { Link } from 'wouter';
import { Shell } from '@/components/site';

export default function NotFound() {
  useEffect(() => { document.title = 'Page not found — LeNou AI'; }, []);
  return (
    <Shell>
      <section className="page-hero"><div className="wrap narrow">
        <p className="eyebrow">404</p>
        <h1 className="display-lg">This page is not here.</h1>
        <p className="lede">The link may be outdated. Everything else is where you left it.</p>
        <div className="cta-row"><Link href="/" className="btn btn-primary" data-testid="link-404-home">Return home</Link></div>
      </div></section>
    </Shell>
  );
}
