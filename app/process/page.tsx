import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Process } from '@/components/sections/process';
import { Values } from '@/components/sections/values';
import { Stats } from '@/components/sections/stats';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Our Process — A Proven Path From Idea to Impact — Vystar Media',
  description:
    'Eight deliberate steps that turn ambition into measurable growth — each with a clear deliverable and timeline.',
  keywords: [
    'Digital Marketing Process',
    'Marketing Strategy Process',
    'Digital Marketing Workflow',
    'Digital Marketing Solutions',
    'Marketing Project Process',
    'Growth Strategy',
    'Business Growth Process',
    'Digital Growth Strategy',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/process',
  },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        crumb="Process"
        eyebrow="How We Work"
        title="A proven path from idea to impact"
        subtitle="Eight deliberate steps that turn ambition into measurable growth — each with a clear deliverable and timeline."
      />
      <Process />
      <Values />
      <Stats />
      <CTASection />
    </>
  );
}
