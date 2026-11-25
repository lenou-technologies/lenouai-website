import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { config, has } from '@/lib/site';

export function Wordmark({ small }: { small?: boolean }) {
  return (
    <span className={small ? 'wordmark wordmark-sm' : 'wordmark'} aria-label="LeNou AI">
      LeNou<span className="wordmark-ai">AI</span>
    </span>
  );
}

const NAV = [ ['/', 'Home'], ['/about', 'About'], ['/support', 'Support'], ['/guide', 'Guide'], ['/contact', 'Contact'] ] as const;

export function Header() {
  const [loc] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [loc]);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open]);
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href="/" className="brand-link" data-testid="link-home-brand"><Wordmark /></Link>
        <nav aria-label="Primary" className="nav-desktop">
          <ul>
            {NAV.map(([h, l]) => (
              <li key={h}><Link href={h} className="nav-link" aria-current={loc === h ? 'page' : undefined} data-testid={`link-nav-${l.toLowerCase()}`}>{l}</Link></li>
            ))}
          </ul>
        </nav>
        <span className="status-pill hide-sm"><span className="dot" aria-hidden="true" />Coming soon</span>
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(o => !o)} data-testid="button-menu">
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={open ? 'burger open' : 'burger'} aria-hidden="true"><i /><i /></span>
        </button>
      </div>
      <nav id="mobile-nav" aria-label="Mobile" className={open ? 'nav-mobile open' : 'nav-mobile'} hidden={!open}>
        <ul className="wrap">
          {NAV.map(([h, l], i) => (
            <li key={h} style={{ animationDelay: `${i * 50}ms` }}><Link href={h} className="nav-m-link" aria-current={loc === h ? 'page' : undefined} data-testid={`link-mnav-${l.toLowerCase()}`}>{l}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Wordmark />
          <p className="footer-note">Coming Soon on iOS and Android.</p>
          <p className="footer-legal" data-testid="text-footer-legal">
            &copy; {year} {has(config.legalCompanyName) ? config.legalCompanyName : 'LeNou AI'}. All rights reserved.
            {!has(config.legalCompanyName) && <span className="pending-inline"> &middot; Legal company name pending</span>}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links">
            <li><Link href="/privacy" data-testid="link-footer-privacy">Privacy Policy</Link></li>
            <li><Link href="/terms" data-testid="link-footer-terms">Terms of Service</Link></li>
            <li><Link href="/support" data-testid="link-footer-support">Support</Link></li>
            <li><Link href="/guide" data-testid="link-footer-guide">Guide</Link></li>
            <li><Link href="/contact" data-testid="link-footer-contact">Contact</Link></li>
            <li><Link href="/about" data-testid="link-footer-about">About</Link></li>
          </ul>
        </nav>
      </div>
      <div className="wrap footer-fine">LeNou AI is an organization and productivity app in development. It is not a bank and does not provide lending, investment, tax, or legal advice.</div>
    </footer>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main" tabIndex={-1}>{children}</main>
      <Footer />
    </>
  );
}

export function Pending({ children = 'Pending — to be provided by the owner' }: { children?: ReactNode }) {
  return <span className="pending" data-testid="status-pending">{children}</span>;
}

export function EmailValue({ value, testId }: { value: string; testId: string }) {
  if (!has(value)) return <Pending>Email address pending — not yet configured</Pending>;
  return <a href={`mailto:${value}`} className="text-link" data-testid={testId}>{value}</a>;
}

/** The support number: one link that calls on a phone, with the "LENOU" spelling beside it. */
export function PhoneValue({ testId }: { testId: string }) {
  if (!has(config.supportPhone)) return <Pending>Phone number pending — not yet configured</Pending>;
  return (
    <span>
      <a href={`tel:${config.supportPhone}`} className="text-link" data-testid={testId}>{config.supportPhoneDisplay}</a>
      {' '}<span className="fine">({config.supportPhoneWords})</span>
    </span>
  );
}

/** Shown wherever the number invites a text (carrier rules for a "text us" call to action). */
export function SmsNote() {
  return (
    <p className="fine">
      Text us for help with LeNou products. Message frequency varies with your questions. Message and data rates may apply.
      Reply STOP to stop texts from us, or HELP for help. We do not share your number for marketing. See our{' '}
      <Link href="/privacy" className="text-link">Privacy Policy</Link> and <Link href="/terms" className="text-link">Terms</Link>.
    </p>
  );
}

export function TextValue({ value, label }: { value: string; label: string }) {
  return has(value) ? <span>{value}</span> : <Pending>{label}</Pending>;
}

export function Verify({ children }: { children: ReactNode }) {
  return (
    <aside className="verify" role="note">
      <strong>Requires owner verification</strong>
      <span>{children}</span>
    </aside>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="wrap narrow">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="display-lg reveal d1">{title}</h1>
        {children && <div className="lede reveal d2">{children}</div>}
      </div>
    </section>
  );
}
