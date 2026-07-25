'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Newspaper,
  Palette,
  Bot,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import Link from 'next/link';

const solutionCategories = [
  {
    id: 'digital',
    title: 'Digital Marketing',
    icon: Search,
    badge: 'High ROAS',
    headline: 'High-Impact Performance Marketing Across All Channels',
    description:
      'Engineered to turn traffic into pipeline. From SEO domination to targeted PPC & Social Media ads, we build predictable growth engines.',
    points: [
      'Search Engine Optimization (SEO)',
      'Google & Meta Paid Advertising (PPC)',
      'Social Media Engine & Content Creation',
      'High-converting Landing Pages',
    ],
    stats: { main: '4.7x', label: 'Average ROAS Achieved' },
  },
  {
    id: 'traditional',
    title: 'Traditional Marketing',
    icon: Newspaper,
    badge: 'National Reach',
    headline: 'High-Visibility Offline Advertising & Outdoor Media',
    description:
      'Command offline attention and build undeniable brand trust at local, regional, and national scale.',
    points: [
      'Auto Rickshaw & Transit Branding',
      'Event & B2B Exhibition Marketing',
      'Brochures, Catalogues & Print Media',
      'Outdoor Hoardings & Billboard Blitz',
    ],
    stats: { main: '10M+', label: 'Monthly Outdoor Impressions' },
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    icon: Palette,
    badge: 'Iconic Design',
    headline: 'Distinct Brand Identities That Earn Market Equity',
    description:
      'We craft iconic logos, typography, visual systems, and packaging that make your brand memorable and premium.',
    points: [
      'Custom Logo & Identity System',
      'Brand Strategy & Positioning',
      'Packaging & Product Design',
      'Corporate Guidelines & Asset Library',
    ],
    stats: { main: '100%', label: 'Trademark Ready Design' },
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    icon: Bot,
    badge: 'AI-Powered',
    headline: 'Intelligent Workflows & Automated Lead Conversion',
    description:
      'Embed cutting-edge AI chatbots, automated lead routing, and CRM intelligence to double your operational speed.',
    points: [
      '24/7 AI Sales & Support Chatbots',
      'Automated Lead Nurturing Workflows',
      'CRM Integration & Predictive Analytics',
      'WhatsApp & Email Automation',
    ],
    stats: { main: '60%', label: 'Reduced Response Time' },
  },
];

export function SolutionsPreview() {
  const [activeTab, setActiveTab] = React.useState('digital');

  const activeSolution = solutionCategories.find((s) => s.id === activeTab)!;
  const ActiveIcon = activeSolution.icon;

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Designed to Scale Ambitious Brands"
          subtitle="Discover how our integrated capability matrix turns strategy into market domination."
        />

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {solutionCategories.map((cat) => {
            const Icon = cat.icon;
            const active = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                  active
                    ? 'border-accent bg-accent text-accent-foreground shadow-lg shadow-accent/20 scale-105'
                    : 'border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Card */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid gap-8 rounded-3xl border border-border bg-card p-6 md:p-10 lg:grid-cols-12 lg:items-center shadow-xl shadow-black/5"
            >
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  <Sparkles className="h-3.5 w-3.5" /> {activeSolution.badge}
                </span>

                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                  {activeSolution.headline}
                </h3>

                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {activeSolution.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {activeSolution.points.map((p) => (
                    <div key={p} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <Button
                    asChild
                    className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href="/services">
                      Explore Full Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Stats Badge Column */}
              <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-card to-background p-8 text-center lg:col-span-5 shadow-inner">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-lg shadow-accent/30">
                  <ActiveIcon className="h-8 w-8" />
                </div>

                <p className="mt-6 font-display text-5xl font-black text-foreground">
                  {activeSolution.stats.main}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-accent">
                  {activeSolution.stats.label}
                </p>

                <div className="mt-6 rounded-xl border border-border bg-background/60 p-4 text-xs text-muted-foreground">
                  ⚡ Fully customizable & tailored specifically for your business model.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
