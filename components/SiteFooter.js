import Link from 'next/link';
import { GraduationCap, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <Link href="/" className="brand">
            <span className="brand-icon"><GraduationCap size={22} strokeWidth={2.2} /></span>
            <span>LOKOAX</span>
          </Link>
          <p>Learn today. Build confidence for tomorrow.</p>
          <div className="social-links" aria-label="Social links">
            <a href="#" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={17} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={17} /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <Link href="/#subjects">Subjects</Link>
          <Link href="/#practice">Practice</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">Help Center</Link>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <Link href="/about">About LOKOAX</Link>
          <Link href="/about#mission">Our Mission</Link>
          <a href="mailto:support@lokoax.com">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/refund">Refund & Cancellation</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 LOKOAX. All rights reserved.</span>
        <span>Structured learning · purposeful practice · visible progress</span>
      </div>
    </footer>
  );
}
