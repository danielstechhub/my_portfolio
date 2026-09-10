'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web Application',
    currency: 'USD',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Combine currency and budget amount for submission
    const payload = {
      ...formData,
      budget: `${formData.currency} ${formData.budget}`,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          service: 'Full-Stack Web Application',
          currency: 'USD',
          budget: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit form.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <main className="section" style={{ paddingTop: 'var(--sp-8)' }}>
      <div className="container">
        
        <div style={{ marginBottom: 'var(--sp-7)', maxWidth: '720px' }}>
          <span className="eyebrow">Initiate Contact</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', margin: 'var(--sp-2) 0 var(--sp-3)' }}>
            Let&apos;s build something <span style={{ color: 'var(--brass-bright)' }}>exceptional</span>.
          </h1>
          <p className="about-intro-text">
            Specify your requirements, expected project scope, and budget below.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--sp-7)', alignItems: 'start' }}>
          
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: 'var(--sp-4)', color: 'var(--fg)' }}>Direct Channels</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
              <div className="pillar-card" style={{ padding: 'var(--sp-4)' }}>
                <span className="eyebrow" style={{ fontSize: '0.75rem' }}>Primary Email</span>
                <p style={{ margin: '4px 0 0', fontWeight: 600 }}>
                  <a href="mailto:oluwafemiayodeji37@gmail.com" style={{ color: 'var(--brass-bright)', textDecoration: 'none' }}>
                    oluwafemiayodeji37@gmail.com
                  </a>
                </p>
              </div>

              <div className="pillar-card" style={{ padding: 'var(--sp-4)' }}>
                <span className="eyebrow" style={{ fontSize: '0.75rem' }}>Response Guarantee</span>
                <p style={{ margin: '4px 0 0', color: 'var(--fg-muted)', fontSize: '0.95rem' }}>
                  24-Hour Scope Evaluation & Proposal Response
                </p>
              </div>
            </div>
          </div>

          <div className="pillar-card" style={{ padding: 'var(--sp-6)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: 'var(--sp-4)', color: 'var(--fg)' }}>Project Scope & Inquiry</h3>
            
            {status === 'success' ? (
              <div style={{ padding: 'var(--sp-4)', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e', borderRadius: '6px' }}>
                <h4 style={{ color: '#22c55e', margin: '0 0 8px 0' }}>Inquiry Submitted!</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--fg)' }}>
                  Thank you for reaching out. I will review your technical requirements and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--fg-muted)', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan" 
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      color: 'var(--fg)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--fg-muted)', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com" 
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      color: 'var(--fg)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--fg-muted)', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Requested Service
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      color: 'var(--fg)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Full-Stack Web Application">Full-Stack Web Application (Next.js / PostgreSQL)</option>
                    <option value="E-Commerce & Escrow">E-Commerce Platform / Paystack Escrow Architecture</option>
                    <option value="Sales Funnel Optimization">High-Conversion Sales Funnel</option>
                    <option value="Custom Shopify Build">Custom Shopify Liquid Storefront</option>
                  </select>
                </div>

                {/* Estimated Budget with Currency Dropdown */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--fg-muted)', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Estimated Project Budget
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      style={{
                        width: '110px',
                        padding: '12px 10px',
                        borderRadius: '6px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        color: 'var(--fg)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="USD">USD ($)</option>
                      <option value="NGN">NGN (₦)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>

                    <input 
                      type="text" 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. 2,500 or 1,500,000" 
                      required
                      style={{
                        flex: 1,
                        padding: '12px 16px',
                        borderRadius: '6px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        color: 'var(--fg)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--fg-muted)', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Project Details & Scope
                  </label>
                  <textarea 
                    name="message"
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details on target goals, custom feature requirements, or timeline..." 
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      color: 'var(--fg)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p style={{ color: '#ef4444', fontSize: '0.85rem', margin: 0 }}>{errorMessage}</p>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={status === 'loading'}
                  style={{ marginTop: 'var(--sp-2)', width: '100%', opacity: status === 'loading' ? 0.7 : 1 }}
                >
                  {status === 'loading' ? 'Submitting Scope...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}