import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { About } from '@/components/sections/about';
import { Values } from '@/components/sections/values';
import { Milestones } from '@/components/sections/milestones';
import { Team } from '@/components/sections/team';
import { Stats } from '@/components/sections/stats';
import { Industries } from '@/components/sections/industries';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Top Digital Marketing Company & Branding Agency in Mumbai — Vystar Media',
  description:
    'Vystar Media is a premier Online Marketing Agency in Mumbai & Digital Marketing Company in India. Where creativity, technology & strategy converge.',
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
    'Best Digital Marketing Company',
    'Digital Branding',
    'Local SEO Services',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="About Vystar Media"
        title="Where creativity, technology & strategy converge"
        subtitle="A growth-focused marketing company that combines creativity, technology, and strategy to expand brands beyond boundaries."
      />
      <About />
      <Values />
      <Milestones />
      <Team />
      <Stats />
      <Industries />
      <CTASection />
    </>
  );
}
