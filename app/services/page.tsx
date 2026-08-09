import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Services } from '@/components/sections/services';
import { ServicesGrid } from '@/components/sections/services-grid';
import { Process } from '@/components/sections/process';
import { Industries } from '@/components/sections/industries';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Mumbai & India | SEO, PPC & Branding — Vystar Media',
  description:
    'Full-suite Digital Marketing Services in Mumbai: SEO Agency in Mumbai, Performance Marketing Agency in Mumbai, Social Media Marketing Agency in Mumbai, Branding Agency in Mumbai, and AI Marketing.',
  keywords: [
    'Digital Marketing Company in Mumbai',
    'Digital Marketing Services in Mumbai',
    'SEO Agency in Mumbai',
    'SEO Services in Mumbai',
    'Social Media Marketing Agency in Mumbai',
    'Performance Marketing Agency in Mumbai',
    'Branding Agency in Mumbai',
    'AI Marketing Agency in Mumbai',
    'Online Marketing Agency in Mumbai',
    'Digital Marketing Company in India',
    'digital marketing services',
    'digital marketing agency',
    'online marketing',
    'search engine optimization in digital marketing',
    'search engine optimization agencies',
    'google ads agency',
    'meta instagram ads',
    'traditional marketing agency',
    'Logo Design Services',
    'Creative Branding Agency',
    'motion graphics',
    'video editing',
    'ai chatbots',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        eyebrow="What We Do"
        title="A complete marketing engine, under one roof"
        subtitle="From search to screen, from strategy to scale — every capability your brand needs to grow."
      />
      <Services />
      <ServicesGrid />
      <Process />
      <Industries />
      <CTASection />
    </>
  );
}
