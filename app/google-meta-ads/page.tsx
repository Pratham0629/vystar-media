import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/sections/cta';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Target, Search, MousePointerClick, Zap, BarChart3, HelpCircle, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google & Meta Ads Management | Boisar | Vystar Media',
  description:
    'Reach high-intent audiences with Google and Meta ad campaigns, conversion tracking and reporting from Vystar Media, serving Boisar, Palghar and Mumbai.',
  keywords: [
    'Google Ads agency Boisar',
    'Meta Ads agency Mumbai',
    'PPC management services Maharashtra',
    'Google Ads management Boisar',
    'Facebook ads Palghar',
    'PPC services Maharashtra',
    'performance marketing Boisar',
    'paid ads agency Boisar',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/google-meta-ads',
  },
  openGraph: {
    title: 'Google & Meta Ads Management | Boisar | Vystar Media',
    description:
      'Reach high-intent audiences with Google and Meta ad campaigns, conversion tracking and reporting from Vystar Media, serving Boisar, Palghar and Mumbai.',
    url: 'https://vystarmedia.in/google-meta-ads',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Google Ads campaign dashboard; Meta Ads creative testing',
      },
    ],
  },
};

const adCapabilities = [
  {
    icon: Search,
    title: 'Google Search & High-Intent PPC Ads',
    desc: 'Capture users actively searching to buy your services right at the exact moment of commercial intent.',
    points: ['Keyword bidding optimization', 'Negative keyword scrubbing', 'Ad copy testing & extensions', 'Quality Score maximization'],
  },
  {
    icon: Target,
    title: 'Meta Ads (Instagram & Facebook Lead Funnels)',
    desc: 'Laser-targeted paid social campaigns that turn casual browsers into warm inbound leads and booked calls.',
    points: ['Lookalike & custom audience building', 'Instant Lead Gen forms', 'Direct WhatsApp click-to-chat ads', 'High-ROAS retargeting funnels'],
  },
  {
    icon: MousePointerClick,
    title: 'High-Converting Landing Pages',
    desc: 'We build ultra-fast, mobile-first landing pages engineered specifically to maximize conversion rates on paid traffic.',
    points: ['Speed optimization (< 1s load)', 'Benefit-driven copywriting', 'Strong single-focus call-to-actions', 'A/B landing page split testing'],
  },
  {
    icon: Zap,
    title: 'Conversion Tracking & Attribution',
    desc: 'Bulletproof tracking setup using Meta Pixel, Conversions API (CAPI), Google Tag Manager, and Google Analytics 4.',
    points: ['Server-side event tracking', 'ROAS & CPA calculation', 'Lead qualification tracking', 'Cross-device attribution'],
  },
  {
    icon: Layers,
    title: 'Continuous Creative Testing & Optimization',
    desc: 'Systematic testing of video hooks, ad visuals, headlines, and offers to prevent ad fatigue and lower your cost-per-lead.',
    points: ['Weekly creative refreshes', 'Audience fatigue monitoring', 'Bid strategy tuning', 'Budget reallocation to winners'],
  },
  {
    icon: BarChart3,
    title: 'Transparent Reporting & Live Dashboard',
    desc: 'Clear, real-time reporting linking ad spend directly to qualified pipeline, revenue, and customer acquisition costs.',
    points: ['Daily/weekly spend monitor', 'Cost-per-acquisition breakdown', 'WhatsApp lead attribution', 'Dedicated campaign manager'],
  },
];

const faqs = [
  {
    q: 'What is the minimum recommended ad budget for Google & Meta Ads?',
    a: 'We typically recommend a minimum advertising budget of ₹15,000 to ₹30,000 per month for local campaigns in Boisar and Palghar, and ₹50,000+ for Mumbai/Maharashtra-wide expansion. This provides enough data to test, optimize, and scale profitable conversions.',
  },
  {
    q: 'Which platform is better for my business: Google Ads or Meta Ads?',
    a: 'Google Ads captures active intent (users searching for "best clinic near me" or "industrial supplier in Boisar"). Meta Ads creates demand and builds brand awareness through visual storytelling and video reels. Combining both delivers the highest overall ROI.',
  },
  {
    q: 'How do you ensure leads are qualified and not spam?',
    a: 'We implement custom qualification questions on lead forms, phone number verification, and reCAPTCHA on landing pages. We also track offline CRM conversions back to ad campaigns to optimize for paying customers rather than low-quality clicks.',
  },
];

export default function GoogleMetaAdsPage() {
  return (
    <>
      <PageHeader
        crumb="Paid Advertising"
        eyebrow="Performance Marketing"
        title="Performance Advertising Focused on Leads and Conversions"
        subtitle="Stop burning ad budget on wasted clicks. Run precision Google Ads and Meta campaigns that deliver predictable, high-ROAS revenue for businesses in Boisar, Palghar & Mumbai."
      />

      {/* Main Feature Intro */}
      <section className="py-16 md:py-24 bg-navy text-navy-foreground border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-accent">Predictable Pipeline</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-white">
                Turn Every Rupee of Ad Spend Into Measurable Customer Pipeline
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body-muted">
                As a leading Google Ads agency Boisar businesses rely on and a high-converting Meta Ads agency Mumbai companies scale with, Vystar Media provides comprehensive PPC management services Maharashtra to generate predictable customer pipeline and high ROAS.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact?service=Google+and+Meta+Ads">
                    Launch Your Paid Funnel <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10">
                  <Link href="/pricing">View Packages</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-navy-950 p-6 md:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Why Vystar Media Outperforms</h3>
              <ul className="space-y-3 text-sm text-body-muted">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Full Tracking Rigor:</strong> CAPI and GTM setup so zero conversion data is lost.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Custom Landing Pages:</strong> High-speed pages engineered specifically to boost conversion rates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Creative + Media Buying:</strong> In-house video and design team testing new creatives every week.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Direct WhatsApp Integration:</strong> Connect prospective customers directly with your sales team in 1 click.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-accent">End-To-End Execution</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-foreground">
              Our Performance Advertising Engine
            </h2>
            <p className="mt-3 text-sm text-body-muted">
              Strategic campaign structure, relentless creative testing, and transparent lead attribution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{cap.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-body-muted">{cap.desc}</p>
                    <ul className="mt-4 space-y-2 border-t border-border/50 pt-4">
                      {cap.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2 text-xs text-foreground">
                          <Check className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-accent">Clarity on Paid Ads</span>
            <h2 className="mt-2 text-3xl font-display font-bold text-foreground">
              Frequently Asked Questions About Paid Ads
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <div key={fIdx} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-accent shrink-0" />
                  {faq.q}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-body-muted leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Internal links */}
          <div className="mt-12 p-6 rounded-2xl bg-card border border-border text-center">
            <p className="text-xs text-body-muted mb-4">Discover Related Capabilities:</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <Link href="/services" className="text-accent hover:underline">All Services</Link>
              <span className="text-border">•</span>
              <Link href="/seo-services-mumbai" className="text-accent hover:underline">SEO Services</Link>
              <span className="text-border">•</span>
              <Link href="/website-development" className="text-accent hover:underline">Landing Page & Web Dev</Link>
              <span className="text-border">•</span>
              <Link href="/pricing" className="text-accent hover:underline">Ad Management Packages</Link>
              <span className="text-border">•</span>
              <Link href="/contact" className="text-accent hover:underline">Request Free Audit</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
