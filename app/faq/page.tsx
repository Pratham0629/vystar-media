import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { FAQ } from '@/components/sections/faq';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Digital Marketing & Branding FAQs — Vystar Media',
  description:
    'Everything you need to know before partnering with Vystar Media. Answers to common questions about SEO, Ads, Branding, and Timelines.',
  keywords: [
    'Digital Marketing FAQs',
    'Digital Marketing Questions',
    'Frequently Asked Questions',
    'Marketing Agency FAQ',
    'Digital Marketing Agency FAQ',
    'SEO FAQs',
    'Social Media Marketing FAQs',
    'Google Ads FAQs',
    'Website Development FAQs',
    'Branding FAQs',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/faq',
  },
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        crumb="FAQ"
        eyebrow="FAQ"
        title="Answers to common questions"
        subtitle="Everything you need to know before partnering with Vystar Media."
      />
      <FAQ />
      <CTASection />
    </>
  );
}
