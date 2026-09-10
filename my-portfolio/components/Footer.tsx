import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        borderTop: '1px solid var(--border)', 
        background: 'var(--bg)', 
        padding: 'var(--sp-8) 0 var(--sp-6)', 
        marginTop: 'var(--sp-8)' 
      }}
    >
      <div className="container">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: 'var(--sp-6)', 
            marginBottom: 'var(--sp-7)' 
          }}
        >
          {/* Brand Info */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', color: 'var(--fg)' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-mono)', letterSpacing: '-0.02em' }}>
                AYODEJI<span style={{ color: 'var(--brass-bright)' }}>.</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-300)', fontSize: '0.9rem', marginTop: 'var(--sp-3)', lineHeight: '1.6', maxWidth: '300px' }}>
              Full-Stack Developer & Lead Architect engineering high-availability web applications, e-commerce engines, and custom payment systems.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--fg-muted)', textTransform: 'uppercase', marginBottom: 'var(--sp-3)' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
              <li><Link href="/" style={{ color: 'var(--fg)', textDecoration: 'none' }}>Home</Link></li>
              <li><Link href="/about" style={{ color: 'var(--fg)', textDecoration: 'none' }}>About</Link></li>
              <li><Link href="/services" style={{ color: 'var(--fg)', textDecoration: 'none' }}>Services</Link></li>
              <li><Link href="/projects" style={{ color: 'var(--fg)', textDecoration: 'none' }}>Projects</Link></li>
              <li><Link href="/contact" style={{ color: 'var(--fg)', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Core Stack */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--fg-muted)', textTransform: 'uppercase', marginBottom: 'var(--sp-3)' }}>
              Core Specialization
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--text-300)' }}>
              <li>Next.js & React Architecture</li>
              <li>Paystack & Escrow Payment Routing</li>
              <li>Custom Shopify Liquid Development</li>
              <li>High-Conversion Sales Funnels</li>
            </ul>
          </div>

          {/* Direct Connect */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--fg-muted)', textTransform: 'uppercase', marginBottom: 'var(--sp-3)' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
              <a href="mailto:oluwafemiayodeji37@gmail.com" style={{ color: 'var(--brass-bright)', textDecoration: 'none' }}>
                oluwafemiayodeji37@gmail.com
              </a>
              <span style={{ color: 'var(--text-300)', fontSize: '0.85rem' }}>
                Available for Contract & High-Impact Projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{ 
            borderTop: '1px solid var(--border)', 
            paddingTop: 'var(--sp-5)', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: 'var(--sp-3)', 
            fontSize: '0.85rem', 
            color: 'var(--fg-muted)' 
          }}
        >
          <div>
            © <span suppressHydrationWarning>{currentYear}</span> Ayodeji Oluwafemi. Built with Next.js & TypeScript.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--brass)' }}>
            ● SYSTEM ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}