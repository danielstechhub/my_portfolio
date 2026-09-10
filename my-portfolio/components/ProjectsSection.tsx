import React from 'react';
import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Vendo Platform',
      category: 'E-Commerce Infrastructure & Escrow',
      status: 'Production',
      desc: 'Multi-vendor e-commerce platform incorporating custom storefronts, dynamic Paystack webhook handlers, and secure escrow wallet settlement mechanics.',
      highlights: [
        'Paystack API integration for automated escrow holds',
        'Optimized PostgreSQL database schema design',
      ],
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Paystack API'],
    },
    {
      title: 'MAC Power Sales Engine',
      category: 'Solar Funnel Architecture',
      status: 'Live',
      desc: 'High-conversion sales funnel engineered for renewable energy systems, designed to increase lead capture and streamline onboarding.',
      highlights: [
        'Streamlined multi-step lead capture workflow',
        'Interactive UI components built with Framer Motion',
      ],
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'M&K Jewelry Store',
      category: 'Custom E-Commerce Storefront',
      status: 'Live',
      desc: 'Bespoke online retail experience featuring liquid layout customization, product galleries, and lightweight mobile checkout optimization.',
      highlights: [
        'Custom Shopify Liquid theme modifications',
        'Sub-second image loading & smooth checkout UI',
      ],
      tech: ['Shopify', 'Liquid', 'JavaScript', 'UI/UX Design'],
    },
  ];

  return (
    <section className="section" id="projects" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--sp-6)', flexWrap: 'wrap', gap: 'var(--sp-3)' }}>
          <div>
            <span className="eyebrow">Proven Results</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', margin: 'var(--sp-2) 0 0' }}>
              Featured Systems & Projects
            </h2>
          </div>
          <Link href="/projects" className="btn btn-outline btn-small">
            View All Case Studies →
          </Link>
        </div>

        {/* Projects Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--sp-5)' }}>
          {projects.map((proj, i) => (
            <div key={i} className="pillar-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-2)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--brass)', textTransform: 'uppercase' }}>
                    {proj.category}
                  </span>
                  <span className="tech-badge" style={{ fontSize: '0.7rem', padding: '2px 8px', borderColor: 'var(--brass)', color: 'var(--brass-bright)' }}>
                    {proj.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', margin: 'var(--sp-2) 0', color: 'var(--fg)' }}>{proj.title}</h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--fg-muted)', lineHeight: '1.6', marginBottom: 'var(--sp-4)' }}>
                  {proj.desc}
                </p>

                {/* Key Highlights */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--sp-4) 0', fontSize: '0.85rem', color: 'var(--text-300)' }}>
                  {proj.highlights.map((point, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ color: 'var(--brass)' }}>⚡</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="tech-grid" style={{ marginBottom: 'var(--sp-4)' }}>
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <Link href="/contact" className="btn btn-outline btn-small" style={{ width: '100%', textTransform: 'none' }}>
                  Request Similar Project
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}