'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Services() {
  const [active, setActive] = React.useState(services[0].id);
  const current = services.find((s) => s.id === active)!;

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="A complete marketing engine, under one roof"
          subtitle="From search to screen, from strategy to scale — every capability your brand needs to grow."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Category list */}
          <div className="flex flex-col gap-2">
            {services.map((s, i) => {
              const isActive = s.id === active;
              return (
                <motion.button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={cn(
                    'group flex items-center justify-between rounded-2xl border p-5 text-left transition-all',
                    isActive
                      ? 'border-accent/40 bg-card shadow-lg shadow-accent/5'
                      : 'border-border bg-card/50 hover:border-accent/30 hover:bg-card'
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-xl transition-colors',
                        isActive
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-accent/10 text-accent'
                      )}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                      <p className="mt-0.5 hidden text-sm text-muted-foreground sm:block">
                        {s.blurb}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={cn(
                      'h-5 w-5 shrink-0 transition-transform',
                      isActive ? 'text-accent' : 'text-muted-foreground/40 group-hover:translate-x-0.5'
                    )}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Active panel */}
          <div className="relative min-h-[420px] rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <current.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">
                    {current.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-xl text-muted-foreground">{current.blurb}</p>

                <div className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {current.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-center gap-2.5 text-sm"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
