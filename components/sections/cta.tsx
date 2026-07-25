'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-navy px-6 py-14 text-center text-navy-foreground md:px-12 md:py-20">
            <div className="absolute inset-0 navy-grid opacity-30" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                Ready to expand your brand
                <span className="gradient-text"> beyond boundaries?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-navy-foreground/70 sm:text-lg">
                Get a free, no-obligation consultation with our strategy team.
                We&apos;ll map your goals and recommend a tailored plan.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 flex justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
