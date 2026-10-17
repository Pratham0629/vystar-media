import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { FoundersVision } from '@/components/sections/founders-vision';
import { Milestones } from '@/components/sections/milestones';
import { Industries } from '@/components/sections/industries';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'About Vystar Media | Marketing Agency in Boisar',
  description:
    'Meet Vystar Media, a Boisar-based marketing agency combining digital strategy, branding, creative production and automation for businesses in Boisar, Palghar and Mumbai.',
  keywords: [
    'marketing agency in Boisar',
    'digital marketing company Boisar',
    'branding agency Boisar',
    'advertising agency Palghar',
    'marketing agency Mumbai',
    'digital marketing Maharashtra',
    'SEO agency Boisar',
    'creative agency Boisar',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/about',
  },
  openGraph: {
    title: 'About Vystar Media | Marketing Agency in Boisar',
    description:
      'Meet Vystar Media, a Boisar-based marketing agency combining digital strategy, branding, creative production and automation for businesses in Boisar, Palghar and Mumbai.',
    url: 'https://vystarmedia.in/about',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Vystar Media marketing strategy team; Vystar Media creative team',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="About Vystar Media"
        title="A Growth-Focused Marketing Agency Based in Boisar"
        subtitle="Combining cutting-edge digital strategy, high-conversion branding, creative video production and automation for businesses across Boisar, Palghar, Mumbai and Maharashtra."
      />
      <FoundersVision />
      <Milestones />
      <Industries />
      <CTASection />
    </>
  );
}
