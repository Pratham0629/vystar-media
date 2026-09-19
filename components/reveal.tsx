'use client';

import { motion, useReducedMotion } from 'framer-motion';
import * as React from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  blur?: boolean;
  scale?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
  scale = 1,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduce ? 0 : y,
        scale: reduce ? 1 : scale,
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 20,
  scale = 0.98,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  scale?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={{ willChange: 'opacity, transform' }}
      variants={{
        hidden: {
          opacity: 0,
          y: reduce ? 0 : y,
          scale: reduce ? 1 : scale,
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
