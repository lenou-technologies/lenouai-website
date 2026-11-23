import { Link } from 'wouter';
import { Shell } from '@/components/site';
import { ConceptPreview } from '@/components/concept';
import { usePageMeta } from '@/lib/site';

const FEATURES = [
  { n: '01', t: 'Personal Finance', d: 'Organize manually entered expenses, bills, debts, and financial information in one calm, readable place.', k: 'You type it in. You stay in control of what is recorded.' },
  { n: '02', t: 'Business Organization', d: 'Manage business-related financial records and operational tasks alongside the rest of your life, without blurring the two.', k: 'Separate spaces for personal and business matters.' },
  { n: '03', t: 'Daily Planning', d: 'Keep track of tasks, schedules, and important activities so the day ahead feels considered rather than crowded.', k: 'Gentle structure for busy weeks.' },
  { n: '04', t: 'Your Personal AI Assistant', d: 'An AI assistant whose name is chosen by each user during account setup. It is designed to help you find, summarize, and organize what you have entered.', k: 'Your assistant, your chosen name.' },
  { n: '05', t: 'Duo', d: 'A permission-based collaboration experience for trusted people, including friends, family members, and partners. You decide what is shared, and with whom.', k: 'Sharing only by explicit permission.' },
  { n: '06', t: 'Receipt Organization', d: 'Capture and organize receipt information so records are easier to find when you need them.', k: 'Less paper, more order.' },
];

export default function Home() {
  usePageMeta('/');
  return (
    <Shell>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true"><span className="orb o1" /><span className="orb o2" /></div>
        <div className="wrap hero-grid">
          <div>
            <p className="status-pill reveal" data-testid="status-launch"><span className="dot" aria-hidden="true" />Coming Soon on iOS and Android</p>
            <h1 id="hero-title" className="display-xl reveal d1">Bring clarity to your life <em>and</em> finances.</h1>
            <p className="lede reveal d2">LeNou AI is being developed to bring personal finance, business organization, daily planning, and a personalized AI assistant together in one thoughtfully designed experience.</p>
            <div className="cta-row reveal d3">
              <Link href="/about" className="btn btn-primary" data-testid="link-hero-about">Learn about LeNou AI</Link>
              <a href="#capabilities" className="btn btn-ghost" data-testid="link-hero-capabilities">See what it is designed to do</a>
            </div>
          </div>
          <div className="reveal d2"><ConceptPreview /></div>
        </div>
      </section>

      <section className="intro wrap" aria-labelledby="what-title">
        <p className="eyebrow">What LeNou AI is</p>
        <h2 id="what-title" className="display-md">One quiet place for the things that tend to scatter.</h2>
        <div className="intro-cols">
          <p>LeNou AI is an AI-assisted personal finance, business organization, and productivity app currently in development. It is designed to help you keep manually entered financial details, business records, plans, and receipts organized together, with an assistant you name yourself.</p>
          <p>It is an organizational tool. LeNou AI does not connect directly to bank accounts, and it does not provide banking, lending, investment, or tax advice. It simply helps you see what you have chosen to record, more clearly.</p>
        </div>
      </section>

      <section id="capabilities" className="features" aria-labelledby="cap-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Core capabilities &middot; planned for launch</p>
            <h2 id="cap-title" className="display-md">Six areas, designed to work as one.</h2>
          </div>
          <ol className="feature-list">
            {FEATURES.map(f => (
              <li key={f.n} className="feature" data-testid={`card-feature-${f.n}`}>
                <span className="f-num" aria-hidden="true">{f.n}</span>
                <div>
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </div>
                <p className="f-key">{f.k}</p>
              </li>
            ))}
          </ol>
          <p className="fine">All features described here are in development and may change before public release. None have been publicly launched.</p>
        </div>
      </section>

      <section className="principles wrap" aria-labelledby="pr-title">
        <h2 id="pr-title" className="sr-only">Principles</h2>
        <div className="principle"><span>Clarity</span><p>Information arranged so it can be understood at a glance.</p></div>
        <div className="principle"><span>Simplicity</span><p>Fewer screens, fewer decisions, less noise.</p></div>
        <div className="principle"><span>Control</span><p>You choose what to enter, what to share, and what your assistant is called.</p></div>
      </section>

      <section className="closing" aria-labelledby="close-title">
        <div className="wrap closing-inner">
          <div>
            <p className="eyebrow light">Launch status</p>
            <h2 id="close-title" className="display-md">Coming Soon on iOS and Android.</h2>
            <p>LeNou AI is preparing for public launch. There is nothing to sign up for yet, and no app to download today.</p>
          </div>
          <ul className="quick-links">
            <li><Link href="/about" data-testid="link-quick-about">About<span aria-hidden="true">&rarr;</span></Link></li>
            <li><Link href="/support" data-testid="link-quick-support">Support<span aria-hidden="true">&rarr;</span></Link></li>
            <li><Link href="/privacy" data-testid="link-quick-privacy">Privacy Policy<span aria-hidden="true">&rarr;</span></Link></li>
            <li><Link href="/contact" data-testid="link-quick-contact">Contact<span aria-hidden="true">&rarr;</span></Link></li>
          </ul>
        </div>
      </section>
    </Shell>
  );
}
