import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ProjectsSection from '@/components/ProjectsSection';
import HireCallout from '@/components/HireCallout';

export const metadata = {
  title: 'Ayodeji | Lead Architect & Full-Stack Engineer',
  description: 'Full-Stack Developer and Lead Architect specializing in Next.js, scalable systems, and bespoke e-commerce engines.',
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <ProjectsSection />
      <HireCallout />
    </main>
  );
}