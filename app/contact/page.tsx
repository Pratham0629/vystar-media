import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Contact } from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'Contact Digital Marketing Agency & SEO Company in Mumbai — Vystar Media',
  description:
    'Contact Vystar Media — leading Digital Marketing Company in Mumbai & SEO Agency in Mumbai. Book a free consultation today.',
  keywords: [
    'Digital Marketing Company in Mumbai',
    'Digital Marketing Services in Mumbai',
    'SEO Agency in Mumbai',
    'SEO Services in Mumbai',
    'Social Media Marketing Agency in Mumbai',
    'Performance Marketing Agency in Mumbai',
    'Branding Agency in Mumbai',
    'AI Marketing Agency in Mumbai',
    'Online Marketing Agency in Mumbai',
    'Digital Marketing Company in India',
    'Contact Digital Marketing Agency',
    'Hire Digital Marketing Agency',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Get In Touch"
        title="Let's build your brand together"
        subtitle="Book a free consultation. We'll respond within one business day."
      />
      <Contact />
    </>
  );
}
