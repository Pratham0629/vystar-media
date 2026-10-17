'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Share2, Target, Palette, Video, Globe, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const services = [
  {
    title: 'SEO Services in Boisar & Mumbai',
    href: '/seo-services-mumbai',
    icon: Search,
    category: 'Search Engine Optimization',
    desc: 'Technical SEO audits, keyword research, on-page optimization, and local SEO in Palghar & Boisar to rank #1 on Google.',
    ctaText: 'Explore SEO Services',
  },
  {
    title: 'Social Media Marketing Boisar',
    href: '/social-media-marketing',
    icon: Share2,
    category: 'Social Media & Growth',
    desc: 'Engaging Instagram reels, high-retention carousels, and content management tailored for Boisar, Palghar & Mumbai businesses.',
    ctaText: 'Explore Social Media Marketing',
  },
  {
    title: 'Google & Meta Ads Management',
    href: '/google-meta-ads',
    icon: Target,
    category: 'Paid Performance (PPC)',
    desc: 'Laser-focused Google Ads and Meta advertising funnels designed to drive measurable leads, sales, and high ROAS across Maharashtra.',
    ctaText: 'Explore Google & Meta Ads',
  },
  {
    title: 'Branding Agency in Boisar',
    href: '/branding-services',
    icon: Palette,
    category: 'Brand Strategy & Identity',
    desc: 'Distinctive logo design, brand positioning, and cohesive visual identities for growing businesses in Boisar & Palghar.',
    ctaText: 'Explore Branding Services',
  },
  {
    title: 'Video Production Company Boisar',
    href: '/video-production',
    icon: Video,
    category: 'Creative Video Studio',
    desc: 'High-quality vertical Instagram reels, commercial ads, and brand films filmed and edited in 1080p & 4K quality.',
    ctaText: 'Explore Video Production',
  },
  {
    title: 'Website Development Company Boisar',
    href: '/website-development',
    icon: Globe,
    category: 'Web Design & Tech',
    desc: 'Ultra-fast, mobile-friendly business websites and high-converting landing pages built with modern Next.js architecture.',
    ctaText: 'Explore Website Development',
  },
];

export function CoreServices() {
  return (
    <section className="bg-section-alt py-24 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialized Capabilities"
          title="Full-Stack Marketing Solutions Engineered for Growth"
          subtitle="Explore our dedicated marketing practices serving businesses in Boisar, Palghar, Mumbai, and across Maharashtra."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-accent border border-accent/20">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-highlight transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-body-muted">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:text-highlight transition-colors pt-4 border-t border-border/50">
                    <span>{item.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
