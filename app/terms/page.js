import LegalPage from '@/components/LegalPage';

const sections = [
  {title:'Using LOKOAX', paragraphs:['These terms govern use of the LOKOAX website, learner accounts, lessons, practice tools and subscription features.'], bullets:['Use the service only for lawful learning purposes.','Keep account credentials secure and accurate.','Do not attempt to interfere with the platform or other users.']},
  {title:'Accounts & eligibility', paragraphs:['Users should provide accurate account information and meet any minimum-age or consent requirements that apply in the launch market.']},
  {title:'Free & Premium access', paragraphs:['Free and Premium plans may provide different levels of subject, practice, quiz and resource access. Features can change as the product develops.']},
  {title:'Subscriptions & billing', paragraphs:['Premium subscriptions may renew automatically according to the selected billing interval unless cancelled under the applicable plan rules.'], bullets:['Final prices, taxes, billing dates and renewal rules should be shown before checkout.','Payment handling should follow the connected payment provider terms.']},
  {title:'Learning content', paragraphs:['LOKOAX aims to provide useful educational content, but learning outcomes can vary and content should not be treated as a guarantee of academic results.']},
  {title:'Acceptable use', paragraphs:['Users should not copy, resell, scrape, disrupt or misuse the service or its protected content except where permitted by law or written permission.']},
  {title:'Intellectual property', paragraphs:['The platform design, brand, original content and other protected materials remain the property of LOKOAX or its licensors unless stated otherwise.']},
  {title:'Service availability', paragraphs:['The service may occasionally be unavailable for maintenance, upgrades, security work or events outside reasonable control.']},
  {title:'Liability & disclaimers', paragraphs:['Final warranty, liability and consumer-law wording must be tailored to the legal entity and launch jurisdiction by qualified counsel.']},
  {title:'Changes & contact', paragraphs:['Material updates to these terms should be communicated appropriately. Add the official company name, address, governing law and contact details before launch.']}
];

export default function TermsPage(){
  return <LegalPage eyebrow="Terms of use" title="Terms of Service" description="These terms describe the rules for using LOKOAX accounts, learning content, Free access and Premium subscriptions." summary={['Use LOKOAX for lawful learning purposes.','Plan access can differ between Free and Premium.','Subscription terms should be visible before checkout.','Final legal clauses require jurisdiction-specific review.']} sections={sections}/>;
}
