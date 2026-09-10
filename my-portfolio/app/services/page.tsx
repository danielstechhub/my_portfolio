import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Ayodeji',
  description: 'Full-stack engineering, custom e-commerce systems, escrow wallet architecture, and conversion optimization.',
};

export default function ServicesPage() {
  const servicesList = [
    {
      title: 'Full-Stack Web Applications',
      subtitle: 'Scale-Ready Next.js & Node Architectures',
      description: 'Custom React and Next.js platforms built with TypeScript, optimized PostgreSQL/MySQL databases, and high-security REST/GraphQL APIs.',
      deliverables: ['Type-safe App Router setup', 'Database schema design', 'Authentication & Role Security', 'API Integration & SSR Optimization'],
    },
    {
      title: 'E-Commerce & Escrow Infrastructure',
      subtitle: 'Paystack & Custom Wallet Solutions',
      description: 'Bespoke payment routing engines with multi-vendor payout mechanisms, split billing, webhook validation, and escrow holding logic.',
      deliverables: ['Paystack API integration', 'Custom Shopify Liquid engineering', 'Escrow workflow & ledger logic', 'Multi-currency checkout'],
    },
    {
      title: 'Sales Funnels & Conversion Engineering',
      subtitle: 'Performance & Revenue Optimization',
      description: 'High-converting interactive landing pages and multi-step onboarding funnels optimized for maximum ad conversions and speed.',
      deliverables: ['Custom funnel architecture', 'Dynamic quote/calculator forms', 'Sub-second page load times', 'Analytics & Event tracking'],
    },
  ];

  return (
    <main className="section" style={{ paddingTop: 'var(--sp-8)' }}>
      <div className="container">
        <div style={{ marginBottom: 'var(--sp-7)', maxWidth: '720px' }}>
          <span className="eyebrow">Capabilities & Offerings</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', margin: 'var(--sp-2) 0 var(--sp-3)' }}>
            Engineering solutions for <span style={{ color: 'var(--brass-bright)' }}>business growth</span>.
          </h1>
          <p className="about-intro-text">
            Specialized engineering services focused on reliability, performance, and clear ROI.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 'var(--sp-6)' }}>
          {servicesList.map((service, idx) => (
            <div key={idx} className="pillar-card" style={{ padding: 'var(--sp-6)' }}>
              <span className="eyebrow">{service.subtitle}</span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--fg)', margin: 'var(--sp-2) 0' }}>{service.title}</h2>
              <p style={{ color: 'var(--text-300)', marginBottom: 'var(--sp-4)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                {service.description}
              </p>
              
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--fg-muted)', textTransform: 'uppercase', marginBottom: 'var(--sp-2)' }}>
                Key Deliverables:
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--sp-5) 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                {service.deliverables.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: 'var(--fg)' }}>
                    <span style={{ color: 'var(--brass)' }}>✓</span> {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn btn-outline btn-small">
                Inquire About This Service
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}