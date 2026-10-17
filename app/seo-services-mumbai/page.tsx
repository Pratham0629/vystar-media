import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/sections/cta';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Search, FileText, Settings, MapPin, BarChart3, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO Services in Boisar & Mumbai | Vystar Media Agency',
  description:
    'Improve organic visibility with technical SEO, keyword research, on-page optimization and reporting from Vystar Media, serving Boisar, Palghar and Mumbai.',
  keywords: [
    'SEO services in Boisar',
    'SEO company in Boisar',
    'local SEO services in Palghar',
    'SEO services in Palghar',
    'SEO company Boisar',
    'local SEO services Palghar',
    'SEO agency Mumbai',
    'technical SEO audit Maharashtra',
    'search engine optimization Boisar',
    'Google ranking agency Boisar',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/seo-services-mumbai',
  },
  openGraph: {
    title: 'SEO Services in Boisar & Mumbai | Vystar Media',
    description:
      'Improve organic visibility with technical SEO, keyword research, on-page optimization and reporting from Vystar Media, serving Boisar, Palghar and Mumbai.',
    url: 'https://vystarmedia.in/seo-services-mumbai',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO audit and keyword research; on-page SEO optimization; organic search performance report',
      },
    ],
  },
};

const seoPillars = [
  {
    icon: Search,
    title: 'SEO Audit & Keyword Research',
    desc: 'Uncover high-intent commercial keywords that customers in Boisar, Palghar and Mumbai use to find your exact services.',
    points: ['Competitor gap analysis', 'Search volume & difficulty mapping', 'Local intent identification', 'Quick-win opportunity roadmap'],
  },
  {
    icon: Settings,
    title: 'Technical SEO Optimization',
    desc: 'Eliminate crawl errors, speed bottlenecks, indexing issues, and schema markup flaws to make Google love your site.',
    points: ['Core Web Vitals acceleration', 'Mobile responsiveness audit', 'Schema & structured data', 'XML sitemap & robots.txt tuning'],
  },
  {
    icon: FileText,
    title: 'On-Page SEO & Content Strategy',
    desc: 'Optimize meta titles, headers, keyword distribution, and craft search-intent content that converts visitors into leads.',
    points: ['Title tag & meta optimization', 'Header architecture (H1-H4)', 'Internal linking framework', 'Conversion-focused copywriting'],
  },
  {
    icon: MapPin,
    title: 'Local SEO for Boisar & Palghar',
    desc: 'Dominate Google Maps local 3-pack search results for businesses in Boisar, Palghar, Tarapur and Mumbai.',
    points: ['Google Business Profile setup', 'Local NAP citation building', 'Customer review strategies', 'Geo-targeted landing pages'],
  },
  {
    icon: BarChart3,
    title: 'Transparent Monthly Reporting',
    desc: 'Live keyword rank tracking, organic traffic analytics, and lead attribution dashboards updated weekly.',
    points: ['Google Search Console insights', 'Keyword position tracking', 'Organic lead conversions', 'Actionable monthly review calls'],
  },
];

const faqs = [
  {
    q: 'How long does it take to see results from SEO in Boisar & Mumbai?',
    a: 'Most local and technical SEO campaigns begin showing measurable ranking improvements and organic impressions within 60 to 90 days. Significant revenue-generating organic leads typically compound between months 3 and 6.',
  },
  {
    q: 'Do you specialize in local SEO for Boisar and Palghar businesses?',
    a: 'Yes. As a Boisar-based marketing agency, we specialize in hyper-local Google Business Profile optimization, local citations, and geo-targeted keywords that bring footfall and inquiries from Boisar, Tarapur, Palghar, and Mumbai.',
  },
  {
    q: 'What is included in a Vystar Media SEO Audit?',
    a: 'Our SEO audit analyzes 100+ technical health checkpoints including crawlability, mobile Core Web Vitals, backlink profile quality, on-page content alignment, and a prioritized keyword roadmap.',
  },
];

export default function SeoServicesPage() {
  return (
    <>
      <PageHeader
        crumb="SEO Services"
        eyebrow="Search Engine Optimization"
        title="SEO Services to Improve Search Visibility and Qualified Traffic"
        subtitle="Rank higher on Google, capture ready-to-buy search intent, and drive consistent organic inquiries across Boisar, Palghar, Mumbai and Maharashtra."
      />

      {/* Overview & Value Proposition */}
      <section className="py-16 md:py-24 bg-navy text-navy-foreground border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-accent">Organic Search Leadership</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-white">
                Turn Google Search into Your Most Reliable Customer Acquisition Engine
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body-muted">
                As the leading SEO company in Boisar, Vystar Media provides cutting-edge SEO services in Boisar, professional SEO services in Palghar, and local SEO services in Palghar & Mumbai to dominate page 1 search results.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-white">
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/10">
                  <Check className="h-4 w-4 text-accent" /> Guaranteed White-Hat SEO
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/10">
                  <Check className="h-4 w-4 text-accent" /> Local Boisar & Mumbai Expertise
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/10">
                  <Check className="h-4 w-4 text-accent" /> 100% Transparent Reporting
                </span>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact?service=SEO">
                    Request Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10">
                  <Link href="/pricing">View SEO Pricing</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-navy-950 p-6 md:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Core SEO Capabilities</h3>
              <div className="space-y-4">
                {seoPillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="flex gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{p.title}</h4>
                        <p className="mt-1 text-xs text-body-muted">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Methodology Grid */}
      <section className="py-20 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-accent">Comprehensive Framework</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-foreground">
              Our 5-Pillar SEO Growth Architecture
            </h2>
            <p className="mt-3 text-sm text-body-muted">
              Every step engineered to systematically capture commercial search demand across Maharashtra.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {seoPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-body-muted">{pillar.desc}</p>
                    <ul className="mt-4 space-y-2 border-t border-border/50 pt-4">
                      {pillar.points.map((pt, pIdx) => (
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

      {/* SEO FAQs */}
      <section className="py-20 bg-background border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-accent">Got Questions?</span>
            <h2 className="mt-2 text-3xl font-display font-bold text-foreground">
              Frequently Asked Questions About SEO
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

          {/* Internal links navigation footer */}
          <div className="mt-12 p-6 rounded-2xl bg-card border border-border text-center">
            <p className="text-xs text-body-muted mb-4">Explore Related Services & Growth Resources:</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <Link href="/services" className="text-accent hover:underline">All Services</Link>
              <span className="text-border">•</span>
              <Link href="/process" className="text-accent hover:underline">Our Strategy Process</Link>
              <span className="text-border">•</span>
              <Link href="/pricing" className="text-accent hover:underline">Marketing Packages</Link>
              <span className="text-border">•</span>
              <Link href="/google-meta-ads" className="text-accent hover:underline">Paid Ads (Google & Meta)</Link>
              <span className="text-border">•</span>
              <Link href="/contact" className="text-accent hover:underline">Book Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
