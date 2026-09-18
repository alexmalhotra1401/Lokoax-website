'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles } from 'lucide-react';

const freeFeatures = ['Selected subject access', 'Core lessons', 'Limited practice questions', 'Basic progress tracking'];
const premiumFeatures = ['Everything in Free', 'All available subjects', 'Unlimited practice', 'Full quizzes & assessments', 'Advanced progress tracking', 'Premium learning resources'];

export default function PricingCards({ compact = false }) {
  const [billing, setBilling] = useState('monthly');
  const price = billing === 'monthly' ? '$9.99' : '$99';
  const suffix = billing === 'monthly' ? '/ month' : '/ year';

  return (
    <div className={compact ? 'pricing-component compact' : 'pricing-component'}>
      <div className="billing-toggle" aria-label="Billing interval">
        <button className={billing === 'monthly' ? 'active' : ''} type="button" onClick={() => setBilling('monthly')}>Monthly</button>
        <button className={billing === 'annual' ? 'active' : ''} type="button" onClick={() => setBilling('annual')}>Yearly <span>Save</span></button>
      </div>

      <div className="plan-grid">
        <article className="plan-card card">
          <span className="plan-kicker free">Free</span>
          <h3>Start learning</h3>
          <p>Explore LOKOAX with essential lessons and practice.</p>
          <div className="plan-price">$0 <small>forever</small></div>
          <ul>{freeFeatures.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
          <Link className="button button-secondary button-block" href="/signup?plan=free">Start Free</Link>
        </article>

        <article className="plan-card card featured">
          <span className="popular-badge"><Sparkles size={14} /> Most popular</span>
          <span className="plan-kicker premium">Premium</span>
          <h3>Unlock the full experience</h3>
          <p>For learners who want complete access and deeper progress visibility.</p>
          <div className="plan-price">{price} <small>{suffix}</small></div>
          {billing === 'annual' && <div className="annual-note">One payment for a full year</div>}
          <ul>{premiumFeatures.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
          <Link className="button button-primary button-block" href={`/signup?plan=premium&billing=${billing}`}>Choose Premium</Link>
        </article>
      </div>
    </div>
  );
}
