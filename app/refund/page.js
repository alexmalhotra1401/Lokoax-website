import LegalPage from '@/components/LegalPage';

const sections = [
  {title:'Cancelling Premium', paragraphs:['Learners should be able to cancel Premium from their account once live billing is connected. Cancellation should stop future renewal rather than immediately deleting the account.']},
  {title:'Access after cancellation', paragraphs:['The intended experience is that Premium features remain available until the end of the current paid billing period, after which the account returns to the Free plan.']},
  {title:'Learning progress', paragraphs:['Cancellation or downgrade should not delete lesson completion, practice history or quiz results associated with the learner account. Premium-only content may become locked after access ends.']},
  {title:'Refund requests', paragraphs:['Refund eligibility should be defined according to applicable consumer law, payment-provider rules and the final commercial policy.'], bullets:['Document the refund window, if any.','Define treatment of duplicate charges and technical billing errors.','Clarify whether partially used periods are refundable.']},
  {title:'Annual subscriptions', paragraphs:['If annual billing is offered, the checkout flow should clearly disclose the total charge, renewal date and any special cancellation or refund rules before purchase.']},
  {title:'Failed or disputed payments', paragraphs:['Payment failures, chargebacks and disputes should follow the connected payment provider workflow and may affect Premium access.']},
  {title:'How to request support', paragraphs:['Provide a clear support channel for billing and refund questions. The production page should include expected response times and any information users need to submit.']},
  {title:'Policy changes', paragraphs:['Material changes should be published clearly and, where required, communicated to affected subscribers before they take effect.']}
];

export default function RefundPage(){
  return <LegalPage eyebrow="Billing policy" title="Refund & Cancellation Policy" description="This page explains the intended subscription cancellation flow, access after cancellation and the structure for refund requests." summary={['Cancellation should stop future renewal.','Premium access can continue through the paid period.','Learning progress should remain connected to the account.','Final refund windows require legal and commercial approval.']} sections={sections}/>;
}
