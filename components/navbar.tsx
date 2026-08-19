'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { Logo } from '@/components/logo';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 24);
  });

  const isHome = pathname === '/';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          'transition-all duration-500',
          scrolled || !isHome
            ? 'glass border-b border-border/60 shadow-lg shadow-black/5'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-24">
          <Link href="/" className="group flex items-center gap-2.5">
            <Logo size="lg" isLightText={true} />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'text-accent'
                      : isHome && !scrolled
                        ? 'text-navy-foreground/70 hover:text-navy-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="hidden rounded-full bg-accent text-accent-foreground hover:bg-accent/90 md:inline-flex"
            >
              <Link href="/contact">
                Get Consultation
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] border-border bg-background/95 p-0"
              >
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex h-full flex-col">
                  <div className="flex items-center border-b border-border px-6 py-5">
                    <Logo size="sm" />
                  </div>
                  <div className="flex flex-col gap-1 px-4 py-6">
                    {navLinks.map((l) => (
                      <SheetClose asChild key={l.href}>
                        <Link
                          href={l.href}
                          className={cn(
                            'rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-accent/10 hover:text-foreground',
                            pathname === l.href ? 'text-accent' : 'text-muted-foreground'
                          )}
                        >
                          {l.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                  <div className="mt-auto p-6">
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        <Link href="/contact">Get Free Consultation</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
