import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/sections/cta';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Globe, Smartphone, Search, Zap, ShoppingCart, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Website Development in Boisar & Mumbai | Vystar Media',
  description:
    'Build a fast, user-friendly business website or landing page with Vystar Media, based in Boisar and serving businesses in Mumbai and Palghar.',
  keywords: [
    'website development company Boisar',
    'business website development Boisar',
    'landing page design Mumbai',
    'website design Palghar',
    'e-commerce website Maharashtra',
    'web design company Boisar',
    'Next.js website development Mumbai',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/website-development',
  },
  openGraph: {
    title: 'Website Development in Boisar & Mumbai | Vystar Media',
    description:
      'Build a fast, user-friendly business website or landing page with Vystar Media, based in Boisar and serving businesses in Mumbai and Palghar.',
    url: 'https://vystarmedia.in/website-development',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Responsive website design; landing page development; website analytics setup',
      },
    ],
  },
};

const webCapabilities = [
  {
    icon: Globe,
    title: 'Corporate & Business Websites',
    desc: 'Modern, trustworthy digital storefronts for companies in Boisar, Tarapur Industrial Area, Palghar, and Mumbai.',
    points: ['Modern brand design', 'Service showcase architecture', 'Lead capture funnels', 'CMS integration for easy edits'],
  },
  {
    icon: Zap,
    title: 'High-Converting Paid Ad Landing Pages',
    desc: 'Blazing-fast single-purpose landing pages engineered for maximum conversion on Google Ads & Meta advertising traffic.',
    points: ['Sub-second page load speeds', 'Frictionless lead forms & WhatsApp click', 'A/B testing readiness', 'Trust badges & social proof layout'],
  },
  {
    icon: Smartphone,
    title: '100% Mobile-First Responsive UI/UX',
    desc: 'Flawless browsing experiences optimized for smartphone screens, tablets, laptops, and ultra-wide desktop monitors.',
    points: ['Fluid thumb-friendly navigation', 'Optimized mobile touch targets', 'Zero layout shifts (CLS)', 'Retina screen image rendering'],
  },
  {
    icon: Search,
    title: 'Built-In Technical SEO Foundations',
    desc: 'Clean semantic HTML, Open Graph tags, JSON-LD schema markup, XML sitemaps, and Core Web Vitals optimization built into the code.',
    points: ['Pre-rendered static HTML', 'Clean URL architecture', 'Instant Google indexing setup', 'Speed score of 90+ on mobile'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Digital Catalogs',
    desc: 'Custom online shops, product catalogs, and payment gateway integrations (Razorpay, Stripe, UPI) for scaling retail brands.',
    points: ['Inventory management systems', 'Instant UPI & card checkout', 'WhatsApp order notifications', 'Secure SSL & PCI compliance'],
  },
];

const faqs = [
  {
    q: 'How long does it take to design and launch a new business website?',
    a: 'A focused landing page takes 3 to 5 business days. A comprehensive multi-page corporate website or e-commerce store typically takes 2 to 3 weeks from kickoff to live deployment.',
  },
  {
    q: 'Will our website work fast on mobile phones with 4G/5G connections?',
    a: 'Yes! We build modern websites using Next.js, React, and Tailwind CSS with pre-rendered static delivery. Every image is optimized for low mobile data, ensuring sub-second load times on mobile devices.',
  },
  {
    q: 'Do you provide website maintenance and hosting support?',
    a: 'Yes. We offer turnkey hosting on global high-speed CDNs with free SSL certificates, automated daily backups, security monitoring, and ongoing content updates.',
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <PageHeader
        crumb="Website Development"
        eyebrow="Web & Digital Engineering"
        title="Websites and Landing Pages Built for Business Growth"
        subtitle="Fast, high-converting, and mobile-first websites designed by Vystar Media in Boisar for ambitious businesses in Mumbai, Palghar and Maharashtra."
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-navy text-navy-foreground border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-accent">High-Performance Digital Engineering</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-white">
                Your Website Is the 24/7 Sales Engine of Your Business
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body-muted">
                A slow or outdated website costs you customers every single day. At Vystar Media, we build modern websites that combine cutting-edge design, instant mobile speeds, and built-in technical SEO to turn visitors into paying clients.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact?service=Website+Development">
                    Get Free Website Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10">
                  <Link href="/process">Our Dev Process</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-navy-950 p-6 md:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Every Website Includes</h3>
              <ul className="space-y-3 text-sm text-body-muted">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Lightning Fast Performance:</strong> Sub-second page loads engineered on modern static web architectures.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Direct WhatsApp Integration:</strong> Pre-filled WhatsApp lead buttons so prospects can chat instantly.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Google SEO Built-in:</strong> Structured schema, OpenGraph tags, and sitemaps ready for search engine indexing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Zero Maintenance Headaches:</strong> Enterprise-grade security, free SSL, and 99.99% uptime CDN hosting.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-accent">Technical Excellence</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-foreground">
              Full-Stack Web Development Solutions
            </h2>
            <p className="mt-3 text-sm text-body-muted">
              Built with modern technology stacks that keep your business ahead of the competition.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webCapabilities.map((cap, idx) => {
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
            <span className="text-xs uppercase font-bold tracking-widest text-accent">Web Dev FAQs</span>
            <h2 className="mt-2 text-3xl font-display font-bold text-foreground">
              Frequently Asked Questions About Website Development
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
            <p className="text-xs text-body-muted mb-4">Explore More Growth Capabilities:</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <Link href="/services" className="text-accent hover:underline">All Services</Link>
              <span className="text-border">•</span>
              <Link href="/seo-services-mumbai" className="text-accent hover:underline">SEO Services</Link>
              <span className="text-border">•</span>
              <Link href="/google-meta-ads" className="text-accent hover:underline">Paid Ads Management</Link>
              <span className="text-border">•</span>
              <Link href="/pricing" className="text-accent hover:underline">Pricing Packages</Link>
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
