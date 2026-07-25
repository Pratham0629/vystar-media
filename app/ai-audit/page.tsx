import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { AIAudit } from '@/components/sections/ai-audit';

export const metadata: Metadata = {
  title: 'AI Marketing Audit Tool — Vystar Media',
  description:
    'Generate an instant, real-time AI marketing diagnostic report for your business. Benchmark SEO, brand positioning, PPC ROAS, and AI automation readiness.',
};

export default function AIAuditPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Innovation"
        title="AI Marketing Audit Tool"
        subtitle="Get instant scores, competitive insights, and an actionable growth roadmap tailored for your business."
        crumb="AI Audit"
      />
      <AIAudit />
    </>
  );
}
