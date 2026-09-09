'use client';

import { motion } from 'framer-motion';
import { Target, Palette, Cpu, Quote, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import Image from 'next/image';

const visionPillars = [
  {
    icon: Target,
    title: 'The Strategic Growth Vision',
    subtitle: 'Connecting Creativity to Revenue',
    quote:
      'Marketing should never be treated as an expense — it must operate as a predictable revenue engine. Our core vision is to build data-backed, full-funnel strategies that turn brand awareness into compounding market share.',
    tag: 'Performance Strategy',
  },
  {
    icon: Palette,
    title: 'The Creative Excellence Vision',
    subtitle: 'Crafting Unforgettable Brand Identities',
    quote:
      'In a crowded digital world, design is your brand’s strongest competitive edge. We believe in crafting distinctive visual systems, high-retention video edits, and storytelling assets that demand respect and earn consumer trust.',
    tag: 'Brand Equity',
  },
  {
    icon: Cpu,
    title: 'The AI & Innovation Vision',
    subtitle: 'Scaling with Speed & Automation',
    quote:
      'The future of marketing belongs to AI-native teams. By embedding intelligent automation, real-time analytics, and instant lead response systems, we give partner brands unfair execution speed and operational leverage.',
    tag: 'Next-Gen Technology',
  },
];

export function FoundersVision() {
  return (
    <section className="relative py-24 md:py-32 bg-navy text-navy-foreground overflow-hidden">
      <div className="absolute inset-0 navy-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-background pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership Vision & Brand Philosophy"
          title="Driven by Purpose. Built for Dominance."
          subtitle="Our core philosophy shapes how we think, innovate, and partner with ambitious brands across industries."
        />

        {/* Featured Vision Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/15 via-white/5 to-transparent p-8 md:p-12 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                <Compass className="h-3.5 w-3.5" /> Core Founder's Thought & Vision
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl lg:text-4xl text-navy-foreground leading-tight">
                &ldquo;We don&apos;t just run campaigns — we build market-leading brands that endure.&rdquo;
              </h3>

              <p className="mt-4 text-base text-navy-foreground/80 leading-relaxed font-sans">
                At Vystar Media, our founding vision is grounded in a simple truth: businesses don&apos;t just need more ads; they need cohesive growth engines. By uniting performance digital marketing, traditional offline advertising, world-class video production, and AI automation under one roof, we eliminate agency friction and accelerate long-term brand equity.
              </p>
            </div>

            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-3xl bg-white/10 border border-white/20 p-4 shadow-xl">
              <Image
                src="/images/vystar-emblem-light.png"
                alt="Vystar Media Emblem"
                width={96}
                height={96}
                className="h-20 w-20 object-contain drop-shadow"
              />
            </div>
          </div>
        </motion.div>

        {/* 3 Vision Pillars Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {visionPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent border border-accent/30">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-foreground/70">
                      {pillar.tag}
                    </span>
                  </div>

                  <h4 className="mt-6 font-display text-xl font-bold text-navy-foreground">
                    {pillar.title}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-accent uppercase tracking-wider">
                    {pillar.subtitle}
                  </p>

                  <div className="mt-4 flex gap-2">
                    <Quote className="h-5 w-5 shrink-0 text-accent/50 rotate-180" />
                    <p className="text-xs text-navy-foreground/80 leading-relaxed italic">
                      {pillar.quote}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/10 text-xs font-medium text-navy-foreground/60">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Vystar Media Core Directive</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
