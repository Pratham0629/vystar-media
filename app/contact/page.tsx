import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Contact } from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'Contact Digital Marketing Agency — Vystar Media',
  description:
    'Let\'s build your brand together. Book a free consultation with Vystar Media strategy team.',
  keywords: [
    'Contact Digital Marketing Agency',
    'Digital Marketing Agency Contact',
    'Digital Marketing Consultation',
    'Digital Marketing Services Inquiry',
    'Hire Digital Marketing Agency',
    'Get Digital Marketing Consultation',
    'Marketing Agency Contact',
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
