'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { MagneticButton } from '@/components/magnetic-btn';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pt-32 pb-20 text-navy-foreground md:pt-44 md:pb-28"
    >
      <HeroBackground />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease }}
          className="mb-8 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur-sm"
        >
          <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10">
            <Image
              src="/images/vystar-emblem.png"
              alt="Vystar Media Emblem"
              width={48}
              height={48}
              className="h-5 w-5 object-contain"
              priority
            />
          </div>
          <span className="text-body-muted">The Marketing Infrastructure for Growth</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          The Marketing System for{' '}
          <span className="text-gradient-multi">Ambitious Brands</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-body-muted sm:text-lg"
        >
          We build and run the marketing machine that earns attention. From production to distribution, across every platform you need to win.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3"
        >
          <MagneticButton
            asChild
            className="rounded-lg bg-accent px-8 py-6 text-base font-medium text-accent-foreground shadow-none hover:bg-accent/90 transition-all duration-300 glow-hover"
          >
            <Link href="/contact" className="inline-flex items-center">
              Apply to Work With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-body-muted"
        >
          <span className="inline-flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-highlight" /> 10M+ Reach Target
          </span>
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4 text-highlight" /> 100+ Client Goal
          </span>
          <span className="inline-flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-highlight" /> 95% Satisfaction Goal
          </span>
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
}

function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className="absolute inset-0">
      <div className="absolute inset-0 navy-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-background" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1, scale }}
          className="hero-blur-cyan absolute -right-1/4 top-0 h-[70vh] w-[55vw] animate-blur-drift rounded-full morph-shape"
        />
        <motion.div
          style={{ y: y2, scale }}
          className="hero-blur-amber absolute -left-1/4 bottom-0 h-[50vh] w-[45vw] animate-blur-drift rounded-full morph-shape [animation-delay:-6s]"
        />
        <motion.div
          style={{ y: y3, scale }}
          className="hero-blur-green absolute -right-1/3 bottom-1/4 h-[40vh] w-[35vw] animate-blur-drift rounded-full morph-shape [animation-delay:-3s]"
        />
        <motion.div
          style={{ y: y4, scale }}
          className="hero-blur-purple absolute -left-1/3 top-1/4 h-[40vh] w-[35vw] animate-blur-drift rounded-full morph-shape [animation-delay:-9s]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/2 h-[40vh] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        />
      </div>
    </div>
  );
}

function Marquee() {
  const items = [
    'Digital Marketing', 'SEO', 'Social Media', 'PPC', 'Branding',
    'Content Strategy', 'AI Automation', 'Performance Marketing', 'Creative Design', 'Business Growth',
  ];
  return (
    <div className="relative mt-20 overflow-hidden border-y border-white/8 py-5">
      <div className="flex w-max animate-marquee gap-12">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-body-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
