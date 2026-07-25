'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { services } from '@/lib/data';

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Every capability, detailed"
          subtitle="Explore the full breadth of what we deliver across digital, traditional, branding, creative and AI."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.blurb}</p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {s.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Discuss your project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
