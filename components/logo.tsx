'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLightText?: boolean;
}

export function Logo({
  className,
  showText = true,
  size = 'lg',
  isLightText = true,
}: LogoProps) {
  const sizeMap = {
    sm: { imgSize: 32, badgeSize: 'h-8 w-8', textSize: 'text-lg' },
    md: { imgSize: 40, badgeSize: 'h-10 w-10', textSize: 'text-xl' },
    lg: { imgSize: 48, badgeSize: 'h-12 w-12 md:h-14 md:w-14', textSize: 'text-2xl md:text-3xl' },
    xl: { imgSize: 64, badgeSize: 'h-16 w-16 md:h-20 md:w-20', textSize: 'text-3xl md:text-4xl' },
  };

  const current = sizeMap[size];

  return (
    <div className={cn('inline-flex items-center gap-3 group', className)}>
      {/* High-Contrast Crisp Emblem Badge */}
      <div className={cn(
        'relative flex shrink-0 items-center justify-center rounded-full bg-white shadow-lg shadow-accent/20 ring-2 ring-accent/50 transition-all duration-300 group-hover:scale-105 group-hover:ring-accent',
        current.badgeSize
      )}>
        <Image
          src="/images/vystar-emblem.png"
          alt="Vystar Media Emblem"
          width={current.imgSize}
          height={current.imgSize}
          className="h-4/5 w-4/5 object-contain p-0.5"
          priority
        />
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <span className={cn(
          'font-display font-bold tracking-tight transition-colors',
          current.textSize,
          isLightText ? 'text-white' : 'text-navy-foreground'
        )}>
          vystar<span className="text-highlight">media.</span>
        </span>
      )}
    </div>
  );
}
