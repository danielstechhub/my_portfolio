import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section hero-section" style={{ paddingTop: 'var(--sp-8)', paddingBottom: 'var(--sp-8)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--sp-7)', alignItems: 'center' }}>
          
          {/* Hero Copy */}
          <div>
            <span className="eyebrow">Lead Architect & Full-Stack Engineer</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', margin: 'var(--sp-2) 0 var(--sp-3)', lineHeight: 1.15 }}>
              Ayodeji Oluwafemi Daniel
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-300)', marginBottom: 'var(--sp-5)', maxWidth: '560px', lineHeight: 1.6 }}>
              Architecting high-availability web applications, custom Paystack escrow routing systems, and conversion-engineered agency platforms.
            </p>

            <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link href="/projects" className="btn btn-outline">
                Explore Work
              </Link>
            </div>
          </div>

          {/* Profile Picture Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '320px',
              aspectRatio: '4 / 5',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            }}>
              <Image 
                src="/ayodeji.jpeg"
                alt="Ayodeji Oluwafemi Daniel"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 320px"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}