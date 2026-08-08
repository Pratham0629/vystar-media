import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { Industries } from '@/components/sections/industries';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Digital Marketing Packages & Pricing — Vystar Media',
  description:
    'Plans that scale with your ambition. Custom-quoted for your goals. No hidden fees, no surprises — just a tailored proposal aligned to your scope and outcomes.',
  keywords: [
    'Digital Marketing Pricing',
    'Digital Marketing Packages',
    'Digital Marketing Services Pricing',
    'SEO Packages',
    'Social Media Marketing Packages',
    'Website Development Pricing',
    'Google Ads Management Pricing',
    'Meta Ads Pricing',
    'Branding Packages',
    'Marketing Service Packages',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        crumb="Pricing"
        eyebrow="Pricing"
        title="Plans that scale with your ambition"
        subtitle="Custom-quoted for your goals. No hidden fees, no surprises — just a tailored proposal aligned to your scope and outcomes."
      />
      <Pricing />
      <Industries />
      <FAQ />
      <CTASection />
    </>
  );
}
