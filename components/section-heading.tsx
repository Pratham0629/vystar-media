'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/reveal';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  light?: boolean;
}) {
  return (
    <Reveal className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-highlight">
          <span className="h-px w-8 bg-accent/50" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-4 font-display text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl md:text-[2.75rem]',
          light ? 'text-navy-foreground' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-body-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
