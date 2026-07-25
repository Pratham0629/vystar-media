'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-16 text-navy-foreground md:pt-40 md:pb-20">
      <div className="absolute inset-0 navy-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/30 to-background" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center justify-center gap-1.5 text-xs text-navy-foreground/50"
        >
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-accent">{crumb}</span>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
        >
          <span className="h-px w-6 bg-accent/50" />
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base text-navy-foreground/70 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
