'use client';

import './globals.css';
import { useState } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        <main style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="nav-inner">
          <Link href="/" className="logo">
            <span className="accent">PLUR</span>
            <span>.nyc</span>
          </Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/team/">Team</Link>
            <Link href="/events/">Events</Link>
            <Link href="/community/">Community</Link>
          </nav>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/team/" onClick={() => setMobileOpen(false)}>Team</Link>
        <Link href="/events/" onClick={() => setMobileOpen(false)}>Events</Link>
        <Link href="/community/" onClick={() => setMobileOpen(false)}>Community</Link>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow"></div>
      <div className="footer-inner">
        <h2>
          <span className="accent">PLUR</span> NYC
        </h2>
        <p>
          NYC&apos;s underground rave community. Peace, Love, Unity, Respect.
        </p>
        <svg width="160" height="12" viewBox="0 0 160 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ margin: '0 auto 1rem', display: 'block', opacity: 0.3 }}>
          <path d="M5,6 Q40,2 80,6 Q120,10 155,6" />
        </svg>
        <p className="copyright">&copy; {new Date().getFullYear()} PLUR NYC</p>
      </div>
    </footer>
  );
}
