import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Services } from '@/components/sections/services';
import { ServicesGrid } from '@/components/sections/services-grid';
import { Process } from '@/components/sections/process';
import { Industries } from '@/components/sections/industries';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Digital Marketing & Branding Services — SEO, PPC, Social Media, AI — Vystar Media',
  description:
    'Full-spectrum marketing services: SEO Services, Google Ads (PPC), Meta Ads, Branding & Logo Design, Social Media Management, AI Automation, Auto Rickshaw Advertising, and Outdoor Media.',
  keywords: [
    'SEO services company',
    'Google Ads agency',
    'PPC marketing services',
    'Social media management company',
    'Branding services Boisar',
    'Logo design services',
    'AI marketing automation',
    'Auto rickshaw advertising',
    'Outdoor billboard advertising',
    'Website development agency',
    'Digital marketing services Palghar',
  ],
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
