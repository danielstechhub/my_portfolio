import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About | Lead Architect & Full-Stack Engineer',
  description: 'Specializing in Next.js, scalable system architecture, bespoke e-commerce engines, and high-performance user interfaces.',
};

export default function AboutPage() {
  return (
    <main className="section about-hero">
      <div className="container">
        
        {/* Header Section */}
        <div style={{ marginBottom: 'var(--sp-6)' }}>
          <span className="eyebrow">Architectural Philosophy</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', margin: 'var(--sp-2) 0 var(--sp-3)' }}>
            Engineering systems with <span style={{ color: 'var(--brass-bright)' }}>precision</span> and scale.
          </h1>
          <p className="about-intro-text">
            Bridging robust backend infrastructure with high-converting, modern UI design.
          </p>
        </div>

        {/* Hero Body Grid */}
        <div className="about-hero-grid">
          {/* Narrative Column */}
          <div>
            <p className="about-intro-text">
              I am a <strong>Full-Stack Developer & Systems Architect</strong> focused on building enterprise web platforms, custom payment workflows, and agency infrastructure.
            </p>
            <p style={{ color: 'var(--fg-muted)', marginBottom: 'var(--sp-4)', fontSize: '1rem' }}>
              From engineering multi-vendor escrow systems to crafting high-converting sales funnels, I prioritize code readability, speed, type safety, and seamless user experiences.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', marginTop: 'var(--sp-5)' }}>
              <Link 
                href="/projects" 
                style={{
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--brass)',
                  color: 'var(--ink-950)',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                View Featured Work
              </Link>
              <Link 
                href="/contact" 
                style={{
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--hairline-strong)',
                  color: 'var(--fg)',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Ledger Widget */}
          <div className="ledger-panel">
            <div className="ledger-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
                <span className="ledger-dot"></span>
                <span>SYSTEM ARCHITECTURE</span>
              </div>
              <span style={{ color: 'var(--brass)' }}>LIVE</span>
            </div>
            <div className="ledger-metrics">
              <div className="ledger-metric-item">
                <span className="ledger-value">100%</span>
                <span className="ledger-label">Type-Safe TypeScript</span>
              </div>
              <div className="ledger-metric-item">
                <span className="ledger-value">Sub-100ms</span>
                <span className="ledger-label">Target API Latency</span>
              </div>
              <div className="ledger-metric-item">
                <span className="ledger-value">Paystack</span>
                <span className="ledger-label">Escrow Integration</span>
              </div>
              <div className="ledger-metric-item">
                <span className="ledger-value">Next.js 14+</span>
                <span className="ledger-label">Primary Stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Philosophy Section */}
        <div style={{ marginTop: 'var(--sp-8)' }}>
          <span className="eyebrow">Core Capabilities</span>
          <h2 style={{ fontSize: '1.8rem', margin: 'var(--sp-2) 0 var(--sp-5)' }}>Value Pillars</h2>

          <div className="philosophy-grid">
            <div className="pillar-card">
              <h3>01 / Scalable Web Apps</h3>
              <p>
                Building lightning-fast, server-rendered applications using Next.js, React, Tailwind CSS, and optimized database models.
              </p>
            </div>

            <div className="pillar-card">
              <h3>02 / E-Commerce Engines</h3>
              <p>
                Developing custom storefronts, escrow systems, dynamic payment routes, and tailored Shopify integrations.
              </p>
            </div>

            <div className="pillar-card">
              <h3>03 / API & Database Design</h3>
              <p>
                Architecting relational database schemas with PostgreSQL and MySQL paired with secure backend endpoints.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}