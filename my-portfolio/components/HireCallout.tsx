import React from 'react';
import Link from 'next/link';

export default function HireCallout() {
  return (
    <section className="section">
      <div className="container">
        <div className="services-cta-box">
          <span className="eyebrow" style={{ color: 'var(--brass-bright)' }}>Available for Contract & Freelance</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: 'var(--sp-3) 0' }}>
            Have a project in mind? Let&apos;s build something exceptional.
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto var(--sp-5)', color: 'var(--text-300)' }}>
            Whether you need a custom e-commerce engine, scalable Next.js web application, or automated payment integration—I am available to bring your vision to life.
          </p>

          <div style={{ display: 'flex', gap: 'var(--sp-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Schedule a Discovery Call
            </Link>
            <a href="mailto:contact@ayodeji.com" className="btn btn-outline">
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}