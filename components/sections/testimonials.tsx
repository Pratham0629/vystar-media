'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const count = testimonials.length;

  const go = React.useCallback(
    (d: number) => {
      setDir(d);
      setIndex((i) => (i + d + count) % count);
    },
    [count]
  );

  React.useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground md:py-32">
      <div className="absolute inset-0 navy-grid opacity-20" />
      <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title={<span className="text-navy-foreground">Trusted by leaders, loved by teams</span>}
        />

        <div className="relative mt-12 min-h-[260px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir > 0 ? -40 : 40 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote className="mx-auto h-10 w-10 text-accent/60" />
              <p className="mx-auto mt-6 max-w-3xl font-display text-xl font-medium leading-relaxed text-navy-foreground/90 sm:text-2xl md:text-[1.6rem]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40"
                />
                <div className="text-left">
                  <p className="font-semibold text-navy-foreground">{t.name}</p>
                  <p className="text-sm text-navy-foreground/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="rounded-full border border-white/15 text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-accent' : 'w-2 bg-white/25 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="rounded-full border border-white/15 text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
