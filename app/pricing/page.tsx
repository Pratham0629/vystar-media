import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Pricing } from '@/components/sections/pricing';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Digital Marketing Packages in Maharashtra | Vystar Media',
  description:
    'Explore tailored marketing plans from Vystar Media, based in Boisar and serving businesses across Maharashtra. Request a quote for SEO, ads, branding and content.',
  keywords: [
    'digital marketing packages Maharashtra',
    'digital marketing packages in Maharashtra',
    'social media marketing packages Boisar',
    'digital marketing agency pricing India',
    'SEO pricing Mumbai',
    'marketing agency quote Palghar',
    'digital marketing pricing Boisar',
    'branding packages Maharashtra',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/pricing',
  },
  openGraph: {
    title: 'Digital Marketing Packages in Maharashtra | Vystar Media',
    description:
      'Explore tailored marketing plans from Vystar Media, based in Boisar and serving businesses across Maharashtra. Request a quote for SEO, ads, branding and content.',
    url: 'https://vystarmedia.in/pricing',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Vystar Media digital marketing packages; marketing plan comparison',
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        crumb="Pricing"
        eyebrow="Transparent Investment"
        title="Marketing Plans for Businesses in Boisar, Mumbai & Maharashtra"
        subtitle="Explore transparent digital marketing packages Maharashtra businesses trust and flexible social media marketing packages Boisar brands scale with — custom-quoted for measurable ROI."
      />
      <Pricing />
      <CTASection />
    </>
  );
}
