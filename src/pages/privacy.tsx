import { Shell, PageHero, EmailValue, PhoneValue } from '@/components/site';
import { LegalDoc, type Sec } from '@/components/legal';
import { config, usePageMeta } from '@/lib/site';

const sections: Sec[] = [
  { id: 'scope', title: 'Who we are and what this policy covers', body: <>
    <p>LeNou Technologies LLC ("LeNou AI", "we", "us") operates the LeNou AI mobile app (the "App") and the website lenouai.com (the "Website"). This policy explains what information we collect through the App and the Website, how we use and share it, how long we keep it, and the choices you have.</p>
    <p>LeNou AI is an organization and productivity tool. It does not connect to bank accounts, and it does not provide banking, lending, investment, tax or legal advice.</p>
  </> },
  { id: 'information', title: 'Information you provide in the App', body: <>
    <ul>
      <li>Account information: your email address and the sign-in details you use to create and access your account. Passwords are handled by our sign-in provider; LeNou AI never stores your password.</li>
      <li>Profile and preferences: for example your assistant's name, language, time zone, country, currency and display settings.</li>
      <li>Content you enter: tasks, calendar events, reminders, notes and plans.</li>
      <li>Habits you create, your check-ins, and the times you place habits in Plan My Day.</li>
      <li>Financial and business records you enter yourself: expenses, bills, debts, accounts and balances you type in, business records, revenue, expenses and payroll records. Business and payroll records may include information about other people, such as employees or customers, that you choose to enter. Please only enter information you are allowed to use.</li>
      <li>Receipts: photos of receipts you capture or upload, and the details read from them.</li>
      <li>Voice: recordings you make, Voice Notes you save, and transcripts.</li>
      <li>AI assistant: the messages you send to the assistant, its replies, your conversation history, and AI memory if you turn it on.</li>
      <li>LeNou Duo: your Duo membership, invitations, and the items you choose to share with your Duo partner.</li>
      <li>Messages to us: if you email us, your name, email address, your message and any attachments.</li>
    </ul>
  </> },
  { id: 'automatic-information', title: 'Information collected automatically', body: <>
    <ul>
      <li>Approximate location for weather: if you allow location access, the App uses your device's location to show local weather. Before it is sent to our weather provider, the location is rounded to about 1 km. We do not keep a history of your location in your account.</li>
      <li>Camera and microphone: used only when you choose to capture a receipt or record your voice.</li>
      <li>Notifications: reminders are scheduled as notifications on your device.</li>
      <li>Technical information: when the App or the Website connects to our servers, our hosting provider processes technical data such as IP address, device or browser information, the features or pages requested, and times. We use it to deliver the service, keep it secure and fix problems.</li>
    </ul>
    <p>We do not use advertising trackers, we do not sell your personal information, and we do not track you across other companies' apps or websites.</p>
  </> },
  { id: 'use', title: 'How we use information', body: <>
    <ul>
      <li>To provide the App's features: storing and organizing what you enter, reminders, weather, receipts, Voice Notes, Duo sharing, data export and account deletion.</li>
      <li>To run the AI assistant and voice features you ask for (see section 5).</li>
      <li>To manage subscriptions bought through the App Store.</li>
      <li>To send service emails, such as confirming that your account has been deleted or telling a Duo member that their Duo has ended. We do not send marketing emails.</li>
      <li>To keep the App and the Website secure, prevent abuse, troubleshoot and meet legal obligations.</li>
      <li>To answer your questions and requests.</li>
    </ul>
    <p>We do not use your information to show you ads. LeNou AI does not train AI models on your content.</p>
  </> },
  { id: 'ai-and-voice', title: 'AI and voice processing', body: <>
    <p>AI and speech features run only after you give permission in the App. When you use them:</p>
    <ul>
      <li>Your message and relevant conversation history are sent directly from our servers to OpenAI. Depending on the feature, this may include selected task or calendar details, financial references, business summaries, receipt images, or AI memory if you have turned it on.</li>
      <li>Reading a receipt sends the receipt photos directly from our servers to OpenAI to extract the details.</li>
      <li>Voice transcription sends your audio to ElevenLabs. Spoken replies send the reply text to ElevenLabs.</li>
    </ul>
    <p>You can withdraw permission at any time in Settings → Privacy &amp; Security. Features that do not use AI keep working. Withdrawing stops future AI and speech requests; it does not delete information that was already processed. AI and speech providers may keep data for a limited time under their own terms, for example for abuse monitoring, so we cannot guarantee that they keep no copy.</p>
    <p>AI responses can be inaccurate. Check important information, especially financial information, yourself.</p>
  </> },
  { id: 'providers', title: 'Service providers we use', body: <>
    <p>We use the following service providers to run LeNouAI. Each receives only the data needed for its purpose:</p>
    <ul>
      <li><strong>Clerk</strong>: account sign-up, sign-in and security (your email address and sign-in data).</li>
      <li><strong>OpenAI</strong>: answers your messages to the AI assistant and reads receipt photos you choose to scan. This happens only after you allow AI processing in the app. Requests are sent directly from our servers to OpenAI.</li>
      <li><strong>ElevenLabs</strong>: turns your voice recordings into text and reads replies aloud. This happens only when you use voice features and agree to send the recording.</li>
      <li><strong>WeatherAPI.com</strong>: shows local weather. It receives only your location rounded to about 1 km (see section 3), and that location is never stored.</li>
      <li><strong>Apple</strong>: processes App Store purchases and subscriptions. If you subscribe, we receive transaction information from Apple to confirm your subscription. We never receive your payment card details.</li>
      <li><strong>RevenueCat</strong>: keeps track of your App Store subscription status. It receives an app-specific customer ID and your purchase records from Apple. It does not receive your name, your email or your financial entries.</li>
      <li><strong>Resend</strong>: sends account emails, such as the confirmation that your account was deleted.</li>
      <li><strong>Render</strong>: hosts the App's servers in the United States (Virginia).</li>
      <li><strong>Supabase (on Amazon Web Services)</strong>: hosts the App's database and file storage in the United States.</li>
      <li><strong>GitHub (GitHub Pages)</strong>: hosts the Website.</li>
      <li><strong>Porkbun</strong>: our company email.</li>
      <li><strong>Twilio</strong>: carries calls and text messages to and from our support phone number (see "Text messages").</li>
    </ul>
    <p>We do not sell your personal information. We do not use it for advertising or for cross-app tracking. Financial information is entered by you manually. LeNouAI does not connect to your bank accounts.</p>
    <p>These providers process information for us under their own terms and privacy policies. We may also disclose information when the law requires it, to protect the rights and safety of our users or others, or as part of a business transfer such as a merger or acquisition, with notice where required.</p>
  </> },
  { id: 'duo-sharing', title: 'Sharing with your Duo partner', body: <>
    <p>Your records are private to your account. If you use LeNou Duo, your Duo partner can see only the items you choose to share and shared Duo items, such as joint accounts. Section 10 explains what happens to shared items when a Duo member deletes their account.</p>
  </> },
  { id: 'cookies', title: 'Website cookies and analytics', body: <>
    <p>The Website does not use Google Analytics, Meta Pixel, advertising pixels or similar tracking tools, and it does not use accounts or sessions to build visitor profiles. Our hosting provider may use technical mechanisms, such as security measures, under its own terms. If we add analytics or advertising tools in the future, we will update this policy first.</p>
  </> },
  { id: 'retention', title: 'How long we keep information', body: <>
    <ul>
      <li>Your account information and content: while your account exists, until you delete an item or delete your account.</li>
      <li>Voice Notes: until you delete them or your account. Recording copies may also remain on your device.</li>
      <li>After you delete your account: see section 10, including backup copies for up to 30 days.</li>
      <li>The email address used for the deletion confirmation: no more than 24 hours.</li>
      <li>Emails you send us: as long as reasonably needed to respond, keep business records and meet legal obligations.</li>
      <li>Technical logs: for limited periods, as needed for security and operations and according to our providers' practices.</li>
    </ul>
  </> },
  { id: 'account-deletion', title: 'Deleting your account', body: <>
    <p>You can delete your account at any time in the app: Settings → Privacy &amp; Security → Delete Account. You can choose to delete it now, or in 7 days (you can cancel during those 7 days). Your account is locked as soon as you confirm.</p>
    <p>Within 24 hours after deletion starts, we permanently delete your account and the data associated with it, including your profile, tasks, calendar, notes, voice recordings, receipt images, personal and business financial records, payroll records, AI conversations and memories, and your sign-in account.</p>
    <p>When deletion is complete, we send a confirmation to your sign-in email address. We keep that address only to send the confirmation, for no more than 24 hours, and then delete it.</p>
    <p>LeNou Duo: if you are a Duo member, you leave the Duo automatically. If you own a Duo, the Duo ends for both members, and we email your partner to let them know. Your partner keeps their own data, but data shared within the Duo, including joint accounts, is deleted.</p>
    <p>Deleted data cannot be restored from the app. Copies may remain in encrypted database backups and in our storage provider's recovery copies for up to 30 days before they are permanently removed. We do not use backups to restore deleted accounts.</p>
    <p>Deleting your account does not cancel an Apple subscription. Manage or cancel subscriptions in your iPhone Settings → Apple Account → Subscriptions.</p>
  </> },
  { id: 'inquiries', title: 'Your choices and rights', body: <>
    <ul>
      <li>Export: you can export a copy of your data in the App, in Settings → Privacy &amp; Security.</li>
      <li>Correction: you can edit or delete your information in the App at any time.</li>
      <li>Deletion: you can delete your account in the App (section 10).</li>
      <li>AI permission: you can withdraw it at any time (section 5).</li>
      <li>Location, camera, microphone and notifications: you can turn these on or off in your device settings.</li>
    </ul>
    <p>Depending on where you live, for example in California, the European Union or the United Kingdom, you may have additional rights, such as to request access to, correction, deletion or a portable copy of your information, or to object to or restrict certain processing. To make a request, email contact@lenouai.com. We may need to verify your identity, and we will not treat you differently for using your rights.</p>
  </> },
  { id: 'security', title: 'Security', body: <>
    <p>We use reasonable administrative and technical safeguards. Information is encrypted in transit, and our providers encrypt stored data and backups. No app, website, email system or storage method is completely secure. Please do not send passwords, payment information, financial records or account numbers to us by ordinary email.</p>
  </> },
  { id: 'international', title: 'International processing', body: <>
    <p>Our service providers may process and store information in the United States and other countries, which may have different data protection laws from where you live. We rely on our providers' safeguards for these transfers, as required by applicable law.</p>
  </> },
  { id: 'children', title: 'Children', body: <>
    <p>LeNou AI is intended for people who are 18 or older, and you must confirm that you are at least 18 to create an account. We do not knowingly collect information from children. If you believe a child has given us information, contact us and we will delete it.</p>
  </> },
  { id: 'sms', title: 'Text messages', body: <>
    <p>When you call or text the LeNou support number, {config.supportPhoneDisplay} ({config.supportPhoneWords}), we receive your phone number, the time and the content of your message, and we use them only to answer you and help with your account. Message frequency varies with your questions. Message and data rates may apply. Reply STOP to stop receiving texts from us, or HELP for help.</p>
    <p>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties. Our phone provider, Twilio, carries the messages for us only to deliver them.</p>
    <p>We keep support messages as long as reasonably needed to respond and to keep business records.</p>
  </> },
  { id: 'changes', title: 'Changes to this policy', body: <>
    <p>We may update this policy when our App, Website, providers or legal requirements change. We will post the updated version here with a new effective date, and we will give additional notice in the App or by email when the law requires it.</p>
  </> },
  { id: 'contact', title: 'Contact', body: <>
    <p>LeNou Technologies LLC<br />Email: <EmailValue value="contact@lenouai.com" testId="link-privacy-email" /><br />Phone (call or text): <PhoneValue testId="link-privacy-phone" /><br />Website: <a href="https://lenouai.com">https://lenouai.com</a></p>
  </> },
];

export default function Privacy() {
  usePageMeta('/privacy');
  return (
    <Shell>
      <PageHero eyebrow="Legal" title="Privacy Policy">
        <p>LeNou AI | {config.legalCompanyName}</p>
      </PageHero>
      <div className="[&_.legal-sec_p+p]:mt-4 [&_.legal-sec_ul]:list-disc [&_.legal-sec_ul]:pl-6 [&_.legal-sec_p+ul]:mt-4 [&_.legal-sec_ul+p]:mt-4">
        <LegalDoc sections={sections} banner={<><strong>Effective date: October 29, 2026</strong><br /><strong>Last updated: November 25, 2026</strong></>} />
      </div>
    </Shell>
  );
}
