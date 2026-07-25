'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { values } from '@/lib/data';

export function Values() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Values"
          title="Principles that guide every engagement"
          subtitle="The non-negotiables that shape how we think, build and partner."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
            >
              <span className="font-display text-3xl font-bold text-accent/30">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
