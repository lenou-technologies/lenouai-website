import { Link } from 'wouter';
import { Shell, PageHero, TextValue } from '@/components/site';
import { config, usePageMeta } from '@/lib/site';

export default function About() {
  usePageMeta('/about');
  return (
    <Shell>
      <PageHero eyebrow="About" title={<>Clarity is a feeling <em>before</em> it is a feature.</>}>
        <p>LeNou AI exists to make personal and business organization feel lighter. It is currently preparing for public launch on iOS and Android.</p>
      </PageHero>
      <div className="wrap narrow prose-block">
        <section aria-labelledby="vision">
          <h2 id="vision">The vision</h2>
          <p>Money, work, and daily plans rarely live in the same place, yet they shape each other constantly. LeNou AI is being built to bring them into one thoughtfully designed experience, so the picture of your week, your obligations, and your records can be seen together.</p>
        </section>
        <section aria-labelledby="goal">
          <h2 id="goal">Simplifying personal and business organization</h2>
          <p>The goal is not to add another dashboard to manage. It is to reduce the number of places you have to look. The planned app will organize expenses, bills, debts, business records, tasks, and receipts side by side, with a personal AI assistant, named by you, to help you find and make sense of what you enter.</p>
        </section>
        <section aria-labelledby="values">
          <h2 id="values">What guides the work</h2>
          <dl className="values">
            <div><dt>Clarity</dt><dd>Plain language, calm layouts, and information that is easy to read.</dd></div>
            <div><dt>Simplicity</dt><dd>Only the features that genuinely help, presented without clutter.</dd></div>
            <div><dt>User control</dt><dd>The planned experience is designed to let you choose what to enter, what to share through Duo, and how to name your assistant.</dd></div>
          </dl>
        </section>
        <section aria-labelledby="status">
          <h2 id="status">Where things stand</h2>
          <p>LeNou AI is in development and preparing for public launch. It is not yet available in any app store. Features and timelines may change as the product is refined.</p>
        </section>
        <section aria-labelledby="company" className="company-card" data-testid="section-company">
          <p className="eyebrow">Company</p>
          <h2 id="company">Who operates LeNou AI</h2>
          <dl>
            <div><dt>Product</dt><dd>LeNou AI</dd></div>
            <div><dt>Legal company name</dt><dd data-testid="text-legal-name"><TextValue value={config.legalCompanyName} label="Legal company name pending — to be provided by the owner" /></dd></div>
          </dl>
          <p className="fine">LeNou AI is a product developed by {config.legalCompanyName}. For questions, visit the <Link href="/contact" className="text-link">contact page</Link>.</p>
        </section>
      </div>
    </Shell>
  );
}
