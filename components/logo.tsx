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
    sm: { height: 40, width: 200, maxH: 'h-10 md:h-12' },
    md: { height: 56, width: 280, maxH: 'h-14 md:h-16' },
    lg: { height: 72, width: 360, maxH: 'h-16 md:h-20 lg:h-24' },
    xl: { height: 96, width: 480, maxH: 'h-20 md:h-28 lg:h-32' },
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
