import { PageHeader } from '@/components/page-header';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { Industries } from '@/components/sections/industries';
import { CTASection } from '@/components/sections/cta';

export const metadata = { title: 'Pricing — Vystar Media' };

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
