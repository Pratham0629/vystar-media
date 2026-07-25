import { PageHeader } from '@/components/page-header';
import { Contact } from '@/components/sections/contact';

export const metadata = { title: 'Contact — Vystar Media' };

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
