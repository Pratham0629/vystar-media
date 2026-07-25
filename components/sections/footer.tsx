'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/logo';
import { services, industries } from '@/lib/data';

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '/contact' },
];

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail('');
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 navy-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Ready to expand your brand?
            </h3>
            <p className="mt-2 text-navy-foreground/60">
              Get a free, no-obligation consultation with our strategy team.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="group flex items-center gap-2.5">
              <Logo isLightText />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-navy-foreground/60">
              Expanding Brands Beyond Boundaries. A full-service marketing &
              branding agency for ambitious organizations.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-navy-foreground/70 transition-colors hover:border-accent/50 hover:bg-accent hover:text-accent-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-navy-foreground/60 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
              Industries
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {industries.slice(0, 8).map((i) => (
                <li key={i.name}>
                  <Link
                    href="/services"
                    className="text-navy-foreground/60 transition-colors hover:text-accent"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-navy-foreground/60 transition-colors hover:text-accent"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            <form onSubmit={subscribe} className="mt-6">
              <p className="text-sm font-medium text-navy-foreground/80">
                Subscribe to our newsletter
              </p>
              <div className="mt-3 flex gap-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="border-white/10 bg-white/5 text-navy-foreground placeholder:text-navy-foreground/40"
                />
                <Button
                  type="submit"
                  size="icon"
                  aria-label="Subscribe"
                  className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              {done && (
                <p className="mt-2 text-xs text-emerald-400">Subscribed! Thank you.</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-navy-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} Vystar Media. All rights reserved.</p>
          <div className="flex gap-5">
            {legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
