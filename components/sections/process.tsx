'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { process } from '@/lib/data';

export function Process() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A proven path from idea to impact"
          subtitle="Eight deliberate steps that turn ambition into measurable growth — each with a clear deliverable and timeline."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-card font-display text-lg font-bold text-accent shadow-sm transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  {p.step}
                </div>
                <span className="mb-2 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                  {p.duration}
                </span>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
