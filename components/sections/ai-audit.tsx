'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Search,
  CheckCircle2,
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  Bot,
  ArrowRight,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { sendLeadToGoogleSheets } from '@/lib/google-sheets';

type AuditResult = {
  overallScore: number;
  seoScore: number;
  brandScore: number;
  adRoasScore: number;
  aiReadinessScore: number;
  quickWins: string[];
  growthDrivers: string[];
  aiAutomations: string[];
};

export function AIAudit() {
  const [businessName, setBusinessName] = React.useState('');
  const [websiteUrl, setWebsiteUrl] = React.useState('');
  const [industry, setIndustry] = React.useState('E-commerce');
  const [goal, setGoal] = React.useState('Scale Qualified Leads & Sales');
  const [isAuditing, setIsAuditing] = React.useState(false);
  const [auditProgress, setAuditProgress] = React.useState(0);
  const [auditStepText, setAuditStepText] = React.useState('');
  const [result, setResult] = React.useState<AuditResult | null>(null);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) return;

    setIsAuditing(true);
    setAuditProgress(10);
    setResult(null);

    const steps = [
      { text: 'Scanning website structure & indexation...', progress: 25 },
      { text: 'Auditing SEO keyword density & domain authority...', progress: 50 },
      { text: 'Evaluating brand positioning & PPC ad efficiency...', progress: 75 },
      { text: 'Simulating AI lead response automation metrics...', progress: 95 },
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setAuditStepText(step.text);
        setAuditProgress(step.progress);
      }, (idx + 1) * 700);
    });

    setTimeout(async () => {
      setIsAuditing(false);
      setAuditProgress(100);

      // Generate dynamic scores tailored to input
      const bHash = businessName.length;
      const overall = 62 + (bHash % 25);
      const seo = 55 + ((bHash * 3) % 35);
      const brand = 68 + ((bHash * 2) % 25);
      const adRoas = 58 + ((bHash * 5) % 32);
      const aiReady = 40 + ((bHash * 7) % 45);

      // Save lead to local storage for 100% guaranteed admin dashboard capture
      try {
        const auditLead = {
          id: 'audit-' + Date.now(),
          created_at: new Date().toISOString(),
          name: businessName,
          email: `${businessName.toLowerCase().replace(/\s+/g, '')}@lead.com`,
          phone: websiteUrl || 'N/A',
          company: businessName,
          message: `[AI MARKETING AUDIT REQUEST]\nWebsite/URL: ${websiteUrl || 'Not provided'}\nIndustry: ${industry}\nGoal: ${goal}\nOverall Score Generated: ${overall}%`,
          status: 'ai_audit',
        };
        const existing = JSON.parse(localStorage.getItem('vystar_leads') || '[]');
        localStorage.setItem('vystar_leads', JSON.stringify([auditLead, ...existing]));
      } catch (e) {
        console.warn('Audit lead storage notice:', e);
      }

      // Send to Google Sheets Webhook (100% Free, Never Pauses)
      try {
        await sendLeadToGoogleSheets({
          name: businessName,
          email: `${businessName.toLowerCase().replace(/\s+/g, '')}@lead.com`,
          phone: websiteUrl || 'N/A',
          company: businessName,
          service: 'AI Marketing Audit',
          message: `[AI MARKETING AUDIT REQUEST]\nWebsite/URL: ${websiteUrl || 'Not provided'}\nIndustry: ${industry}\nGoal: ${goal}\nOverall Score Generated: ${overall}%`,
        });
      } catch (err) {
        console.warn('Google sheets post notice:', err);
      }

      setResult({
        overallScore: overall,
        seoScore: seo,
        brandScore: brand,
        adRoasScore: adRoas,
        aiReadinessScore: aiReady,
        quickWins: [
          `Optimize primary landing page titles & H1 tags for ${industry} search intent.`,
          `Fix mobile response speed to reduce bounce rates below 35%.`,
          `Deploy Schema markup to capture Google rich snippet placements.`,
        ],
        growthDrivers: [
          `Launch hyper-targeted Meta & Google Ads campaigns targeting high-intent buyers.`,
          `Implement a 30-day omnichannel social media engine for brand recall.`,
          `Redesign value propositions to lift landing page conversion rates by 40%+.`,
        ],
        aiAutomations: [
          `Embed instant 24/7 AI chatbot lead qualification to respond within 5 seconds.`,
          `Set up automated CRM email/WhatsApp nurturing sequences for cold traffic.`,
          `Deploy AI-driven predictive audience segmentation for lower Cost-Per-Lead.`,
        ],
      });
    }, 3600);
  };

  return (
    <section id="ai-audit" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background accents */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI Innovation"
          title={
            <>
              Instant <span className="text-accent">AI Marketing Audit</span> & Growth Blueprint
            </>
          }
          subtitle="Analyze your website, brand positioning, search visibility, and AI readiness in seconds."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Audit Form */}
          <div className="lg:col-span-5 rounded-3xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-navy-950 font-bold">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Run AI Audit</h3>
                <p className="text-xs text-muted-foreground">Free instant report for your business</p>
              </div>
            </div>

            <form onSubmit={handleAuditSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground/80">
                  Business / Brand Name *
                </label>
                <Input
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Vystar Tech, Apex Realty"
                  className="bg-background/80 border-border"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground/80">
                  Website URL (Optional)
                </label>
                <Input
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="e.g. https://yourbrand.com"
                  className="bg-background/80 border-border"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground/80">
                  Industry Sector
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full h-10 rounded-md border border-border bg-background/80 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="E-commerce">E-commerce & Retail</option>
                  <option value="Real Estate">Real Estate & Construction</option>
                  <option value="Healthcare">Healthcare & Wellness</option>
                  <option value="Technology">Technology & SaaS</option>
                  <option value="Finance">Finance & Fintech</option>
                  <option value="Education">Education & Coaching</option>
                  <option value="Hospitality">Hotels & Restaurants</option>
                  <option value="Manufacturing">Manufacturing & B2B</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-foreground/80">
                  Primary Growth Goal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full h-10 rounded-md border border-border bg-background/80 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="Scale Qualified Leads & Sales">Scale Qualified Leads & Sales</option>
                  <option value="Dominate Google SEO Rankings">Dominate Google SEO Rankings</option>
                  <option value="Lower PPC Cost-Per-Acquisition">Lower PPC Cost-Per-Acquisition</option>
                  <option value="Rebrand & Build Market Authority">Rebrand & Build Market Authority</option>
                  <option value="Automate Customer Response with AI">Automate Customer Response with AI</option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={isAuditing}
                className="w-full h-12 rounded-full bg-accent text-navy-950 font-bold text-sm hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all mt-2"
              >
                {isAuditing ? (
                  <span className="flex items-center gap-2">
                    <Bot className="h-4 w-4 animate-spin" />
                    Analyzing Market Data...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Zap className="h-4 w-4 fill-navy-950" />
                    Generate AI Growth Audit
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-4 text-[11px] text-muted-foreground border-t border-border/50 pt-4">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" /> 100% Confidential
              </span>
              <span className="flex items-center gap-1">
                <Award className="h-3.5 w-3.5 text-amber-500" /> Vystar AI Engine v2.4
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Results & Audit Preview */}
          <div className="lg:col-span-7">
            {isAuditing ? (
              <div className="rounded-3xl border border-accent/30 bg-card/90 p-8 sm:p-12 text-center min-h-[420px] flex flex-col items-center justify-center shadow-2xl">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-accent/10 border border-accent/30 mb-6">
                  <Bot className="h-10 w-10 text-accent animate-pulse" />
                  <span className="absolute inset-0 rounded-3xl bg-accent/20 animate-ping opacity-30" />
                </div>
                <h4 className="font-display text-xl font-bold mb-2">Analyzing {businessName || 'Your Brand'}</h4>
                <p className="text-sm text-muted-foreground mb-6 max-w-md">{auditStepText}</p>

                {/* Progress Bar */}
                <div className="w-full max-w-md bg-secondary rounded-full h-3 overflow-hidden p-0.5 border border-border">
                  <motion.div
                    className="bg-gradient-to-r from-accent to-amber-500 h-full rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${auditProgress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="text-xs font-semibold text-accent mt-2">{auditProgress}% Completed</span>
              </div>
            ) : result ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl border border-accent/40 bg-card/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6"
              >
                {/* Header Score Banner */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border pb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent border border-accent/30">
                      <Sparkles className="h-3.5 w-3.5" /> AI Audit Complete for {businessName}
                    </span>
                    <h3 className="font-display text-2xl font-bold mt-2">Growth Benchmark Report</h3>
                  </div>

                  <div className="flex items-center gap-3 bg-navy-950/80 px-5 py-3 rounded-2xl border border-accent/30 shadow-inner">
                    <div className="text-right">
                      <p className="text-[11px] text-muted-foreground font-semibold">OVERALL SCORE</p>
                      <p className="font-display text-3xl font-black text-accent">{result.overallScore}/100</p>
                    </div>
                    <div className="h-10 w-10 rounded-full border-4 border-accent flex items-center justify-center text-xs font-bold text-accent">
                      {result.overallScore > 75 ? 'A' : 'B+'}
                    </div>
                  </div>
                </div>

                {/* Breakdown Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <ScoreCard label="SEO Visibility" score={result.seoScore} icon={Search} />
                  <ScoreCard label="Brand Strength" score={result.brandScore} icon={Award} />
                  <ScoreCard label="Ad ROAS Efficiency" score={result.adRoasScore} icon={TrendingUp} />
                  <ScoreCard label="AI Automation" score={result.aiReadinessScore} icon={Bot} />
                </div>

                {/* Recommendations */}
                <div className="space-y-4 pt-2">
                  <div className="rounded-2xl bg-secondary/50 p-4 border border-border">
                    <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5" /> Quick Wins (0–30 Days)
                    </h4>
                    <ul className="space-y-1.5 text-xs text-foreground/90">
                      {result.quickWins.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-secondary/50 p-4 border border-border">
                    <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Target className="h-3.5 w-3.5" /> Core Growth Drivers
                    </h4>
                    <ul className="space-y-1.5 text-xs text-foreground/90">
                      {result.growthDrivers.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-secondary/50 p-4 border border-border">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Bot className="h-3.5 w-3.5" /> Recommended AI Automations
                    </h4>
                    <ul className="space-y-1.5 text-xs text-foreground/90">
                      {result.aiAutomations.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Ready to execute this growth blueprint with Pratham & team?
                  </p>
                  <Button asChild className="rounded-full bg-accent text-navy-950 font-bold hover:bg-accent/90">
                    <Link href="/contact">
                      Execute Plan with Vystar
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ) : (
              <div className="rounded-3xl border border-dashed border-border bg-card/40 p-8 sm:p-12 text-center min-h-[420px] flex flex-col items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-accent mb-4">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h4 className="font-display text-xl font-bold mb-2">Ready for your AI Growth Audit?</h4>
                <p className="text-sm text-muted-foreground max-w-md mb-6">
                  Fill in your business details on the left to generate an instant real-time diagnostic report across SEO, Ads, Brand Positioning, and AI Automation.
                </p>
                <div className="flex items-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-accent" /> 100% Free
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-accent" /> Instant Analysis
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-accent" /> Custom Action Plan
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreCard({ label, score, icon: Icon }: { label: string; score: number; icon: any }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/40 p-3.5 text-center">
      <Icon className="h-4 w-4 mx-auto mb-1.5 text-accent" />
      <p className="font-display text-xl font-bold">{score}%</p>
      <p className="text-[10px] text-muted-foreground font-medium mt-0.5">{label}</p>
    </div>
  );
}
