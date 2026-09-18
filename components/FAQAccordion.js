'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <article className={open === index ? 'faq-row open' : 'faq-row'} key={item.q}>
          <button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
            <span>{item.q}</span><ChevronDown size={18} />
          </button>
          <div className="faq-answer"><p>{item.a}</p></div>
        </article>
      ))}
    </div>
  );
}
