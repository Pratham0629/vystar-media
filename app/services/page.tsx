import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Services } from '@/components/sections/services';
import { ServicesGrid } from '@/components/sections/services-grid';
import { CTASection } from '@/components/sections/cta';
import { ArrowRight, Search, Share2, Target, Palette, Video, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Boisar & Mumbai | Vystar Media',
  description:
    "Explore Vystar Media's marketing services in Boisar and Mumbai, including SEO, Google Ads, social media marketing, branding, video production and AI-powered business solutions.",
  keywords: [
    'digital marketing services in Boisar',
    'digital marketing agency Boisar',
    'SEO services Boisar',
    'social media marketing Boisar',
    'digital marketing services Mumbai',
    'marketing company Palghar',
    'Google Ads agency Boisar',
    'branding agency Boisar',
    'video production Boisar',
    'website development Boisar',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/services',
  },
  openGraph: {
    title: 'Digital Marketing Services in Boisar & Mumbai | Vystar Media',
    description:
      "Explore Vystar Media's marketing services in Boisar and Mumbai, including SEO, Google Ads, social media marketing, branding, video production and AI-powered business solutions.",
    url: 'https://vystarmedia.in/services',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO services; Google Ads campaign management; branding services; video editing and production',
      },
    ],
  },
};

const dedicatedServices = [
  {
    title: 'SEO Services',
    href: '/seo-services-mumbai',
    icon: Search,
    desc: 'Technical audits, keyword strategy, on-page optimization & local SEO for Boisar, Palghar and Mumbai.',
    badge: 'Organic Growth',
  },
  {
    title: 'Social Media Marketing',
    href: '/social-media-marketing',
    icon: Share2,
    desc: 'High-engagement Instagram reels, creative carousels, content strategy and community growth.',
    badge: 'Brand Presence',
  },
  {
    title: 'Google & Meta Ads',
    href: '/google-meta-ads',
    icon: Target,
    desc: 'High-ROI PPC search campaigns, Facebook & Instagram lead funnels and conversion optimization.',
    badge: 'Paid Performance',
  },
  {
    title: 'Branding Services',
    href: '/branding-services',
    icon: Palette,
    desc: 'Memorable brand identity, logo design, visual branding systems and guidelines for growing businesses.',
    badge: 'Identity Design',
  },
  {
    title: 'Video Production & Editing',
    href: '/video-production',
    icon: Video,
    desc: 'Viral 9:16 vertical reels, commercial brand films, motion graphics and YouTube editing in 1080p Full HD.',
    badge: 'Creative Studio',
  },
  {
    title: 'Website Development',
    href: '/website-development',
    icon: Globe,
    desc: 'Ultra-fast Next.js websites, high-converting landing pages, mobile-responsive UI/UX & technical SEO.',
    badge: 'Web & Tech',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        eyebrow="What We Do"
        title="Digital Marketing, Branding & Creative Services in Boisar"
        subtitle="From search to screen, from strategy to scale — explore specialized marketing solutions tailored for businesses in Boisar, Palghar, Mumbai and across Maharashtra."
      />

      {/* Quick Access to Dedicated Core Service Landing Pages */}
      <section className="bg-section-alt py-12 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Specialized Solutions</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-foreground">
              Explore Our Dedicated Service Hubs
            </h2>
            <p className="mt-2 text-sm text-body-muted">
              Deep-dive into our specialized services engineered for maximum ROI in Boisar, Palghar & Mumbai.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dedicatedServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-accent border border-accent/20">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-highlight transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-body-muted">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:text-highlight transition-colors pt-3 border-t border-border/40">
                    Explore {service.title}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Services />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
