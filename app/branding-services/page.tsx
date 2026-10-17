import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/sections/cta';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Palette, Compass, Bookmark, Package, Layers, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Branding Agency in Boisar & Mumbai | Vystar Media Studio',
  description:
    'Build a consistent brand identity with strategy, logo design and visual systems from Vystar Media, based in Boisar and serving businesses across the region.',
  keywords: [
    'branding agency in Boisar',
    'branding agency Boisar',
    'logo design services Palghar',
    'brand identity design Boisar',
    'logo design Mumbai',
    'branding services Palghar',
    'advertising agency Maharashtra',
    'corporate branding Boisar',
    'packaging design Boisar',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/branding-services',
  },
  openGraph: {
    title: 'Branding Agency in Boisar & Mumbai | Vystar Media',
    description:
      'Build a consistent brand identity with strategy, logo design and visual systems from Vystar Media, based in Boisar and serving businesses across the region.',
    url: 'https://vystarmedia.in/branding-services',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Brand identity design; logo and visual branding system; brand guidelines presentation',
      },
    ],
  },
};

const brandingCapabilities = [
  {
    icon: Compass,
    title: 'Brand Discovery & Positioning',
    desc: 'Unearth your unique competitive moat, core values, target demographic psychology, and brand voice.',
    points: ['Market competitor analysis', 'Customer persona definition', 'Value proposition formulation', 'Tone of voice & messaging pillars'],
  },
  {
    icon: Palette,
    title: 'Logo & Visual Identity Design',
    desc: 'Distinctive, timeless logo marks paired with balanced typography systems, custom color theory, and iconography.',
    points: ['Primary & secondary logo variations', 'Vector iconography sets', 'Color psychology palettes', 'Responsive digital & print formats'],
  },
  {
    icon: Bookmark,
    title: 'Comprehensive Brand Guidelines',
    desc: 'A complete brand bible detailing exact usage rules, typography hierarchies, spacing, and application standards.',
    points: ['Visual identity rulebook', 'Typography hierarchy specs', 'Color code values (HEX, RGB, CMYK)', 'Do & Don’t brand usage rules'],
  },
  {
    icon: Package,
    title: 'Product Packaging & Retail Design',
    desc: 'High-impact consumer packaging, labels, cartons, and point-of-sale retail display branding that stands out on shelves.',
    points: ['Product label & pouch design', 'Retail box & carton packaging', 'Dieline preparation for print', 'In-store signage & promotional banners'],
  },
  {
    icon: Layers,
    title: 'Corporate Stationery & Collateral',
    desc: 'Professional business cards, letterheads, invoice templates, company profiles, and presentation pitch decks.',
    points: ['Premium business stationery', 'Investor pitch deck design', 'Corporate brochures & folders', 'Digital email signatures'],
  },
];

const faqs = [
  {
    q: 'How long does a full brand identity project take?',
    a: 'A complete branding engagement typically takes 3 to 5 weeks. This covers thorough discovery, strategic positioning, initial visual concepts, iterative refinement, and final brand guidelines delivery.',
  },
  {
    q: 'Do we own full intellectual property (IP) rights to our logo and branding?',
    a: 'Yes, 100%. Upon project completion and final payment, full commercial copyright and editable master vector source files (AI, EPS, SVG, PDF, PNG) are handed over to your business.',
  },
  {
    q: 'Can you rebrand an existing company without losing our current recognition?',
    a: 'Absolutely. Rebranding is one of our core specialties. We preserve your existing brand equity while modernizing visual aesthetics, typography, and digital relevance for modern competitive markets.',
  },
];

export default function BrandingServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Branding Services"
        eyebrow="Identity & Strategy"
        title="Brand Strategy and Identity Design for Growing Businesses"
        subtitle="Make your brand impossible to ignore. Distinctive visual identities, memorable logos, and comprehensive brand systems designed in Boisar for businesses across Maharashtra."
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-navy text-navy-foreground border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-accent">Distinct Brand Equity</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-white">
                Great Brands Aren't Born — They Are Strategically Designed
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body-muted">
                As the leading branding agency in Boisar and premier branding agency Boisar businesses turn to, Vystar Media crafts bespoke brand strategy, distinctive visual identities, and professional logo design services Palghar & Mumbai that command premium value.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact?service=Branding">
                    Start Your Brand Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10">
                  <Link href="/about">About Our Agency</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-navy-950 p-6 md:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">What Our Brand Studio Crafts</h3>
              <ul className="space-y-3 text-sm text-body-muted">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Timeless Logo Marks:</strong> Versatile, vector designs that look stunning on mobile screens and billboards alike.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Unified Color & Type:</strong> Carefully calibrated color psychology and typographic hierarchies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Guidelines:</strong> A clear design manual keeping your team consistent across all media.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Print & Packaging Ready:</strong> Dielines and print-ready CMYK files ready for manufacturing.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-accent">Full Brand Spectrum</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-foreground">
              Strategic Branding Capabilities
            </h2>
            <p className="mt-3 text-sm text-body-muted">
              From market positioning and corporate naming to packaging and digital brand systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brandingCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-body-muted">{item.desc}</p>
                    <ul className="mt-4 space-y-2 border-t border-border/50 pt-4">
                      {item.points.map((pt, pIdx) => (
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
            <span className="text-xs uppercase font-bold tracking-widest text-accent">Branding FAQs</span>
            <h2 className="mt-2 text-3xl font-display font-bold text-foreground">
              Frequently Asked Questions About Branding
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
            <p className="text-xs text-body-muted mb-4">Explore Further:</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <Link href="/services" className="text-accent hover:underline">All Services</Link>
              <span className="text-border">•</span>
              <Link href="/about" className="text-accent hover:underline">About Our Agency</Link>
              <span className="text-border">•</span>
              <Link href="/process" className="text-accent hover:underline">Our Creative Process</Link>
              <span className="text-border">•</span>
              <Link href="/website-development" className="text-accent hover:underline">Web Design</Link>
              <span className="text-border">•</span>
              <Link href="/contact" className="text-accent hover:underline">Book Brand Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
