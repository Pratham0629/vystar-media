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
    sm: { height: 26, width: 140 },
    md: { height: 34, width: 180 },
    lg: { height: 42, width: 220 },
    xl: { height: 54, width: 280 },
  };

  const current = sizeMap[size];

  return (
    <div className={cn('inline-flex items-center group', className)}>
      <Image
        src={isLightText ? '/images/vystar-logo-light.png' : '/images/vystar-logo.png'}
        alt="Vystar Media Logo"
        width={current.width}
        height={current.height}
        className="h-auto w-auto max-h-12 object-contain transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </div>
  );
}
