import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Process } from '@/components/sections/process';
import { Values } from '@/components/sections/values';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Our Marketing Process | Vystar Media, Boisar',
  description:
    'See how Vystar Media turns research and strategy into creative execution, campaign optimization and transparent reporting for businesses in Boisar, Mumbai and across India.',
  keywords: [
    'digital marketing strategy process',
    'marketing campaign process Maharashtra',
    'SEO strategy process',
    'performance marketing optimization',
    'marketing reporting Boisar',
    'digital growth strategy Mumbai',
    'marketing workflow Boisar',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/process',
  },
  openGraph: {
    title: 'Our Marketing Process | Vystar Media, Boisar',
    description:
      'See how Vystar Media turns research and strategy into creative execution, campaign optimization and transparent reporting for businesses in Boisar, Mumbai and across India.',
    url: 'https://vystarmedia.in/process',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Vystar Media marketing planning process; campaign performance reporting dashboard',
      },
    ],
  },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        crumb="Process"
        eyebrow="How We Work"
        title="A Clear Process From Strategy to Measurable Growth"
        subtitle="Our proven digital marketing strategy process turns business ambition into measurable revenue: from in-depth market discovery to campaign execution, conversion optimization and transparent reporting."
      />
      <Process />
      <Values />
      <CTASection />
    </>
  );
}
