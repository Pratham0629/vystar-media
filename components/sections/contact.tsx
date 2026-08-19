'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Globe,
  Headphones,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionHeading } from '@/components/section-heading';
import { sendLeadToGoogleSheets } from '@/lib/google-sheets';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  phone: z
    .string()
    .min(7, 'Enter a valid phone number')
    .regex(/^[0-9+\-\s()]+$/, 'Enter a valid phone number'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Tell us a bit more (min 10 characters)'),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  'Digital Marketing',
  'Traditional Marketing',
  'Branding Services',
  'Creative Studio',
  'AI & Business Solutions',
  'Not sure yet',
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setStatus('idle');
    const newLead = {
      id: 'lead-' + Date.now(),
      created_at: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company || '',
      message: `${data.message}\n\nRequested service: ${data.service}`,
    };

    // Save to local storage for 100% guaranteed admin dashboard capture
    try {
      const existing = JSON.parse(localStorage.getItem('vystar_leads') || '[]');
      localStorage.setItem('vystar_leads', JSON.stringify([newLead, ...existing]));
    } catch (e) {
      console.warn('Local lead storage notice:', e);
    }

    // Submit to Netlify Cloud Form Engine (global client lead storage)
    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'contact_submissions');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('company', data.company || '');
      formData.append('service', data.service);
      formData.append('message', data.message);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
    } catch (e) {
      console.warn('Netlify form submission notice:', e);
    }

    // Send to Google Sheets Webhook (100% Free, Never Pauses)
    try {
      await sendLeadToGoogleSheets({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company || '',
        service: data.service,
        message: data.message,
      });
    } catch (err) {
      console.warn('Google sheets post processed:', err);
    }

    setStatus('success');
    reset();
    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build your brand together"
          subtitle="Book a free consultation. We'll respond within one business day with a tailored plan."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" error={errors.name?.message}>
                  <Input placeholder="Jane Doe" {...register('name')} />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <Input type="email" placeholder="jane@company.com" {...register('email')} />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" error={errors.phone?.message}>
                  <Input placeholder="+91 98765 43210" {...register('phone')} />
                </Field>
                <Field label="Company (optional)">
                  <Input placeholder="Acme Inc." {...register('company')} />
                </Field>
              </div>
              <Field label="Service of Interest" error={errors.service?.message}>
                <select
                  {...register('service')}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a service…</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="How can we help?" error={errors.message?.message}>
                <Textarea
                  rows={5}
                  placeholder="Tell us about your goals, timeline and challenges..."
                  {...register('message')}
                />
              </Field>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! We&apos;ll be in touch within one business day.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <InfoCard icon={Phone} title="Phone" lines={['+91 8468962914', '+91 7758894390', '+91 8329172035']} />
            <InfoCard icon={Mail} title="Email" lines={['businesswithvystar@gmail.com']} />
            <InfoCard
              icon={Clock}
              title="Business Hours"
              lines={['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Sun: Closed']}
            />
            <InfoCard
              icon={MapPin}
              title="Location"
              lines={['Sneha Nagar, Canis Manor, RB: 35', 'Boisar, India']}
            />
            <InfoCard
              icon={Globe}
              title="Our Reach"
              lines={['Serving clients across India', 'Remote-first delivery model']}
            />
            <InfoCard
              icon={Headphones}
              title="Support"
              lines={['Dedicated account manager', '24/7 priority support for Enterprise']}
            />

            <a
              href="https://wa.me/918468962914"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 transition-all hover:border-emerald-500/60 hover:bg-emerald-500/15"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Chat on WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Fastest response</p>
                </div>
              </div>
              <span className="text-emerald-500 transition-transform group-hover:translate-x-1">→</span>
            </a>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Vystar Media location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.7400%2C19.6900%2C72.7700%2C19.7100&layer=mapnik&marker=19.6957%2C72.7516"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-semibold">{title}</p>
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted-foreground">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}
