'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Video,
  Rocket,
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
  Layers,
  Repeat,
  Share2,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';

const engagementTiers = [
  {
    id: 'tier-1',
    name: 'Post-Production Engine',
    eyebrow: 'You Record. We Produce.',
    tagline: 'You bring the raw footage. We transform it into platform-ready, high-converting content.',
    icon: Video,
    popular: false,
    color: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-blue-500/30 hover:border-blue-500/60',
    accentColor: 'text-blue-400',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    features: [
      'Starting at 20+ Short-Form Videos / month',
      '5 High-Impact Carousels / month',
      'Custom brand typography & motion editing',
      'High-CTR Thumbnails & Hook Captions',
      'Platform-native optimization (Reels, Shorts, TikTok)',
      'Dedicated Editor & Project Manager',
      'Bi-weekly strategy check-ins',
    ],
    cta: 'Select Post-Production',
    href: '/contact?service=Post-Production',
  },
  {
    id: 'tier-2',
    name: 'Full Growth OS',
    eyebrow: 'Your Entire Content Department',
    tagline: 'You show up to record. We handle strategy, scripting, creative direction, editing, and distribution.',
    icon: Rocket,
    popular: true,
    color: 'from-amber-500/20 via-yellow-500/10 to-accent/20',
    borderColor: 'border-accent/50 hover:border-accent',
    accentColor: 'text-accent',
    badgeBg: 'bg-accent/20 text-accent border-accent/40',
    features: [
      'Everything in Post-Production Engine',
      'Full Content Strategy & Topic Research',
      'Scriptwriting & Hook Architecture',
      'Remote Shoot Direction & Framing Support',
      'Multi-Platform Automated Distribution',
      'YouTube Long-Form + Short-Form Ecosystem',
      'Monthly ROI & Growth Performance Reports',
      'Priority 24/7 Slack / WhatsApp Channel',
    ],
    cta: 'Apply For Growth OS',
    href: '/contact?service=Growth-OS',
  },
  {
    id: 'tier-3',
    name: 'Enterprise Scale',
    eyebrow: 'High-Volume Production',
    tagline: 'Custom production infrastructure engineered for funded startups, brands & high-volume media houses.',
    icon: Building2,
    popular: false,
    color: 'from-purple-500/20 to-indigo-500/10',
    borderColor: 'border-purple-500/30 hover:border-purple-500/60',
    accentColor: 'text-purple-400',
    badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    features: [
      'Everything in Full Growth OS',
      'Up to 100+ Curated Videos & Clips per month',
      'Dedicated Clipping Team & Multi-Editor Pod',
      'B2B Brand Films & Product Launch Videos',
      'Podcast & Show Full Editing & Repurposing',
      'Dedicated Account Director & Lead Strategist',
      'Custom SLA & Turnaround Guarantees',
    ],
    cta: 'Book Enterprise Call',
    href: '/contact?service=Enterprise',
  },
];

const flywheelSteps = [
  { icon: Zap, title: '1. Strategy & Hooks', desc: 'Niche topic research & viral hook scripts' },
  { icon: Video, title: '2. Guided Shooting', desc: 'Framing, lighting & remote shoot direction' },
  { icon: Layers, title: '3. World-Class Editing', desc: 'Motion graphics, sound design & pacing' },
  { icon: Share2, title: '4. Multi-Platform Push', desc: 'Publishing across YouTube, Insta, LinkedIn' },
  { icon: TrendingUp, title: '5. Inbound Client Growth', desc: 'Turning views into loyal paying clients' },
];

export function EngagementProcess() {
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flywheelSteps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-background">
      {/* Background glow mesh */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.12),rgba(255,255,255,0))]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Three Ways To Partner"
          title="Engineered for brands that demand authority"
          subtitle="Every engagement is tailored to your brand goals. We build and operate the machine that commands industry attention."
        />

        {/* 3 Tier Pricing / Engagement Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {engagementTiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col justify-between rounded-3xl border bg-card p-8 transition-all shadow-xl ${
                  tier.borderColor
                } ${tier.popular ? 'shadow-accent/10 border-accent/60 ring-1 ring-accent/40' : ''}`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-accent/60 bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-lg flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 fill-current" /> Most Popular Engine
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${tier.badgeBg}`}>
                      <Icon className="h-3.5 w-3.5" /> {tier.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {tier.tagline}
                  </p>

                  <div className="my-6 h-px w-full bg-border/60" />

                  {/* Feature List */}
                  <ul className="space-y-3">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${tier.accentColor}`} />
                        <span className="text-foreground/90">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className={`w-full rounded-full ${
                      tier.popular
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    <a href={tier.href}>
                      {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Content Flywheel Interactive Micro-Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 rounded-3xl border border-border bg-card/60 p-8 md:p-12 backdrop-blur-xl shadow-2xl"
        >
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-1 text-xs font-semibold text-accent">
              <Repeat className="h-3.5 w-3.5 animate-spin-slow" /> High-Level Content Flywheel
            </span>
            <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold">
              How Our Content Machine Converts Views Into Clients
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We build repeatable content systems that compound attention and authority month over month.
            </p>
          </div>

          {/* Interactive Steps Bar */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {flywheelSteps.map((s, index) => {
              const StepIcon = s.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all ${
                    isActive
                      ? 'border-accent bg-accent/10 shadow-lg shadow-accent/10 ring-1 ring-accent/30 scale-105'
                      : 'border-border bg-background/50 hover:border-accent/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold ${
                        isActive
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      <StepIcon className="h-5 w-5" />
                    </span>
                    {isActive && (
                      <span className="flex h-2.5 w-2.5 rounded-full bg-accent animate-ping" />
                    )}
                  </div>
                  <h4 className="mt-4 font-semibold text-sm">{s.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
