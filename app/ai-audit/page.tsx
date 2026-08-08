import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { AIAudit } from '@/components/sections/ai-audit';

export const metadata: Metadata = {
  title: 'AI Marketing Audit Tool — Website & SEO Health Check — Vystar Media',
  description:
    'Get instant scores, competitive insights, and an actionable growth roadmap tailored for your business with our AI Marketing Audit Tool.',
  keywords: [
    'AI Website Audit',
    'AI Audit Tool',
    'AI SEO Audit',
    'AI Website Analyzer',
    'Website Audit Tool',
    'AI Readiness Audit',
    'Website Performance Audit',
    'AI Visibility Audit',
    'SEO Audit Tool',
    'Website Health Check',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/ai-audit',
  },
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
