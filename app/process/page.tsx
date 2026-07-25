import { PageHeader } from '@/components/page-header';
import { Process } from '@/components/sections/process';
import { Values } from '@/components/sections/values';
import { Stats } from '@/components/sections/stats';
import { CTASection } from '@/components/sections/cta';

export const metadata = { title: 'Our Process — Vystar Media' };

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
