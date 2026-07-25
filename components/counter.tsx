'use client';

import { useEffect, useRef, useState } from 'react';
import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

export function Counter({
  to,
  suffix = '',
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return spring.on('change', (v) => {
      setDisplay(formatNumber(v));
    });
  }, [spring]);

  if (reduce) {
    return (
      <span ref={ref}>
        {formatNumber(to)}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function formatNumber(n: number) {
  const rounded = Math.round(n);
  if (rounded >= 1_000_000) {
    return (rounded / 1_000_000).toFixed(rounded % 1_000_000 === 0 ? 0 : 1);
  }
  return rounded.toLocaleString();
}
