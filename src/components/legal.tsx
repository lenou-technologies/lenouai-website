import { Link } from 'wouter';
import type { ReactNode } from 'react';

export type Sec = { id: string; title: string; body: ReactNode };

export function LegalDoc({ sections, banner }: { sections: Sec[]; banner: ReactNode }) {
  return (
    <div className="wrap legal-layout">
      <nav aria-label="Sections" className="toc">
        <p className="toc-title">Contents</p>
        <ol>{sections.map((s, i) => <li key={s.id}><a href={`#${s.id}`} data-testid={`link-toc-${s.id}`}><span>{String(i + 1).padStart(2, '0')}</span>{s.title}</a></li>)}</ol>
        <p className="toc-alt">See also <Link href="/privacy">Privacy</Link> &middot; <Link href="/terms">Terms</Link></p>
      </nav>
      <article className="legal">
        <div className="draft-banner" role="note">{banner}</div>
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} aria-labelledby={`h-${s.id}`} className="legal-sec">
            <h2 id={`h-${s.id}`}><span className="sec-num">{String(i + 1).padStart(2, '0')}</span>{s.title}</h2>
            {s.body}
          </section>
        ))}
      </article>
    </div>
  );
}
