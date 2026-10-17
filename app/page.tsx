import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { VideoShowcase } from '@/components/sections/video-showcase';
import { Testimonials } from '@/components/sections/testimonials';
import { CoreServices } from '@/components/sections/core-services';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Boisar | Vystar Media India',
  description:
    'Vystar Media is a Boisar-based marketing agency offering SEO, social media marketing, paid ads, branding and creative services for businesses in Boisar, Palghar and Mumbai.',
  keywords: [
    'digital marketing agency in Boisar',
    'digital marketing company in Boisar',
    'marketing agency in Boisar',
    'advertising agency in Boisar',
    'digital marketing agency in Palghar',
    'digital marketing agency in Mumbai',
    'digital marketing company in Mumbai',
    'digital marketing agency in Maharashtra',
    'digital marketing services in Maharashtra',
    'branding agency in Boisar',
    'SEO services in Boisar',
    'social media marketing Boisar',
    'video production Boisar',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/',
  },
  openGraph: {
    title: 'Digital Marketing Agency in Boisar | Vystar Media',
    description:
      'Vystar Media is a Boisar-based marketing agency offering SEO, social media marketing, paid ads, branding and creative services for businesses in Boisar, Palghar and Mumbai.',
    url: 'https://vystarmedia.in/',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Vystar Media digital marketing team; branding and creative studio; social media video production',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CoreServices />
      <VideoShowcase />
      <Testimonials />
      <CTASection />
    </>
  );
}
