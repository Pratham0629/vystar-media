import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Contact } from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'Contact Vystar Media | Marketing Agency in Boisar, Palghar',
  description:
    'Contact Vystar Media in Boisar, Maharashtra to discuss SEO, paid ads, social media, branding, video production or automation. Request a tailored consultation.',
  keywords: [
    'contact digital marketing agency Boisar',
    'hire marketing agency Boisar',
    'digital marketing consultation Boisar',
    'contact SEO agency Mumbai',
    'branding agency Palghar',
    'digital marketing quote Maharashtra',
    'marketing company in Boisar',
  ],
  alternates: {
    canonical: 'https://vystarmedia.in/contact',
  },
  openGraph: {
    title: 'Contact Vystar Media | Boisar Marketing Agency',
    description:
      'Contact Vystar Media in Boisar, Maharashtra to discuss SEO, paid ads, social media, branding, video production or automation. Request a tailored consultation.',
    url: 'https://vystarmedia.in/contact',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact Vystar Media marketing agency; Vystar Media office in Boisar',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Get In Touch"
        title="Talk to Vystar Media in Boisar About Your Marketing Goals"
        subtitle="Book a tailored consultation with our digital marketing specialists in Boisar, Maharashtra. Fast response via WhatsApp or email within one business day."
      />
      <Contact />
    </>
  );
}
