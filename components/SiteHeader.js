'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Menu, X } from 'lucide-react';

const links = [
  { href: '/#subjects', label: 'Learn' },
  { href: '/#practice', label: 'Practice' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="LOKOAX home" onClick={() => setOpen(false)}>
          <span className="brand-icon"><GraduationCap size={22} strokeWidth={2.2} /></span>
          <span>LOKOAX</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>

        <div className="header-actions">
          <Link href="/login" className="header-login">Login</Link>
          <Link href="/signup?plan=free" className="button button-primary button-sm">Start Learning Free</Link>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav-wrap">
          <nav className="container mobile-nav" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
            <div className="mobile-nav-actions">
              <Link href="/login" className="button button-secondary" onClick={() => setOpen(false)}>Login</Link>
              <Link href="/signup?plan=free" className="button button-primary" onClick={() => setOpen(false)}>Start Learning Free</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
