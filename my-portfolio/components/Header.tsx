'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Initialize theme lazily to avoid calling setState inside useEffect
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
      return savedTheme || 'dark';
    }
    return 'dark';
  });

  // Sync DOM attributes whenever theme state updates
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Scroll listener for sticky header background blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle handler
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Brand Logo */}
          <Link href="/" className="brand" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-mark">A</span>
            <span>
              Ayodeji<span className="brand-dot">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="primary-nav" aria-label="Main Navigation">
            <ul>
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`nav-link ${isActive ? 'is-active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
              type="button"
            >
              <span className="icon-sun" aria-hidden="true" style={{ display: theme === 'dark' ? 'inline' : 'none' }}>
                ☀️
              </span>
              <span className="icon-moon" aria-hidden="true" style={{ display: theme === 'light' ? 'inline' : 'none' }}>
                🌙
              </span>
            </button>

            {/* Action CTA */}
            <Link href="/contact" className="btn btn-primary btn-small">
              Hire Me
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="nav-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'is-open' : ''}`}>
        <ul>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`nav-link ${isActive ? 'is-active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}