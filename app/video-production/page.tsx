import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { VideoShowcase } from '@/components/sections/video-showcase';
import { CTASection } from '@/components/sections/cta';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Video, Sparkles, Film, Youtube, Layers, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Video Production & Editing in Boisar | Vystar Media',
  description:
    "Create reels, brand films and ad creatives with Vystar Media's video production and editing services for businesses in Boisar, Palghar and Mumbai.",
  keywords: [
    'video production company Boisar',
    'Instagram reels editing Mumbai',
    'reels creation services Palghar',
    'video editing Boisar',
    'promotional video Palghar',
    'brand video production Maharashtra',
    'video editor Boisar',
    'YouTube video editing Mumbai',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/video-production',
  },
  openGraph: {
    title: 'Video Production & Editing in Boisar | Vystar Media',
    description:
      "Create reels, brand films and ad creatives with Vystar Media's video production and editing services for businesses in Boisar, Palghar and Mumbai.",
    url: 'https://vystarmedia.in/video-production',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Instagram reels editing; branded video advertisement; product showcase video',
      },
    ],
  },
};

const videoOfferings = [
  {
    icon: Video,
    title: 'Instagram Reels & YouTube Shorts',
    desc: 'High-velocity 9:16 vertical short-form edits designed with psychological hooks, rapid pacing, and kinetic subtitles.',
    points: ['Scroll-stopping 3-second hooks', 'Dynamic sound effects (SFX)', 'Kinetic animated captions', '1080p 60fps vertical exports'],
  },
  {
    icon: Sparkles,
    title: 'High-Converting Direct-Response Ads',
    desc: 'Paid ad creatives for Meta, YouTube, and Google Ads engineered to maximize click-through rates and customer conversions.',
    points: ['Problem-agitation-solution scripts', 'Before-and-after transformations', 'UGC-style creator videos', 'Clear call-to-action overlays'],
  },
  {
    icon: Film,
    title: 'Commercial Brand Films & Promos',
    desc: 'Cinematic corporate profile films, factory walkthroughs, and business overview stories filmed in full 4K UHD.',
    points: ['Professional camera gear & lighting', 'Cinematic drone aerial footage', 'Professional voiceover dubbing', 'Color grading in DaVinci Resolve'],
  },
  {
    icon: Youtube,
    title: 'Long-Form YouTube Video Editing',
    desc: 'Retention-focused YouTube editing with custom B-roll, motion graphics, zoom-ins, meme pacing, and clickable thumbnails.',
    points: ['Audience retention optimization', 'Custom thumbnail design', 'Engaging chapter sequencing', 'Royalty-free licensed music'],
  },
  {
    icon: Layers,
    title: '3D Motion Graphics & Visual FX',
    desc: 'Logo animations, kinetic typography, 3D product visualizations, and motion infographics that elevate brand perception.',
    points: ['Custom 2D/3D logo reveals', 'Explainer motion graphics', 'Animated UI/software demos', 'Broadcast-grade title sequences'],
  },
];

const faqs = [
  {
    q: 'Can we send raw phone footage for you to edit into professional reels?',
    a: 'Yes, absolutely! Many of our clients in Boisar, Palghar and Mumbai shoot raw clips on their smartphones and send them via Google Drive. Our editors handle color grading, noise reduction, hook pacing, kinetic captions, and sound design to make it look broadcast-quality.',
  },
  {
    q: 'What is your typical turnaround time for video editing?',
    a: 'Standard reels and short-form video edits are delivered within 24 to 48 hours. Larger commercial brand films or complex 3D motion graphic projects typically take 5 to 7 business days.',
  },
  {
    q: 'What video editing software does your team use?',
    a: 'We use industry-standard suites including Adobe Premiere Pro, After Effects, DaVinci Resolve Studio (for cinematic color grading), and Blender/Cinema 4D for 3D motion graphics.',
  },
];

export default function VideoProductionPage() {
  return (
    <>
      <PageHeader
        crumb="Video Production"
        eyebrow="Creative Studio"
        title="Video Production and Editing for Brands"
        subtitle="Turn casual viewers into loyal customers. Broadcast-quality reels, commercial ad creatives, and brand films crafted in Boisar for ambitious businesses in Mumbai and beyond."
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-navy text-navy-foreground border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-accent">Visual Storytelling Mastery</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-white">
                Video Is the Most Powerful Growth Medium in Digital Marketing
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body-muted">
                As the leading video production company Boisar businesses partner with, Vystar Media specializes in viral Instagram reels editing Mumbai, cinematic commercials, and expert reels creation services Palghar to win attention on every platform.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact?service=Video+Editing">
                    Book Video Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10">
                  <Link href="#portfolio-reels">Watch Sample Edits</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-navy-950 p-6 md:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Our Production Standards</h3>
              <ul className="space-y-3 text-sm text-body-muted">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>1080p & 4K Master Quality:</strong> Pristine bitrates optimized for Instagram, YouTube & TikTok.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Hook-First Scripting:</strong> Capturing viewer attention in the first 2 seconds to boost algorithmic retention.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Commercial Sound Design:</strong> Licensed audio tracks, whooshes, risers, and vocal audio cleanup.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Rapid 24-48h Turnaround:</strong> Keep your content machine publishing consistently without delays.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-accent">Creative Offerings</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-foreground">
              End-To-End Video Production & Editing
            </h2>
            <p className="mt-3 text-sm text-body-muted">
              From raw footage curation to cinematic final delivery across all digital channels.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videoOfferings.map((offering, idx) => {
              const Icon = offering.icon;
              return (
                <div key={idx} className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{offering.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-body-muted">{offering.desc}</p>
                    <ul className="mt-4 space-y-2 border-t border-border/50 pt-4">
                      {offering.points.map((pt, pIdx) => (
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

      {/* Embedded Live Video Showcase Reel Section */}
      <div id="portfolio-reels">
        <VideoShowcase />
      </div>

      {/* FAQs */}
      <section className="py-20 bg-background border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-accent">Video Production FAQs</span>
            <h2 className="mt-2 text-3xl font-display font-bold text-foreground">
              Frequently Asked Questions About Video Production
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
            <p className="text-xs text-body-muted mb-4">Explore More Marketing Solutions:</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <Link href="/services" className="text-accent hover:underline">All Services</Link>
              <span className="text-border">•</span>
              <Link href="/social-media-marketing" className="text-accent hover:underline">Social Media Marketing</Link>
              <span className="text-border">•</span>
              <Link href="/branding-services" className="text-accent hover:underline">Branding & Logo Design</Link>
              <span className="text-border">•</span>
              <Link href="/pricing" className="text-accent hover:underline">Video Packages</Link>
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
