'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import { plans } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Pricing() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with your ambition"
          subtitle="Custom-quoted for your goals. No hidden fees, no surprises."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                'relative flex flex-col rounded-3xl border p-7',
                p.highlight
                  ? 'border-accent/50 bg-card shadow-2xl shadow-accent/10 lg:-translate-y-4'
                  : 'border-border bg-card'
              )}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                  <Crown className="h-3.5 w-3.5" /> Most Popular
                </span>
              )}
              <div className="flex items-center gap-2">
                {p.highlight ? (
                  <Sparkles className="h-5 w-5 text-accent" />
                ) : null}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>

              <div className="mt-6">
                <p className="font-display text-2xl font-semibold text-accent">
                  Contact for Custom Quote
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Tailored to your scope, channels & goals.
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  'mt-8 w-full rounded-full',
                  p.highlight
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : ''
                )}
                variant={p.highlight ? 'default' : 'outline'}
              >
                <a href="/contact">Request a Quote</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
