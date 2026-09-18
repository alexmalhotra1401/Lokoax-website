import Link from 'next/link';
import Shell from './Shell';
import { Check } from 'lucide-react';

export default function LegalPage({ eyebrow, title, description, updated='September 2026', summary=[], sections=[] }) {
  return <Shell>
    <section className="legal-hero"><div className="container legal-hero-grid"><div><div className="eyebrow">{eyebrow}</div><h1 className="page-title">{title}</h1><p className="section-lead">{description}</p><span className="small muted">Last updated: {updated}</span></div><aside className="legal-summary card"><h3>Quick summary</h3>{summary.map((item)=><span key={item}><Check size={14}/>{item}</span>)}</aside></div></section>
    <section className="section"><div className="container legal-shell"><aside className="legal-nav card"><h4>On this page</h4>{sections.map((section,index)=><a href={`#legal-${index+1}`} key={section.title}>{String(index+1).padStart(2,'0')} &nbsp; {section.title}</a>)}</aside><article className="legal-content"><div className="legal-note"><strong>Draft legal content:</strong> Final wording, jurisdiction, business-entity details and regulatory requirements should be reviewed by qualified legal counsel before launch.</div>{sections.map((section,index)=><section className="legal-section" id={`legal-${index+1}`} key={section.title}><h2>{section.title}</h2>{section.paragraphs?.map((p,i)=><p key={i}>{p}</p>)}{section.bullets && <ul>{section.bullets.map((b)=><li key={b}>{b}</li>)}</ul>}</section>)}<div className="legal-contact"><h2>Questions about this policy?</h2><p>Contact LOKOAX support for product and account questions. Legal notices and formal contact details should be added here before launch.</p><a className="button button-primary" href="mailto:support@lokoax.com">Contact support</a></div></article></div></section>
  </Shell>
}
