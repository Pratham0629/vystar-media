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
  title: 'Where Creativity, Technology & Strategy Converge — Vystar Media',
  description:
    'A growth-focused marketing company that combines creativity, technology, and strategy to expand brands beyond boundaries.',
  keywords: [
    'Best Digital Marketing Company',
    'Online Marketing Agency',
    'Social Media Management',
    'Business Growth Agency',
    'Digital Branding',
    'Local SEO Services',
    'E-commerce Marketing',
    'PPC Advertising',
    'Marketing Strategy',
    'Conversion Optimization',
    'Creative Marketing Agency',
    'ROI-Driven Marketing',
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
