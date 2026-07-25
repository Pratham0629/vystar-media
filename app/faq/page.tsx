import { PageHeader } from '@/components/page-header';
import { FAQ } from '@/components/sections/faq';
import { CTASection } from '@/components/sections/cta';

export const metadata = { title: 'FAQ — Vystar Media' };

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
