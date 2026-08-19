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
  isLightText = false,
}: LogoProps) {
  const sizeMap = {
    sm: { height: 36, width: 180, maxH: 'h-9 md:h-10' },
    md: { height: 48, width: 240, maxH: 'h-11 md:h-14' },
    lg: { height: 60, width: 300, maxH: 'h-13 md:h-16' },
    xl: { height: 76, width: 380, maxH: 'h-16 md:h-20' },
  };

  const current = sizeMap[size];

  return (
    <div className={cn('inline-flex items-center group', className)}>
      <Image
        src={isLightText ? '/images/vystar-logo-light.png' : '/images/vystar-logo.png'}
        alt="Vystar Media Logo"
        width={current.width}
        height={current.height}
        className={cn('w-auto object-contain transition-transform duration-300 group-hover:scale-105', current.maxH)}
        priority
      />
    </div>
  );
}
