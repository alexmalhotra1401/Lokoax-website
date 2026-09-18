import Link from 'next/link';
import Shell from '@/components/Shell';
import FAQDirectory from '@/components/FAQDirectory';
import { CreditCard, UserRound, Settings2 } from 'lucide-react';

const groups = [
  { title:'Free access', icon:'✓', subtitle:'Starting with LOKOAX without a paid plan.', items:[
    {q:'Can I use LOKOAX for free?',a:'Yes. The Free plan is designed to provide selected subjects, core lessons, limited practice questions and basic progress tracking.'},
    {q:'Do I need a credit card to create a free account?',a:'No credit card should be required to create a Free learner account.'},
    {q:'Will my progress be saved on Free?',a:'Yes. Learning activity should stay connected to your learner account so you can continue where you left off.'}
  ]},
  { title:'Premium', icon:'★', subtitle:'What changes when you upgrade.', items:[
    {q:'What does Premium include?',a:'Premium is designed to unlock all available subjects, unlimited practice, full quizzes and assessments, advanced progress tracking and premium learning resources.'},
    {q:'Can I upgrade later?',a:'Yes. You can start Free and move to Premium when you need more access.'},
    {q:'Is Premium monthly and yearly?',a:'The pricing experience currently supports monthly and annual Premium options.'}
  ]},
  { title:'Subjects', icon:'▤', subtitle:'Subject availability and learning structure.', items:[
    {q:'Which subjects are available?',a:'The current marketing experience features Mathematics, Science, English, Social Studies, Coding & IT and Aptitude. Final subject availability should reflect what is published in the learner portal.'},
    {q:'Can I learn more than one subject?',a:'Yes. Access depends on the learner plan and the subjects available in the product.'},
    {q:'How is content organised?',a:'Subjects are designed around chapters, topics, lessons, practice questions and quizzes so learners can follow a clear path.'}
  ]},
  { title:'Payments', icon:'$', subtitle:'Billing and payment questions.', items:[
    {q:'Which payment methods can I use?',a:'Supported payment methods will depend on the payment provider connected at launch.'},
    {q:'Where can I see invoices?',a:'Billing history and receipts should be available from the learner account once the payment system is connected.'},
    {q:'What if renewal fails?',a:'The final payment provider should manage retry rules and account access based on the billing policy.'}
  ]},
  { title:'Cancellation', icon:'↩', subtitle:'Changing or ending a Premium plan.', items:[
    {q:'Can I cancel Premium?',a:'Yes. The intended experience is that Premium can be cancelled from the learner account.'},
    {q:'Will cancellation delete progress?',a:'No. Learning history should remain connected to the learner account after Premium ends.'},
    {q:'Can I request a refund?',a:'Refund eligibility should follow the final Refund & Cancellation Policy and payment provider rules.'}
  ]},
  { title:'Devices', icon:'▣', subtitle:'Using LOKOAX across screens.', items:[
    {q:'Can I use LOKOAX on multiple devices?',a:'Yes. The website and learner experience are designed to work across modern desktop, tablet and mobile browsers.'},
    {q:'Does progress sync automatically?',a:'Once real authentication and backend storage are connected, progress should sync through the learner account.'},
    {q:'Do I need an app?',a:'No. The web experience is designed to be responsive. A mobile app can remain a separate product decision.'}
  ]},
  { title:'Account', icon:'●', subtitle:'Sign-up, login and profile access.', items:[
    {q:'How do I create an account?',a:'Choose Start Learning Free or a Premium plan, complete the sign-up form and verify your email.'},
    {q:'I forgot my password. What should I do?',a:'Use the Forgot Password link on the login screen. The current prototype is ready to connect to a real authentication provider.'},
    {q:'Can I edit profile information?',a:'That should be supported from the learner portal once account settings are connected to the backend.'}
  ]},
  { title:'Learning progress', icon:'↗', subtitle:'Completion, scores and history.', items:[
    {q:'How is progress calculated?',a:'The product can combine completed lessons, practice activity and quiz completion. The exact calculation should match the learner portal implementation.'},
    {q:'Can I retake quizzes?',a:'Retake rules can be configured by the product team. The marketing experience is designed to support repeatable practice.'},
    {q:'Does changing devices reset progress?',a:'No. Progress should be associated with the authenticated learner account, not one device.'}
  ]},
  { title:'Technical questions', icon:'⚙', subtitle:'Browser, loading and support.', items:[
    {q:'Which browsers work best?',a:'Use a current version of Chrome, Safari, Edge or Firefox.'},
    {q:'A lesson or quiz is not loading. What should I try?',a:'Refresh the page, check the connection, sign in again and contact support if the issue continues.'},
    {q:'How do I report a technical issue?',a:'Use the support contact once it is connected to the production help desk.'}
  ]}
];

export default function FAQPage(){
  return <Shell>
    <section className="page-hero"><div className="container"><div className="eyebrow">Help center</div><h1 className="page-title">How can we help you?</h1><p className="lead">Find answers about free access, Premium, subjects, payments, your account, learning progress and technical questions.</p></div></section>
    <section className="section"><div className="container"><FAQDirectory groups={groups}/></div></section>
    <section className="cta-section"><div className="container"><div className="cta-banner"><div><h2>Couldn’t find the answer you need?</h2><p>The production version can connect this area to your support system, live chat or help desk.</p><a className="button button-primary" href="mailto:support@lokoax.com">Contact support</a></div><div></div><div className="cta-list"><strong>Quick links</strong><span><CreditCard size={15}/> Pricing and billing</span><span><UserRound size={15}/> Account access</span><span><Settings2 size={15}/> Technical help</span></div></div></div></section>
  </Shell>
}
