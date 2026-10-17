import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Pricing } from '@/components/sections/pricing';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Digital Marketing Packages in Maharashtra | Vystar Media',
  description:
    'Explore tailored marketing plans from Vystar Media, based in Boisar and serving businesses across Maharashtra. Request a quote for SEO, ads, branding and content.',
  keywords: [
    'digital marketing packages in Maharashtra',
    'digital marketing agency pricing India',
    'social media marketing packages Boisar',
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
        subtitle="Transparent marketing packages tailored to your exact growth stage. Custom-quoted for your goals with no hidden fees and transparent ROI reporting."
      />
      <Pricing />
      <CTASection />
    </>
  );
}
