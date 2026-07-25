'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { industries } from '@/lib/data';

export function Industries() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Deep expertise across 15+ sectors"
          subtitle="We speak your industry's language — from compliance to customer behavior."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <ind.icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-medium">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
