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
  size = 'md',
  isLightText = false,
}: LogoProps) {
  const sizeMap = {
    sm: { box: 'h-8 w-8', text: 'text-base' },
    md: { box: 'h-10 w-10', text: 'text-lg md:text-xl' },
    lg: { box: 'h-12 w-12', text: 'text-2xl' },
    xl: { box: 'h-16 w-16', text: 'text-3xl' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      <div
        className={cn(
          'relative shrink-0 rounded-full overflow-hidden shadow-md shadow-amber-500/10 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105',
          currentSize.box
        )}
      >
        <Image
          src="/images/vystar-logo.png"
          alt="Vystar Media Logo"
          width={120}
          height={120}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      {showText && (
        <span
          className={cn(
            'font-display font-bold tracking-tight transition-colors',
            currentSize.text,
            isLightText ? 'text-navy-foreground' : 'text-foreground'
          )}
        >
          Vystar<span className="text-accent"> Media</span>
        </span>
      )}
    </div>
  );
}
