'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Layers, Workflow, Tag, HelpCircle, Mail } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';

const cards = [
  {
    href: '/about',
    icon: Users,
    title: 'About Us',
    desc: 'Where creativity, technology & strategy converge to expand brands beyond boundaries.',
  },
  {
    href: '/services',
    icon: Layers,
    title: 'Services',
    desc: 'A complete marketing engine — digital, traditional, branding, creative & AI solutions.',
  },
  {
    href: '/process',
    icon: Workflow,
    title: 'Our Process',
    desc: 'Eight deliberate steps that turn ambition into measurable growth.',
  },
  {
    href: '/pricing',
    icon: Tag,
    title: 'Pricing',
    desc: 'Plans that scale with your ambition. Custom-quoted for your goals.',
  },
  {
    href: '/faq',
    icon: HelpCircle,
    title: 'FAQ',
    desc: 'Answers to the most common questions before partnering with us.',
  },
  {
    href: '/contact',
    icon: Mail,
    title: 'Contact',
    desc: 'Book a free consultation. We\u2019ll respond within one business day.',
  },
];

export function HomeOverview() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Explore Vystar Media"
          title="Everything your brand needs to grow"
          subtitle="A full-service agency under one roof. Dive into any area to learn more."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={c.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.desc}</p>
                <span className="mt-4 text-sm font-medium text-accent">
                  Learn more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
