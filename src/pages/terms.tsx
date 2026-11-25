import { Shell, PageHero, EmailValue, PhoneValue } from '@/components/site';
import { LegalDoc, type Sec } from '@/components/legal';
import { config, usePageMeta } from '@/lib/site';

const sections: Sec[] = [
  { id: 'website', title: 'About LeNou AI and These Terms', body: <>
    <p>These Terms of Service (“Terms”) govern access to and use of the LeNou AI informational website at <a href={config.websiteUrl}>https://lenouai.com</a>, operated by LeNou Technologies LLC (“LeNou Technologies,” “we,” “us,” or “our”).</p>
    <p>LeNou AI is developing a mobile application that is currently Coming Soon.</p>
    <p>At this stage, these Terms apply to the informational website. They do not establish the contractual terms governing mobile-app accounts, paid subscriptions, AI interactions, financial tools, or other application features that are not yet publicly available.</p>
    <p>Before the LeNou AI Mobile App launches, we intend to update these Terms or provide applicable additional terms describing the services then offered.</p>
  </> },
  { id: 'use', title: 'Permitted Website Use', body: <>
    <p>You may browse and use the website for lawful personal or business informational purposes.</p>
    <p>You agree not to:</p>
    <ul>
      <li>Interfere with the operation, availability, or security of the website.</li>
      <li>Attempt unauthorized access to website systems or infrastructure.</li>
      <li>Introduce malicious code or engage in harmful technical activity.</li>
      <li>Use the website in a manner that violates applicable law or infringes the rights of others.</li>
    </ul>
    <p>The Coming Soon website does not currently provide user accounts or an account suspension process.</p>
  </> },
  { id: 'product', title: 'Product Information and Availability', body: <>
    <p>Descriptions of LeNou AI features, designs, capabilities, and planned services are provided for general informational purposes.</p>
    <p>Features under development may be changed, postponed, modified, or discontinued before release.</p>
    <p>Information on the website does not guarantee a specific launch date, feature set, price, subscription plan, or future availability.</p>
    <p>The website does not currently offer subscription purchases, payment checkout, or mobile-app account registration.</p>
  </> },
  { id: 'information', title: 'Informational Content', body: <>
    <p>The website provides general company and product information.</p>
    <p>Its content does not constitute personalized financial, investment, tax, accounting, legal, or other professional advice.</p>
    <p>You should consult appropriately qualified professionals when making decisions that require such advice.</p>
    <p>Any terms governing future AI assistance or financial functionality will be reviewed and disclosed based on the mobile application’s actual capabilities before public launch.</p>
  </> },
  { id: 'materials', title: 'Website Materials and Intellectual Property', body: <>
    <p>Unless otherwise indicated, the website’s text, branding, graphics, design, and other materials are owned by LeNou Technologies LLC or its licensors.</p>
    <p>Accessing the website does not transfer ownership of these materials or grant rights beyond ordinary lawful website use.</p>
    <p>All rights remain subject to applicable law and relevant third-party rights.</p>
    <p>Ownership and processing permissions for content created or uploaded through the future mobile application will be addressed in applicable application terms before launch.</p>
  </> },
  { id: 'email', title: 'Email Communications', body: <>
    <p>The website provides email links and a support phone number for contacting LeNou Technologies LLC.</p>
    <p>Please avoid including unnecessary sensitive information in ordinary email messages.</p>
    <p>Information you send to us is handled as described in our Privacy Policy, subject to applicable law and relevant service-provider practices.</p>
    <p>Sending an email does not create a mobile-app account, paid subscription, or other purchase relationship.</p>
  </> },
  { id: 'sms', title: 'Text Messages (LeNou Support)', body: <>
    <p>LeNou Support is a text and phone line run by LeNou Technologies LLC at {config.supportPhoneDisplay} ({config.supportPhoneWords}). When you text us, we reply to your question about LeNou products. We send texts only in reply to you; we do not send marketing texts from this number.</p>
    <p>Message frequency varies with your questions. Message and data rates may apply. Reply STOP to stop receiving texts from us; we send one message to confirm, then no more. Reply HELP for help, or email <EmailValue value={config.supportEmail} testId="link-terms-sms-email" />.</p>
    <p>Mobile carriers are not liable for delayed or undelivered messages. How we handle your phone number and messages is explained in the “Text messages” section of our <a href="/privacy">Privacy Policy</a>. We do not share your mobile number or text messaging consent with third parties for marketing.</p>
  </> },
  { id: 'external', title: 'External Services and Links', body: <>
    <p>The website may contain links to third-party websites or services.</p>
    <p>Third parties may maintain their own terms, privacy policies, and operational practices.</p>
    <p>We do not control every aspect of independent third-party services and are not responsible for their independent conduct except as required by applicable law.</p>
    <p>Any third-party integrations used by the future mobile application will be addressed as appropriate when those services are offered.</p>
  </> },
  { id: 'availability', title: 'Website Availability, Accuracy, and Liability', body: <>
    <p>We seek to maintain useful and accurate website information, but the website may contain errors, omissions, or outdated descriptions.</p>
    <p>Website access may be interrupted, modified, or temporarily unavailable.</p>
    <p>To the extent permitted by applicable law, the website is provided on an “as is” and “as available” basis without warranties or guarantees of accuracy, completeness, uninterrupted availability, or error-free operation.</p>
    <p>To the extent permitted by applicable law, LeNou Technologies LLC disclaims liability for indirect or consequential losses arising from the use of, or inability to use, the informational website.</p>
    <p>Nothing in these Terms excludes or limits rights, remedies, or liabilities that cannot lawfully be excluded or limited.</p>
    <p>Terms governing future mobile-app services, including AI and financial functionality, will require additional review before those services launch.</p>
  </> },
  { id: 'changes', title: 'Changes to the Website and These Terms', body: <>
    <p>We may modify the website, its informational content, or these Terms.</p>
    <p>When revised Terms become effective, we will publish the updated version and its effective date on the website.</p>
    <p>We will provide additional notice where required by applicable law.</p>
    <p>Because the Coming Soon website does not currently provide user accounts, these Terms do not promise account-based notifications or individual email notice to every website visitor.</p>
    <p>Before mobile-app services become publicly available, we intend to update these Terms or provide appropriate additional terms covering their actual features and user obligations.</p>
  </> },
  { id: 'law', title: 'Applicable Law and Disputes', body: <>
    <p>These Terms are governed by the laws of the State of Oklahoma, United States, subject to any mandatory legal protections that apply.</p>
    <p>Nothing in these Terms is intended to waive rights or remedies that cannot lawfully be waived under applicable law.</p>
    <p>Any additional dispute-resolution arrangements for future mobile-app services will require separate review and appropriate disclosure before becoming applicable.</p>
  </> },
  { id: 'contact', title: 'Contact', body: <>
    <p>{config.legalCompanyName}</p>
    <p>Email: <EmailValue value={config.generalEmail} testId="link-terms-email" /></p>
    <p>Phone (call or text): <PhoneValue testId="link-terms-phone" /></p>
    <p>Website: <a href={config.websiteUrl}>https://lenouai.com</a></p>
    <p data-testid="text-terms-date">Effective Date: <strong>October 26, 2026</strong> · Last updated: <strong>November 25, 2026</strong></p>
  </> },
];

export default function Terms() {
  usePageMeta('/terms');
  return (
    <Shell>
      <PageHero eyebrow="Legal" title="Terms of Service">
        <p>LeNou AI | {config.legalCompanyName}</p>
      </PageHero>
      <LegalDoc sections={sections} banner={<><strong>Effective Date: October 26, 2026</strong></>} />
    </Shell>
  );
}
