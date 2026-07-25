'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { portfolio } from '@/lib/data';
import { cn } from '@/lib/utils';

const spanClass: Record<string, string> = {
  tall: 'sm:row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
};

export function Portfolio() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Brands we've helped break through"
          subtitle="A glimpse of the identities, campaigns and experiences we've shipped across industries — each tied to a measurable result."
        />

        <div className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[280px]">
          {portfolio.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-border bg-card',
                spanClass[p.span]
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex rounded-full bg-accent/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">
                    {p.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-[10px] font-semibold text-white">
                    <TrendingUp className="h-2.5 w-2.5" />
                    {p.result}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-white/70 transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-1 max-h-0 overflow-hidden text-xs text-white/70 transition-all duration-500 group-hover:max-h-20">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
