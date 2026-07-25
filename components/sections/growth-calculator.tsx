'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Target,
  Zap,
  DollarSign,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  PieChart,
  BarChart3,
  Bot,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import Link from 'next/link';

export function GrowthCalculator() {
  const [budget, setBudget] = React.useState<number>(100000);
  const [goal, setGoal] = React.useState<'leads' | 'ecommerce' | 'branding' | 'ai'>('leads');

  const goals = [
    { id: 'leads', label: 'Lead Generation', icon: Target, multiplier: 1.4, roas: '4.2x' },
    { id: 'ecommerce', label: 'E-commerce Sales', icon: TrendingUp, multiplier: 1.6, roas: '4.8x' },
    { id: 'branding', label: 'Brand Awareness', icon: Sparkles, multiplier: 2.2, roas: '3.5x' },
    { id: 'ai', label: 'AI & Automation', icon: Bot, multiplier: 1.8, roas: '5.2x' },
  ];

  const currentGoal = goals.find((g) => g.id === goal)!;

  // Calculate dynamic stats
  const estimatedReach = Math.round((budget / 10) * currentGoal.multiplier);
  const estimatedLeads = Math.round((budget / 450) * (currentGoal.id === 'leads' ? 1.5 : 1));
  const estimatedROAS = currentGoal.roas;

  return (
    <section className="relative overflow-hidden bg-navy/95 py-24 text-navy-foreground md:py-32">
      <div className="absolute inset-0 navy-grid opacity-30" />
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive ROI Estimator"
          title="Estimate Your Brand Growth Potential"
          subtitle="Select your primary objective and monthly marketing budget to simulate potential reach and return."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Controls Column */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8 lg:col-span-6">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold">
              <Zap className="h-5 w-5 text-accent" />
              1. Select Your Objective
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {goals.map((g) => {
                const Icon = g.icon;
                const active = goal === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id as any)}
                    className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                      active
                        ? 'border-accent bg-accent/15 text-white shadow-lg shadow-accent/20'
                        : 'border-white/10 bg-white/5 text-navy-foreground/70 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${active ? 'text-accent' : 'text-navy-foreground/60'}`} />
                    <span className="mt-2 text-sm font-semibold">{g.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  2. Monthly Budget
                </h3>
                <span className="rounded-full bg-accent/20 px-3 py-1 font-display text-lg font-bold text-accent">
                  ₹{budget.toLocaleString('en-IN')} / mo
                </span>
              </div>

              <input
                type="range"
                min={25000}
                max={1000000}
                step={25000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="mt-6 h-3 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-accent"
              />

              <div className="mt-2 flex justify-between text-xs text-navy-foreground/50 font-medium">
                <span>₹25,000</span>
                <span>₹5,000,000</span>
                <span>₹10,00,000+</span>
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-white/5 to-transparent p-6 backdrop-blur-xl md:p-8 lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Project Growth Simulation
            </span>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-navy/60 p-5">
                <p className="text-xs text-navy-foreground/60 font-medium">Estimated Reach</p>
                <p className="mt-2 font-display text-3xl font-bold tracking-tight text-accent">
                  {estimatedReach > 1000000
                    ? `${(estimatedReach / 1000000).toFixed(1)}M+`
                    : `${(estimatedReach / 1000).toFixed(0)}K+`}
                </p>
                <p className="mt-1 text-[11px] text-navy-foreground/40">Targeted impressions</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-navy/60 p-5">
                <p className="text-xs text-navy-foreground/60 font-medium">Target ROAS</p>
                <p className="mt-2 font-display text-3xl font-bold tracking-tight text-emerald-400">
                  {estimatedROAS}
                </p>
                <p className="mt-1 text-[11px] text-navy-foreground/40">Estimated Return</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-navy/60 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-navy-foreground/60 font-medium">Potential Monthly Leads / Conversions</p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">
                    ~{estimatedLeads.toLocaleString('en-IN')} Qualified Prospects
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
              <p className="text-xs text-navy-foreground/60">
                Want a custom audit tailored specifically to your brand?
              </p>
              <Button
                asChild
                className="w-full sm:w-auto shrink-0 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact">
                  Get Full Strategy <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
