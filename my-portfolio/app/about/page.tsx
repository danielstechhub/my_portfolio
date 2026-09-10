import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About | Lead Architect & Full-Stack Engineer',
  description: 'Full-Stack Developer and Lead Architect specializing in Next.js, scalable systems, and bespoke e-commerce engines.',
};

export default function AboutPage() {
  const experiences = [
    {
      role: 'Lead Architect & Founder',
      company: 'Lumynex',
      period: '2024 — Present',
      desc: 'Architecting high-availability agency infrastructure, custom web applications, and conversion-driven client engines using Next.js, TypeScript, and modern database solutions.',
    },
    {
      role: 'Full-Stack & E-Commerce Developer',
      company: 'Vendo & E-Commerce Platforms',
      period: '2023 — Present',
      desc: 'Engineered custom storefronts, multi-vendor payment routing, Paystack integrations, and secure escrow wallet mechanics tailored for scale.',
    },
  ];

  const techStack = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 
    'Framer Motion', 'PHP', 'MySQL', 'PostgreSQL', 
    'Paystack API', 'Shopify Liquid', 'Node.js'
  ];

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

        {/* Hero Grid */}
        <div className="about-hero-grid">
          <div>
            <p className="about-intro-text">
              I am a <strong>Full-Stack Developer & Lead Architect</strong> focused on building enterprise web applications, custom payment workflows, and agency infrastructure.
            </p>
            <p style={{ color: 'var(--fg-muted)', marginBottom: 'var(--sp-4)', fontSize: '1rem' }}>
              Whether building multi-vendor escrow systems or designing conversion-optimized sales funnels, my core commitment remains constant: clean engineering, reliability, and business impact.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', marginTop: 'var(--sp-5)' }}>
              <Link href="/contact" className="btn btn-primary">
                Let&apos;s Build Together
              </Link>
              <Link href="/projects" className="btn btn-outline">
                View Work
              </Link>
            </div>
          </div>

          {/* Ledger Panel */}
          <div className="ledger-panel">
            <div className="ledger-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
                <span className="ledger-dot"></span>
                <span>SYSTEM STATUS</span>
              </div>
              <span style={{ color: 'var(--brass)' }}>ACCEPTING PROJECTS</span>
            </div>
            <div className="ledger-metrics">
              <div className="ledger-metric-item">
                <span className="ledger-value">100%</span>
                <span className="ledger-label">Type-Safe Architecture</span>
              </div>
              <div className="ledger-metric-item">
                <span className="ledger-value">&lt; 100ms</span>
                <span className="ledger-label">Target Latency</span>
              </div>
              <div className="ledger-metric-item">
                <span className="ledger-value">Paystack</span>
                <span className="ledger-label">Escrow Routing</span>
              </div>
              <div className="ledger-metric-item">
                <span className="ledger-value">Next.js 14+</span>
                <span className="ledger-label">Primary Stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div style={{ marginTop: 'var(--sp-8)' }}>
          <span className="eyebrow">Track Record</span>
          <h2 style={{ fontSize: '1.8rem', margin: 'var(--sp-2) 0 var(--sp-5)' }}>Experience & Execution</h2>

          <div className="timeline-container">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-header">
                  <span className="timeline-role">{exp.role}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <div className="tech-stack-section">
          <span className="eyebrow">Tooling & Environment</span>
          <h3 style={{ fontSize: '1.3rem', margin: 'var(--sp-2) 0' }}>Technologies I Engineer With</h3>
          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <span key={i} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}