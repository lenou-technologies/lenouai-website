import { useEffect, useState, type ReactNode } from 'react';
import { Shell } from '@/components/site';
import { usePageMeta } from '@/lib/site';
import content from '@/data/lenouai-guide-content.json';
import '@/pages/guide.css';

type Item = { title: string; steps: string[] };
type Section = { id: string; icon: string; title: string; items: Item[] };
type Lang = {
  navLabel: string; languageLabel: string; languageName: string; pageTitle: string;
  pageIntro: string; tocTitle: string; sections: Section[];
};

const LANGS = content.languages as unknown as Record<string, Lang>;
const CODES = ['en', 'vi', 'es', 'zh-CN'] as const;
type Code = (typeof CODES)[number];
const STORAGE_KEY = 'lenouai-guide-lang';
const EMAIL = 'contact@lenouai.com';

const isCode = (v: string | null): v is Code => !!v && (CODES as readonly string[]).includes(v);

function fromBrowser(): Code {
  const list = typeof navigator === 'undefined' ? [] : (navigator.languages?.length ? navigator.languages : [navigator.language]);
  const l = (list[0] || '').toLowerCase();
  if (l.startsWith('vi')) return 'vi';
  if (l.startsWith('es')) return 'es';
  if (l.startsWith('zh')) return 'zh-CN';
  return 'en';
}

function resolveLang(): Code {
  if (typeof window === 'undefined') return 'en';
  const q = new URLSearchParams(window.location.search).get('lang');
  return isCode(q) ? q : fromBrowser();
}

function setMetaContent(sel: string, value: string) {
  document.head.querySelector<HTMLMetaElement>(sel)?.setAttribute('content', value);
}

/** Text with mailto link for the support address; never injects HTML. */
function withEmail(text: string, key: string): ReactNode[] {
  return text.split(EMAIL).flatMap((part, i) => {
    const out: ReactNode[] = [];
    if (i > 0) out.push(<a key={`${key}-m${i}`} href={`mailto:${EMAIL}`} className="text-link" data-testid="link-guide-email">{EMAIL}</a>);
    if (part) out.push(part);
    return out;
  });
}

/** Only **bold** markup is parsed; everything else renders as escaped text. */
function Rich({ text }: { text: string }) {
  const parts = text.split('**');
  return <>{parts.map((p, i) => (i % 2 === 1 && i < parts.length - 1
    ? <strong key={i}>{withEmail(p, `b${i}`)}</strong>
    : <span key={i}>{withEmail(i % 2 === 1 ? `**${p}` : p, `t${i}`)}</span>))}</>;
}

export default function Guide() {
  usePageMeta('/guide');
  const [code, setCode] = useState<Code>('en');
  const t = LANGS[code];

  useEffect(() => {
    setCode(resolveLang());
    const onPop = () => setCode(resolveLang());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.getAttribute('lang');
    html.setAttribute('lang', code);
    return () => { if (prev === null) html.removeAttribute('lang'); else html.setAttribute('lang', prev); };
  }, [code]);

  useEffect(() => {
    const title = `${t.pageTitle} | LeNouAI`;
    document.title = title;
    setMetaContent('meta[name="description"]', t.pageIntro);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', t.pageIntro);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', t.pageIntro);
  }, [t]);

  const choose = (next: Code) => {
    if (next === code) return;
    setCode(next);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.pushState(window.history.state, '', url.pathname + url.search + url.hash);
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch { /* storage unavailable */ }
  };

  return (
    <Shell>
      <section className="page-hero guide-hero">
        <div className="wrap narrow">
          <p className="eyebrow reveal">{t.navLabel}</p>
          <h1 className="display-lg reveal d1" data-testid="text-guide-title">{t.pageTitle}</h1>
          <div className="lede reveal d2"><p data-testid="text-guide-intro">{t.pageIntro}</p></div>
          <div className="guide-lang reveal d3" role="group" aria-labelledby="guide-lang-label">
            <span id="guide-lang-label" className="guide-lang-label">{t.languageLabel}</span>
            <ul>
              {CODES.map(c => (
                <li key={c}>
                  <button type="button" lang={c} aria-pressed={c === code} onClick={() => choose(c)} className="guide-lang-btn" data-testid={`button-lang-${c}`}>
                    {LANGS[c].languageName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="wrap legal-layout guide-layout" lang={code}>
        <nav className="toc guide-toc" aria-label={t.tocTitle}>
          <p className="toc-title">{t.tocTitle}</p>
          <ol>
            {t.sections.map((s, i) => (
              <li key={s.id}><a href={`#${s.id}`} data-testid={`link-toc-${s.id}`}><span>{String(i + 1).padStart(2, '0')}</span>{s.title}</a></li>
            ))}
          </ol>
        </nav>
        <div className="guide-body">
          {t.sections.map((s, i) => (
            <section key={s.id} id={s.id} className="guide-sec" aria-labelledby={`${s.id}-h`} data-testid={`section-guide-${s.id}`}>
              <h2 id={`${s.id}-h`}><span className="sec-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{s.title}</h2>
              <div className="guide-items">
                {s.items.map((it, j) => (
                  <div key={j} className="guide-item">
                    <h3>{it.title}</h3>
                    <ol className="guide-steps">
                      {it.steps.map((st, k) => <li key={k}><Rich text={st} /></li>)}
                    </ol>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Shell>
  );
}
