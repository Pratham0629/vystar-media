'use client';

import { Counter } from '@/components/counter';
import { Reveal, Stagger, StaggerItem } from '@/components/reveal';
import { stats } from '@/lib/data';
import { Target } from 'lucide-react';

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground md:py-28">
      <div className="absolute inset-0 navy-grid opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-highlight backdrop-blur-sm">
              <Target className="h-3.5 w-3.5" />
              Our Vision & Future Targets
            </span>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-body-muted sm:text-base">
              These are the milestones we are building towards as we grow Vystar
              Media into a globally competitive agency.
            </p>
          </div>
        </Reveal>
        <Stagger className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="text-center">
                <p className="font-display text-4xl font-bold leading-none text-highlight sm:text-5xl md:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-body-muted sm:text-base">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
