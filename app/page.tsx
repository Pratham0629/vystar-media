import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { SolutionsPreview } from '@/components/sections/solutions-preview';
import { EngagementProcess } from '@/components/sections/engagement-process';
import { Testimonials } from '@/components/sections/testimonials';
import { HomeOverview } from '@/components/sections/home-overview';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Mumbai & India | Best SEO & Branding Agency — Vystar Media',
  description:
    'Vystar Media is a leading Digital Marketing Company in Mumbai & India offering high-performance Digital Marketing Services in Mumbai, SEO Agency in Mumbai, Social Media Marketing, Performance Marketing, and Branding Agency in Mumbai.',
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
      <EngagementProcess />
      <Testimonials />
      <HomeOverview />
      <CTASection />
    </>
  );
}
