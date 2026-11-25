import { Link } from 'wouter';
import { Shell, PageHero, EmailValue, TextValue, PhoneValue, SmsNote } from '@/components/site';
import { config, usePageMeta } from '@/lib/site';

export default function Contact() {
  usePageMeta('/contact');
  return (
    <Shell>
      <PageHero eyebrow="Contact" title="Write, call or text us.">
        <p>Email us, or call or text the LeNou support number. There is no contact form, so nothing you send passes through this website.</p>
      </PageHero>
      <div className="wrap narrow">
        <div className="contact-grid">
          <section className="contact-card" aria-labelledby="c-gen">
            <h2 id="c-gen">General questions</h2>
            <p>Questions about LeNou AI, its upcoming launch, or this website.</p>
            <EmailValue value={config.generalEmail} testId="link-email-general" />
          </section>
          <section className="contact-card" aria-labelledby="c-biz">
            <h2 id="c-biz">Business inquiries</h2>
            <p>Partnership, press, and other business-related correspondence.</p>
            <EmailValue value={config.businessEmail} testId="link-email-business" />
          </section>
          <section className="contact-card" aria-labelledby="c-tel">
            <h2 id="c-tel">Call or text</h2>
            <p>The LeNou support line, for questions about LeNou products.</p>
            <PhoneValue testId="link-phone-contact" />
            <SmsNote />
          </section>
          <section className="contact-card" aria-labelledby="c-sup">
            <h2 id="c-sup">Product support</h2>
            <p>Help with the app once it is available, and technical issues.</p>
            <Link href="/support" className="text-link" data-testid="link-contact-support">Visit the support page</Link>
          </section>
        </div>
        <section className="company-card" aria-labelledby="c-co">
          <h2 id="c-co">Company</h2>
          <dl><div><dt>Legal company name</dt><dd><TextValue value={config.legalCompanyName} label="Legal company name pending — to be provided by the owner" /></dd></div></dl>
          <p className="fine">Please do not send passwords, payment information, financial records, full account numbers, or other sensitive information by ordinary email.</p>
        </section>
      </div>
    </Shell>
  );
}
