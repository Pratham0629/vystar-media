import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { SolutionsPreview } from '@/components/sections/solutions-preview';
import { Testimonials } from '@/components/sections/testimonials';
import { HomeOverview } from '@/components/sections/home-overview';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'We Don\'t Just Market Brands. We Build Them. — Vystar Media',
  description:
    'Helping businesses grow through powerful Digital Marketing, Traditional Marketing, Branding, Creative Design, AI Automation, and Business Strategy.',
  keywords: [
    'Digital Marketing Agency',
    'SEO Services',
    'Social Media Marketing',
    'Meta Ads',
    'Google Ads',
    'Website Development',
    'Branding Services',
    'Performance Marketing',
    'Content Marketing',
    'Lead Generation',
    'Local SEO',
    'PPC Management',
    'digital marketing services',
    'digital marketing',
    'online marketing',
    'freelance digital marketing',
    'digital marketing company',
    'digital advertising',
    'marketing agency near me',
    'marketing agency',
    'marketing companies',
    'Marketing Agency Near Me',
    'Digital Marketing Agency Near Me',
    'advertising company',
    'marketing firms',
    'best seo agencies',
    'advertising services',
    'ad agencies near me',
    'Vistar Media Marketing Agency',
    'Marketing Agency Near Mumbai',
    'marketing and branding companies',
    'Professional Marketing Agency',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <SolutionsPreview />
      <Testimonials />
      <HomeOverview />
      <CTASection />
    </>
  );
}
