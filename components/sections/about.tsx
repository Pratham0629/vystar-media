'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Building2,
  Target,
  Megaphone,
  Bot,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';

const pillars: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: TrendingUp, title: 'Business Growth', desc: 'Revenue engines engineered to compound quarter over quarter.' },
  { icon: Building2, title: 'Brand Building', desc: 'Identities and narratives that earn lasting market equity.' },
  { icon: Target, title: 'Performance Marketing', desc: 'Channel mix optimized to the metrics that move the P&L.' },
  { icon: Megaphone, title: 'Traditional Advertising', desc: 'Offline reach that builds credibility at national scale.' },
  { icon: Bot, title: 'AI-powered Marketing', desc: 'Automation and intelligence embedded where it creates leverage.' },
  { icon: BarChart3, title: 'Data-driven Decisions', desc: 'Every move validated by measurement, not opinion.' },
];

export function About() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-accent/30 shadow-lg shadow-accent/10 bg-accent/5">
                <Image
                  src="/images/vystar-emblem.png"
                  alt="Vystar Media Official Emblem"
                  width={128}
                  height={128}
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <div>
                <span className="font-display text-sm font-bold uppercase tracking-wider text-accent">
                  Official Brand
                </span>
                <h4 className="font-display text-xl font-bold">Vystar Media</h4>
              </div>
            </div>

            <SectionHeading
              eyebrow="About Vystar Media"
              title="Where creativity, technology & strategy converge"
              align="left"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base text-muted-foreground sm:text-lg">
                Vystar Media is a growth-focused marketing company that combines
                creativity, technology, and strategy to expand brands beyond
                boundaries. We partner with startups, SMEs, enterprises and
                government organizations to build brands that command attention
                and deliver measurable growth.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Strategy-first', 'Full-funnel', 'AI-native', 'Transparent reporting'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
