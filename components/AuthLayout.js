import Link from 'next/link';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

export default function AuthLayout({ children, title = 'Build learning habits with confidence.', subtitle = 'A focused learning experience for lessons, practice, progress and membership access.' }) {
  return (
    <main className="auth-page">
      <section className="auth-visual">
        <Link className="brand brand-light" href="/">
          <span className="brand-icon"><GraduationCap size={22} strokeWidth={2.2} /></span>
          <span>LOKOAX</span>
        </Link>
        <div className="auth-visual-copy">
          <span className="auth-eyebrow">LOKOAX LEARNING</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="auth-benefits">
            <span><CheckCircle2 size={17} /> Structured learning paths</span>
            <span><CheckCircle2 size={17} /> Free & Premium access</span>
            <span><CheckCircle2 size={17} /> Progress that stays visible</span>
          </div>
        </div>
        <div className="auth-visual-art" aria-hidden="true">
          <div className="auth-orbit one"></div>
          <div className="auth-orbit two"></div>
          <div className="auth-glow"></div>
          <div className="auth-mini-card card-a"><span>72%</span><small>Overall progress</small></div>
          <div className="auth-mini-card card-b"><span>14</span><small>Day streak</small></div>
          <div className="auth-mini-card card-c"><span>24</span><small>Tests taken</small></div>
        </div>
      </section>
      <section className="auth-panel">
        <div className="auth-mobile-brand">
          <Link className="brand" href="/"><span className="brand-icon"><GraduationCap size={22} /></span><span>LOKOAX</span></Link>
        </div>
        <div className="auth-card">{children}</div>
      </section>
    </main>
  );
}
