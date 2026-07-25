import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { SolutionsPreview } from '@/components/sections/solutions-preview';
import { Testimonials } from '@/components/sections/testimonials';
import { HomeOverview } from '@/components/sections/home-overview';
import { CTASection } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <SolutionsPreview />
      <Testimonials />
      <HomeOverview />
      <CTASection />
    </>
  );
}
