import LegalPage from '@/components/LegalPage';

const sections = [
  {title:'Information we collect', paragraphs:['We may collect information you provide directly and information generated while you use LOKOAX.'], bullets:['Account details such as name, email and profile information.','Learning activity such as lessons completed, quiz results and progress.','Technical information such as browser, device and usage events.']},
  {title:'How we use information', paragraphs:['Information can be used to operate, personalise, secure and improve the learning experience.'], bullets:['Provide account access and save progress.','Process subscriptions and support requests.','Understand product performance and improve content.']},
  {title:'Payments', paragraphs:['Payment processing should be handled by approved payment providers. LOKOAX should avoid storing full payment-card details where possible.'], bullets:['Billing records may include plan, amount, payment status and renewal information.']},
  {title:'Cookies & analytics', paragraphs:['Cookies and similar technologies may support sign-in, preferences, analytics and security.'], bullets:['A separate Cookie Policy can explain categories and consent options.']},
  {title:'Sharing & service providers', paragraphs:['Data may be shared with vendors needed to operate the service, subject to appropriate contractual safeguards.'], bullets:['Examples can include hosting, authentication, email, analytics and payments.']},
  {title:'Data retention & security', paragraphs:['Retain information only as long as needed for product, legal and operational purposes, with reasonable technical and organisational safeguards.']},
  {title:'Your choices & rights', paragraphs:['Depending on applicable law, users may have rights to access, correct or delete information and manage communication preferences.']},
  {title:'Children & student privacy', paragraphs:['If LOKOAX serves minors, age requirements, parental consent and school-related privacy obligations should be defined clearly before launch.']},
  {title:'Policy updates & contact', paragraphs:['Material changes should be communicated appropriately. Add the official privacy contact and legal entity details before publication.']}
];

export default function PrivacyPage(){
  return <LegalPage eyebrow="Privacy & data" title="Privacy Policy" description="This page explains how LOKOAX can collect, use, protect and manage personal information across the website and learning platform." summary={['Your account and learning progress are personal data.','Payments should be handled by secure providers.','Users should have clear privacy choices.','Minors/student privacy needs special attention.']} sections={sections}/>;
}
