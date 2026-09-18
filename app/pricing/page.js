import Link from 'next/link';
import Shell from '@/components/Shell';
import PricingCards from '@/components/PricingCards';
import FAQAccordion from '@/components/FAQAccordion';
import { Check, RefreshCcw, ShieldCheck, Gauge, ArrowRight } from 'lucide-react';

const pricingFaq = [
  { q: 'Can I use LOKOAX without paying?', a: 'Yes. The Free plan gives learners a practical way to start with selected subjects, core lessons, limited practice and basic progress tracking.' },
  { q: 'Can I switch from monthly to yearly billing?', a: 'Yes. The interface supports both monthly and annual Premium options. Your payment provider should handle the actual billing change rules at launch.' },
  { q: 'What happens if I cancel Premium?', a: 'The intended experience is that Premium access remains available through the current paid period, after which the account returns to the Free plan.' },
  { q: 'Will my learning progress disappear if I downgrade?', a: 'No. Learning history should remain connected to the learner account even when Premium access ends. Some premium-only content may become locked.' },
  { q: 'How do refunds work?', a: 'Refund eligibility should follow the final Refund & Cancellation Policy and your payment provider rules. The current policy page is a structured draft pending legal review.' }
];

const rows = [
  ['Learning access','Selected subjects','All available subjects'],
  ['Core lessons','✓','✓'],
  ['Full subject library','—','✓'],
  ['Downloadable resources','—','✓'],
  ['Limited practice questions','✓','✓'],
  ['Unlimited practice','—','✓'],
  ['Quizzes & assessments','Limited','Full'],
  ['Basic progress tracking','✓','✓'],
  ['Advanced progress views','—','✓'],
  ['Premium learning resources','—','✓']
];

export default function PricingPage(){
  return <Shell>
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div><div className="eyebrow">Simple pricing</div><h1 className="page-title">Start free. Upgrade when you need more.</h1><p className="lead">Learn with the essentials for free, or unlock the complete LOKOAX experience with Premium.</p><div className="price-proof"><span>No credit card for Free</span><span>Monthly or yearly Premium</span><span>Cancel according to policy</span></div></div>
        <div className="page-hero-card card"><h3>What every plan includes</h3><div className="quick-list">{['A secure learner account','Progress saved to your account','Access across supported devices','Clear plan and billing status'].map((item,i)=><div className="quick-item" key={item}><span><Check size={15}/></span><div><strong>{item}</strong><small>{i===0?'Your learning identity stays in one place.':i===1?'Continue without losing your history.':i===2?'Move between desktop, tablet and mobile.':'Understand what you are paying for.'}</small></div></div>)}</div></div>
      </div>
    </section>

    <section className="section"><div className="container"><div className="section-heading"><div><div className="eyebrow">Choose a plan</div><h2 className="section-title">Pick the level that fits your learning.</h2><p>You can change your plan later as your learning needs change.</p></div></div><PricingCards /></div></section>

    <section className="section section-soft"><div className="container"><div className="section-heading"><div><div className="eyebrow">Compare plans</div><h2 className="section-title">Free vs Premium at a glance</h2><p>A detailed comparison helps learners understand exactly what changes when they upgrade.</p></div></div><div className="comparison-table"><table><thead><tr><th>Feature</th><th>Free</th><th>Premium</th></tr></thead><tbody>{rows.map(([feature,free,premium],i)=><tr key={feature}><td><strong>{feature}</strong></td><td className={free==='✓'?'yes':free==='—'?'no':''}>{free}</td><td className={premium==='✓'?'yes':''}>{premium}</td></tr>)}</tbody></table></div></div></section>

    <section className="section"><div className="container"><div className="section-heading"><div><div className="eyebrow">Flexible subscriptions</div><h2 className="section-title">Stay in control of your subscription.</h2><p>Premium should be easy to start, manage and stop, with the rules visible before checkout.</p></div></div><div className="subscription-grid">
      <article className="subscription-card card"><span className="info-icon"><RefreshCcw size={20}/></span><h3>Manage from your account</h3><p>Upgrade, change billing interval or cancel without relying on support for routine changes.</p></article>
      <article className="subscription-card card"><span className="info-icon"><ShieldCheck size={20}/></span><h3>Keep access through the paid period</h3><p>The intended cancellation flow keeps Premium available until the active paid period ends.</p></article>
      <article className="subscription-card card"><span className="info-icon"><Gauge size={20}/></span><h3>Your progress stays connected</h3><p>Changing plans should not delete lesson completion, practice history or quiz results.</p></article>
    </div><p className="small muted" style={{marginTop:18}}>See the <Link href="/refund" className="section-link">Refund & Cancellation Policy →</Link> for the current policy draft.</p></div></section>

    <section className="section section-soft"><div className="container faq-home-grid"><div className="faq-home-copy"><div className="eyebrow">Pricing FAQ</div><h2 className="section-title">Questions before you upgrade?</h2><p>Clear answers about access, billing, cancellation and progress.</p><Link className="button button-secondary" href="/faq">View all FAQs</Link></div><FAQAccordion items={pricingFaq}/></div></section>

    <section className="cta-section"><div className="container"><div className="cta-banner"><div><h2>Start learning free today.</h2><p>Create your account, explore a subject and upgrade only when you need the complete experience.</p><Link className="button button-primary" href="/signup?plan=free">Start Learning Free <ArrowRight size={16}/></Link></div><div></div><div className="cta-list"><strong>No card required for Free</strong><span><Check size={15}/>Your learning progress stays connected to your account.</span></div></div></div></section>
  </Shell>
}
