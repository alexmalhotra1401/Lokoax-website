'use client';

import { useMemo, useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function FAQDirectory({ groups }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [open, setOpen] = useState('Free access-0');
  const categories = ['All', ...groups.map((g) => g.title)];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return groups
      .filter((group) => category === 'All' || group.title === category)
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => !q || `${item.q} ${item.a}`.toLowerCase().includes(q))
      }))
      .filter((group) => group.items.length);
  }, [groups, query, category]);

  return (
    <div>
      <div className="faq-search card">
        <Search size={19} />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search questions, topics or keywords…" aria-label="Search FAQs" />
        {query && <button type="button" onClick={() => setQuery('')}>Clear</button>}
      </div>
      <div className="category-pills" aria-label="FAQ categories">
        {categories.map((item) => <button type="button" className={category === item ? 'active' : ''} onClick={() => setCategory(item)} key={item}>{item}</button>)}
      </div>

      <div className="faq-directory">
        {!filtered.length && <div className="empty-state card"><strong>No matching questions found.</strong><p>Try a different keyword or category.</p></div>}
        {filtered.map((group) => (
          <section className="faq-group" key={group.title}>
            <div className="faq-group-title"><span>{group.icon}</span><div><h2>{group.title}</h2><p>{group.subtitle}</p></div></div>
            <div className="faq-accordion">
              {group.items.map((item, index) => {
                const key = `${group.title}-${index}`;
                return <article className={open === key ? 'faq-row open' : 'faq-row'} key={item.q}>
                  <button type="button" onClick={() => setOpen(open === key ? '' : key)} aria-expanded={open === key}>
                    <span>{item.q}</span><ChevronDown size={18} />
                  </button>
                  <div className="faq-answer"><p>{item.a}</p></div>
                </article>;
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
