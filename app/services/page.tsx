import { PageHeader } from '@/components/page-header';
import { Services } from '@/components/sections/services';
import { ServicesGrid } from '@/components/sections/services-grid';
import { Process } from '@/components/sections/process';
import { Industries } from '@/components/sections/industries';
import { CTASection } from '@/components/sections/cta';

export const metadata = { title: 'Services — Vystar Media' };

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
