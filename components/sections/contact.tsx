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
  phone: z
    .string()
    .min(7, 'Enter a valid phone number')
    .regex(/^[0-9+\-\s()]+$/, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(5, 'Please write your message (min 5 characters)'),
});

type FormData = z.infer<typeof schema>;

const WHATSAPP_PHONE = '918468962914';
const CALLMEBOT_API_KEY = process.env.NEXT_PUBLIC_CALLMEBOT_APIKEY || '';

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [submittedName, setSubmittedName] = React.useState('');

  const onSubmit = async (data: FormData) => {
    setStatus('idle');
    setSubmittedName(data.name);

    // 1. Direct background CallMeBot WhatsApp delivery to +91 8468962914
    if (CALLMEBOT_API_KEY) {
      try {
        const text = encodeURIComponent(
          `🔥 *New Client Inquiry — Vystar Media*\n━━━━━━━━━━━━━━━━━━━━\n👤 *Name:* ${data.name}\n📞 *Phone:* ${data.phone}\n✉️ *Email:* ${data.email}\n📝 *Message:* ${data.message}\n━━━━━━━━━━━━━━━━━━━━\n🌐 *Source:* vystarmedia.in`
        );
        fetch(`https://api.callmebot.com/whatsapp.php?phone=+${WHATSAPP_PHONE}&text=${text}&apikey=${CALLMEBOT_API_KEY}`, {
          method: 'GET',
          mode: 'no-cors',
        }).catch(() => {});
      } catch (err) {
        console.warn('CallMeBot notification notice:', err);
      }
    }

    // 2. Netlify Cloud Form background delivery
    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'contact_submissions');
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('message', data.message);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      }).catch(() => {});
    } catch (e) {
      console.warn('Netlify form notice:', e);
    }

    // 3. Local storage capture for Admin Dashboard
    try {
      const newLead = {
        id: 'lead-' + Date.now(),
        created_at: new Date().toISOString(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: '',
        message: data.message,
      };
      const existing = JSON.parse(localStorage.getItem('vystar_leads') || '[]');
      localStorage.setItem('vystar_leads', JSON.stringify([newLead, ...existing]));
    } catch (e) {
      console.warn('Local lead storage notice:', e);
    }

    // 4. Background Google Sheets webhook backup
    try {
      sendLeadToGoogleSheets({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }).catch(() => {});
    } catch (err) {
      console.warn('Google sheets backup notice:', err);
    }

    // Done! Visitor stays on website, no visitor WhatsApp opened!
    setStatus('success');
    reset();
  };

  return (
    <section className="relative overflow-hidden bg-section-alt py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's build your brand together"
          subtitle="Fill out the form below. We'll receive your inquiry and contact you right away."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <Field label="Full Name" error={errors.name?.message}>
                <Input placeholder="Enter your full name" {...register('name')} />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone Number" error={errors.phone?.message}>
                  <Input placeholder="+91 98765 43210" {...register('phone')} />
                </Field>
                <Field label="Email Address" error={errors.email?.message}>
                  <Input type="email" placeholder="name@company.com" {...register('email')} />
                </Field>
              </div>

              <Field label="Your Message / Requirement" error={errors.message?.message}>
                <Textarea
                  rows={5}
                  placeholder="Tell us about your brand, goals, or what service you need..."
                  {...register('message')}
                />
              </Field>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg shadow-accent/20 h-12 px-8 text-base transition-all hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send
                    </>
                  )}
                </Button>
              </div>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 space-y-2"
                >
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm sm:text-base">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>Message Sent Successfully!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-body-muted leading-relaxed">
                    Thank you, {submittedName}! Your details have been sent to our team. We will get back to you shortly.
                  </p>
                </motion.div>
              )}

              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  Something went wrong. Please check your details and try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                  <p className="text-sm text-body-muted">Fastest response</p>
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
          <p key={l} className="text-sm text-body-muted">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}
