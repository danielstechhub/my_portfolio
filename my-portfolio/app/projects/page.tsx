import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Projects & Case Studies | Ayodeji',
  description: 'Featured full-stack platforms, bespoke e-commerce engines, escrow routing systems, and high-conversion web applications.',
};

export default function ProjectsPage() {
  const caseStudies = [
    {
      title: 'Vendo Platform',
      category: 'E-Commerce Infrastructure & Escrow',
      status: 'Production',
      summary: 'A multi-vendor e-commerce platform built with custom dynamic storefronts, dynamic Paystack webhook routing, and secure escrow wallet settlement mechanics.',
      highlights: [
        'Integrated Paystack API for automated split payments and escrow holds.',
        'Engineered dynamic routing and optimized schema design with PostgreSQL.',
        'Designed for seamless multi-vendor checkout experiences.',
      ],
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Paystack API', 'Tailwind CSS'],
    },
    {
      title: 'MAC Power Sales Funnel',
      category: 'Solar Funnel Architecture',
      status: 'Live',
      summary: 'High-converting sales funnel engineered for renewable energy systems, designed to maximize lead generation, customer onboarding, and instant quote calculations.',
      highlights: [
        'Streamlined multi-step lead capture workflow.',
        'Interactive UI components built with fluid animations.',
        'Optimized page speed score to enhance mobile ad conversions.',
      ],
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'CRO'],
    },
    {
      title: 'M&K Jewelry Store',
      category: 'Custom E-Commerce Storefront',
      status: 'Live',
      summary: 'Bespoke retail e-commerce platform featuring liquid layout customization, high-end visual product presentation, and lightweight mobile checkout optimization.',
      highlights: [
        'Custom Shopify Liquid theme modifications.',
        'Tailored product filtering and responsive gallery layout.',
        'Sub-second image loading and smooth checkout UI.',
      ],
      tech: ['Shopify', 'Liquid', 'JavaScript', 'UI/UX Design'],
    },
  ];

  return (
    <main className="section" style={{ paddingTop: 'var(--sp-8)' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ marginBottom: 'var(--sp-7)' }}>
          <span className="eyebrow">Featured Portfolio</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', margin: 'var(--sp-2) 0 var(--sp-3)' }}>
            Systems & Case <span style={{ color: 'var(--brass-bright)' }}>Studies</span>
          </h1>
          <p className="about-intro-text" style={{ maxWidth: '680px' }}>
            A selection of production systems, payment infrastructure, and bespoke web platforms engineered for performance, conversion, and growth.
          </p>
        </div>

        {/* Case Studies List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)' }}>
          {caseStudies.map((project, idx) => (
            <article key={idx} className="pillar-card" style={{ padding: 'var(--sp-6)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-3)' }}>
                <span className="eyebrow" style={{ margin: 0 }}>{project.category}</span>
                <span className="tech-badge" style={{ borderColor: 'var(--brass)', color: 'var(--brass-bright)' }}>
                  {project.status}
                </span>
              </div>

              <h2 style={{ fontSize: '1.8rem', color: 'var(--fg)', marginBottom: 'var(--sp-3)' }}>
                {project.title}
              </h2>

              <p style={{ color: 'var(--text-300)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: 'var(--sp-4)' }}>
                {project.summary}
              </p>

              <div style={{ marginBottom: 'var(--sp-5)' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--fg-muted)', textTransform: 'uppercase', marginBottom: 'var(--sp-2)' }}>
                  Key Engineering Highlights:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.highlights.map((point, pointIdx) => (
                    <li key={pointIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.94rem', color: 'var(--fg)' }}>
                      <span style={{ color: 'var(--brass)' }}>⚡</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-grid" style={{ marginBottom: 'var(--sp-5)' }}>
                {project.tech.map((techItem, techIdx) => (
                  <span key={techIdx} className="tech-badge" style={{ fontSize: '0.78rem', padding: '6px 12px' }}>
                    {techItem}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary btn-small">
                  Request Similar Project
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}