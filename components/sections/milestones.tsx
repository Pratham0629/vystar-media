'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { milestones } from '@/lib/data';

export function Milestones() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Journey"
          title="From a 3-person team to a full-service agency"
        />
        <div className="relative mt-16 pl-8">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-accent/30 to-transparent" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-background">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-display text-sm font-bold text-accent">{m.year}</span>
              <h3 className="mt-1 font-display text-xl font-semibold">{m.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
