'use client';

import { Counter } from '@/components/counter';
import { Reveal } from '@/components/reveal';
import { stats } from '@/lib/data';
import { Target } from 'lucide-react';

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground md:py-24">
      <div className="absolute inset-0 navy-grid opacity-30" />
      <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
              <Target className="h-3.5 w-3.5" />
              Our Vision & Future Targets
            </span>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-navy-foreground/60 sm:text-base">
              These are the milestones we are building towards as we grow Vystar
              Media into a globally competitive agency.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-accent sm:text-5xl md:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-navy-foreground/60 sm:text-base">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
