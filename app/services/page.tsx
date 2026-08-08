import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Services } from '@/components/sections/services';
import { ServicesGrid } from '@/components/sections/services-grid';
import { Process } from '@/components/sections/process';
import { Industries } from '@/components/sections/industries';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Digital Marketing, Branding & Traditional Advertising Services — Vystar Media',
  description:
    'Performance-driven campaigns across every major digital & traditional channel: SEO, PPC, Google Ads, Meta Ads, Motion Graphics, Branding, and AI Solutions.',
  keywords: [
    'digital marketing services',
    'digital marketing',
    'digital marketing agency',
    'online marketing',
    'freelance digital marketing',
    'digital marketing company',
    'digital advertising',
    'marketing agency near me',
    'search engine optimization in digital marketing',
    'search engine optimization agencies',
    'search engine optimization companies',
    'search engine optimization advertising',
    'paid search engine optimization',
    'best search engine optimization agency',
    'google ads ppc',
    'google ads services',
    'google ads agency',
    'google ads agency near me',
    'best google ads agency',
    'facebook and instagram ads services',
    'facebook and instagram',
    'meta instagram',
    'instagram meta',
    'ads management for facebook instagram',
    'traditional marketing',
    'traditional marketing agency',
    'traditional marketing strategies',
    'traditional marketing services',
    'traditional marketing agency Near Me',
    'Logo Design Services',
    'Visual Identity Design',
    'Brand Positioning',
    'Brand Consulting',
    'Creative Branding Agency',
    'Brand Awareness Services',
    'Rebranding Services',
    'Personal Branding Services',
    'Startup Branding',
    'Brand Communication',
    'motion graphics',
    'video editing',
    'product photography',
    'commercial shoots',
    'ui and ux',
    'free video editor',
    'ux design',
    'filmora',
    'online video editor',
    'ui ux designer',
    'video maker',
    'ai video editor',
    'capcut video editor',
    'crm automation',
    'lead automation',
    'workflow automation',
    'business consulting',
    'data analytics',
    'ai chatbots',
    'chat bot',
    'chatbot ai',
    'ai bot',
    'conversational ai',
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
