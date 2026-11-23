import { Shell, PageHero, EmailValue } from '@/components/site';
import { config, usePageMeta } from '@/lib/site';

const FAQ = [
  ['Is LeNou AI available yet?', 'Not yet. LeNou AI is preparing for public launch on iOS and Android. This page will be updated when the app becomes available.'],
  ['Does LeNou AI connect to my bank?', 'LeNou AI is designed around information you enter manually. It does not offer direct bank connectivity, and it is not a bank or financial institution.'],
  ['Does LeNou AI give financial or tax advice?', 'No. LeNou AI is an organization and productivity tool. Any information from the AI assistant is general and should not be treated as professional financial, investment, tax, or legal advice.'],
  ['What is my AI assistant called?', 'The planned app experience will let you choose your assistant\'s name during account setup, rather than use a single default name shared by every user.'],
  ['What is Duo?', 'Duo is a planned collaboration experience designed to let you choose what information to share with trusted people, such as friends, family members, or partners. Its permission controls are still subject to verification before launch.'],
  ['How much will LeNou AI cost?', 'Pricing has not been announced. Any subscription details will be published before they take effect.'],
];

export default function Support() {
  usePageMeta('/support');
  return (
    <Shell>
      <PageHero eyebrow="Support" title="Help, in plain language.">
        <p>LeNou AI has not launched yet, so this page explains how support is planned to work and how to reach us in the meantime.</p>
      </PageHero>
      <div className="wrap narrow prose-block">
        <section aria-labelledby="s-contact" className="company-card">
          <h2 id="s-contact">Contacting support</h2>
          <p>Email support directly. Include your device model, operating system version, and a short description of what happened.</p>
          <p><EmailValue value={config.supportEmail} testId="link-email-support" /></p>
          <p className="fine">Response times have not been established yet. Never include passwords, payment information, financial records, full account numbers, or other sensitive information in an ordinary email.</p>
        </section>
        <section aria-labelledby="s-faq">
          <h2 id="s-faq">Frequently asked questions</h2>
          <div className="faq">
            {FAQ.map(([q, a], i) => (
              <details key={i} data-testid={`faq-${i}`}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section aria-labelledby="s-bug">
          <h2 id="s-bug">Reporting a technical problem</h2>
          <ol className="steps">
            <li>Note what you were doing when the problem happened.</li>
            <li>Record your device, operating system version, and app version.</li>
            <li>Take a screenshot if it helps, making sure it shows no sensitive personal or financial information.</li>
            <li>Send the details to the support email above.</li>
          </ol>
        </section>
        <section aria-labelledby="s-sub">
          <h2 id="s-sub">Subscriptions</h2>
          <p>Subscriptions are not available yet. Once they are, purchases made through the Apple App Store or Google Play are typically managed and cancelled through the account settings of that store. Billing questions about the app itself can be sent to support. Specific subscription terms will be published before any subscription becomes available.</p>
        </section>
        <section aria-labelledby="s-del">
          <h2 id="s-del">Account deletion</h2>
          <p>You can delete your account at any time in the app: Settings → Privacy &amp; Security → Delete Account. You can delete it now, or in 7 days (you can cancel during those 7 days). When deletion is complete, we send a confirmation to your sign-in email address. Deleting your account does not cancel an Apple subscription; manage it in your iPhone Settings → Apple Account → Subscriptions. For full details, see section 10 of our Privacy Policy.</p>
        </section>
      </div>
    </Shell>
  );
}
