'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, BarChart3, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pt-32 pb-20 text-navy-foreground md:pt-44 md:pb-28"
    >
      <div className="absolute inset-0 navy-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/40 to-background" />
      <GlowOrbs />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 p-1.5 pr-5 text-xs font-medium text-accent backdrop-blur transition-all hover:border-accent/50 hover:bg-accent/15"
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-lg shadow-accent/30 ring-2 ring-accent/60">
            <Image
              src="/images/vystar-emblem.png"
              alt="Vystar Media Emblem"
              width={64}
              height={64}
              className="h-7.5 w-7.5 object-contain"
              priority
            />
          </div>
          <span className="flex items-center gap-1.5 font-medium text-navy-foreground/90">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Full-Service Marketing & Branding Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          We Don&apos;t Just Market Brands.
          <br />
          <span className="gradient-text">We Build Them.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-navy-foreground/70 sm:text-lg"
        >
          Helping businesses grow through powerful Digital Marketing,
          Traditional Marketing, Branding, Creative Design, AI Automation,
          and Business Strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-navy-foreground/50"
        >
          <span className="inline-flex items-center gap-1.5"><TrendingUp className="h-3.5 w-3.5 text-accent" /> 10M+ Reach Target</span>
          <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-accent" /> 100+ Client Goal</span>
          <span className="inline-flex items-center gap-1.5"><BarChart3 className="h-3.5 w-3.5 text-accent" /> 95% Satisfaction Goal</span>
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
}

function GlowOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="absolute right-10 top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-float [animation-delay:2s]" />
    </div>
  );
}

function Marquee() {
  const items = [
    'Digital Marketing', 'Branding', 'SEO', 'AI Automation', 'Outdoor Ads',
    'Creative Studio', 'PPC', 'Social Media', 'Packaging', 'Business Strategy',
  ];
  return (
    <div className="relative mt-20 overflow-hidden border-y border-white/10 py-5 mask-fade-b">
      <div className="flex w-max animate-marquee gap-12">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-navy-foreground/40"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
