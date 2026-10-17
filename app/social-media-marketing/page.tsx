import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/sections/cta';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Share2, Video, Sparkles, TrendingUp, BarChart3, HelpCircle, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social Media Marketing in Boisar & Mumbai | Vystar Media',
  description:
    'Build your social presence with content strategy, reels, creative posts and paid social campaigns from Vystar Media in Boisar, serving Mumbai and Palghar.',
  keywords: [
    'social media marketing agency Boisar',
    'social media management Boisar',
    'Instagram marketing services Mumbai',
    'reels creation services Palghar',
    'social media marketing packages Boisar',
    'Instagram marketing Mumbai',
    'reels creation Palghar',
    'social media advertising Maharashtra',
    'social media company Boisar',
    'Instagram agency Boisar',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/social-media-marketing',
  },
  openGraph: {
    title: 'Social Media Marketing in Boisar & Mumbai | Vystar Media',
    description:
      'Build your social presence with content strategy, reels, creative posts and paid social campaigns from Vystar Media in Boisar, serving Mumbai and Palghar.',
    url: 'https://vystarmedia.in/social-media-marketing',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Instagram reels production; social media content planning; Meta advertising creative',
      },
    ],
  },
};

const servicesList = [
  {
    icon: Sparkles,
    title: 'Content Strategy & Calendar Planning',
    desc: 'Research-backed content pillars designed to establish category authority and capture customer attention daily.',
    points: ['Monthly content calendars', 'Competitor hook benchmarking', 'Trend & audio analysis', 'Hashtag & search optimization'],
  },
  {
    icon: Video,
    title: 'Viral Reels & Short-Form Video',
    desc: 'Scripting, filming direction, 4K color grading, and dynamic kinetic captions tailored for Instagram Reels and YouTube Shorts.',
    points: ['High-retention video hooks', 'Seamless transitions & sound design', '1080p Full HD vertical exports', 'Product showcase reels'],
  },
  {
    icon: Layers,
    title: 'High-Impact Carousel & Post Design',
    desc: 'Thumb-stopping graphics, informative carousels, and consistent visual branding that turns casual scrollers into followers.',
    points: ['Educational carousel decks', 'Branded story templates', 'Offer & promotional graphics', 'Festive & seasonal campaigns'],
  },
  {
    icon: Share2,
    title: 'Publishing & Community Management',
    desc: 'End-to-end scheduling at peak engagement times, direct message lead triage, and active community engagement.',
    points: ['Optimal posting times', 'DM response management', 'Comment moderation', 'Review & feedback monitoring'],
  },
  {
    icon: TrendingUp,
    title: 'Paid Social Amplification',
    desc: 'Targeted Meta and Instagram advertising to turn top-performing organic reels into profitable customer acquisition engines.',
    points: ['Custom & lookalike audiences', 'Retargeting website visitors', 'Lead generation forms', 'Cost-per-follower reduction'],
  },
  {
    icon: BarChart3,
    title: 'Monthly Growth & ROI Analytics',
    desc: 'Transparent monthly reporting on follower growth, engagement rates, reach expansion, and qualified inquiries.',
    points: ['Reach and impressions audits', 'Top-performing content breakdown', 'Follower demographics', 'Quarterly strategy updates'],
  },
];

const faqs = [
  {
    q: 'How frequently will you post on our social media handles?',
    a: 'Depending on your package, we typically publish 12 to 24 high-value posts and reels per month (3 to 6 posts weekly), complemented by active daily stories for maximum engagement.',
  },
  {
    q: 'Do you create original video reels for businesses in Boisar & Palghar?',
    a: 'Yes! We have an in-house creative studio that scripts, edits, and produces viral 9:16 vertical reels with punchy captions, sound design, and color grading tailored for local and regional audiences.',
  },
  {
    q: 'Can social media marketing directly generate sales leads?',
    a: 'Absolutely. By pairing organic reel authority with targeted Meta lead ads and DM automation, we turn profile visits directly into qualified WhatsApp inquiries and scheduled appointments.',
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <PageHeader
        crumb="Social Media Marketing"
        eyebrow="Social Media Agency Boisar"
        title="Social Media Marketing That Builds Awareness and Demand"
        subtitle="Dominate Instagram, Facebook, and LinkedIn with viral reels, strategic storytelling, and paid social campaigns from Boisar's top marketing agency."
      />

      {/* Main Section */}
      <section className="py-16 md:py-24 bg-navy text-navy-foreground border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-accent">Turn Attention Into Revenue</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-white">
                Build a Magnetic Brand That Commands Market Attention
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body-muted">
                As the leading social media marketing agency Boisar businesses rely on, Vystar Media delivers end-to-end social media management Boisar, high-engagement Instagram marketing services Mumbai, and viral reels creation services Palghar. Explore our transparent social media marketing packages Boisar designed to scale your business.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact?service=Social+Media+Marketing">
                    Claim Social Growth Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10">
                  <Link href="/pricing">View Packages</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-navy-950 p-6 md:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">What Our Social Management Delivers</h3>
              <ul className="space-y-3 text-sm text-body-muted">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Consistent Growth:</strong> Strategic posting schedule without you lifting a finger.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Short-Form Video Mastery:</strong> High-retention vertical reels edited by creative experts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Direct Inquiries:</strong> Strategic CTA triggers that funnel followers directly into your WhatsApp and DMs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Local Reach:</strong> Strong local resonance across Boisar, Palghar, Tarapur, and the Mumbai Metropolitan Region.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Deliverables */}
      <section className="py-20 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-accent">Full-Funnel Social Engine</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-foreground">
              Everything Needed to Dominate Social Channels
            </h2>
            <p className="mt-3 text-sm text-body-muted">
              From creative scripting and reel filming to daily scheduling and paid conversion funnels.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={idx} className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{svc.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-body-muted">{svc.desc}</p>
                    <ul className="mt-4 space-y-2 border-t border-border/50 pt-4">
                      {svc.points.map((pt, pIdx) => (
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
            <span className="text-xs uppercase font-bold tracking-widest text-accent">Common Inquiries</span>
            <h2 className="mt-2 text-3xl font-display font-bold text-foreground">
              Frequently Asked Questions About Social Media
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
            <p className="text-xs text-body-muted mb-4">Explore More Growth Solutions:</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <Link href="/services" className="text-accent hover:underline">All Services</Link>
              <span className="text-border">•</span>
              <Link href="/video-production" className="text-accent hover:underline">Video Production & Reels</Link>
              <span className="text-border">•</span>
              <Link href="/google-meta-ads" className="text-accent hover:underline">Meta & Instagram Ads</Link>
              <span className="text-border">•</span>
              <Link href="/pricing" className="text-accent hover:underline">View Pricing Plans</Link>
              <span className="text-border">•</span>
              <Link href="/contact" className="text-accent hover:underline">Contact Vystar Media</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
