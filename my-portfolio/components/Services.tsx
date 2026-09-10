import React from 'react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'Full-Stack Web Applications',
      description: 'End-to-end web applications engineered with Next.js, TypeScript, and modern databases. Focused on high-speed performance, sub-100ms API response times, and clean, maintainable architecture.',
      deliverables: ['Next.js App Router & Server Components', 'PostgreSQL / MySQL Schema Architecture', 'REST & GraphQL API Engineering'],
    },
    {
      num: '02',
      title: 'Custom E-Commerce & Payment Engines',
      description: 'Tailored e-commerce infrastructure, multi-vendor marketplaces, dynamic Paystack integration, and secure escrow wallet logic designed to maximize checkout conversion rates.',
      deliverables: ['Custom E-Commerce Storefronts', 'Escrow Wallet Integration', 'Paystack & Multi-Gateway Routing'],
    },
    {
      num: '03',
      title: 'Conversion Funnels & Shopify Engineering',
      description: 'Custom Shopify themes and sales funnels optimized for lightning-fast mobile performance, direct response marketing, and frictionless conversion flows.',
      deliverables: ['High-Converting Sales Funnels', 'Shopify Liquid Customization', 'UI/UX Interactive Prototypes'],
    },
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <div style={{ marginBottom: 'var(--sp-6)' }}>
          <span className="eyebrow">Solutions & Offerings</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', margin: 'var(--sp-2) 0' }}>
            Services engineered for <span style={{ color: 'var(--brass-bright)' }}>business growth.</span>
          </h2>
        </div>

        <div className="philosophy-grid">
          {services.map((item) => (
            <div key={item.num} className="pillar-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="pillar-card-icon">{item.num}</span>
                <h3>{item.title}</h3>
                <p style={{ margin: 'var(--sp-3) 0' }}>{item.description}</p>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 'var(--sp-4) 0', fontSize: '0.88rem', color: 'var(--text-300)' }}>
                  {item.deliverables.map((del, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ color: 'var(--brass)' }}>✓</span> {del}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn btn-outline btn-small" style={{ marginTop: 'var(--sp-3)', width: '100%' }}>
                Book This Service
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}