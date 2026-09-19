'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

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
      <div className="absolute inset-0 navy-grid opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/40 to-background" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-blur-cyan absolute -right-1/4 top-0 h-96 w-96 animate-blur-drift rounded-full" />
        <div className="hero-blur-amber absolute -left-20 bottom-0 h-72 w-72 animate-blur-drift rounded-full [animation-delay:-4s]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-5 flex items-center justify-center gap-1.5 text-xs text-body-muted"
        >
          <Link href="/" className="transition-colors hover:text-highlight">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-highlight">{crumb}</span>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.05, ease }}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-highlight"
        >
          <span className="h-px w-8 bg-accent/50" />
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-4 font-display text-4xl font-bold leading-[1.15] tracking-tight text-balance sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body-muted sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
