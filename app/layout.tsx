import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';
import { AIChatbot } from '@/components/ai-chatbot';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vystarmedia.in'),
  title: 'Vystar Media — Best Digital Marketing & Branding Agency in Boisar, Palghar, Mumbai',
  description:
    'Vystar Media is a premier full-service marketing & branding agency. We specialize in Digital Marketing, SEO Services, PPC Ads, Social Media Marketing, Branding, Creative Design, AI Automation, and Business Strategy in Boisar, Palghar, Mumbai & globally.',
  keywords: [
    'digital marketing agency',
    'digital marketing company',
    'best digital marketing agency',
    'digital marketing agency in Boisar',
    'digital marketing agency in Palghar',
    'digital marketing agency in Mumbai',
    'branding agency',
    'branding agency in Boisar',
    'logo design company',
    'SEO services company',
    'SEO agency',
    'PPC advertising agency',
    'Google ads agency',
    'Meta ads agency',
    'Facebook ads agency',
    'Instagram marketing agency',
    'social media marketing agency',
    'AI marketing agency',
    'AI chatbot automation',
    'traditional advertising agency',
    'auto rickshaw advertising',
    'outdoor advertising agency',
    'billboard advertising',
    'creative design studio',
    'motion graphics agency',
    'website design agency',
    'e-commerce marketing agency',
    'business growth strategy',
    'Vystar Media',
    'Vystar Media Boisar',
    'Vystar Media Palghar',
  ],
  authors: [{ name: 'Vystar Media' }],
  alternates: {
    canonical: 'https://vystarmedia.in',
  },
  openGraph: {
    title: 'Vystar Media — Best Digital Marketing & Branding Agency',
    description:
      'Full-service digital marketing, SEO, PPC, branding, and AI automation agency. Expanding brands beyond boundaries.',
    type: 'website',
    url: 'https://vystarmedia.in',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Vystar Media Official Brand Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vystar Media — Expanding Brands Beyond Boundaries',
    description:
      'Full-service digital marketing, SEO, PPC, branding, and AI automation agency.',
    images: ['https://vystarmedia.in/images/vystar-logo.png'],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Vystar Media',
  image: 'https://vystarmedia.in/images/vystar-logo.png',
  '@id': 'https://vystarmedia.in/#organization',
  url: 'https://vystarmedia.in',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Boisar',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: ['Boisar', 'Palghar', 'Mumbai', 'Maharashtra', 'India', 'Global'],
  knowsAbout: [
    'Digital Marketing',
    'Branding Services',
    'SEO Optimization',
    'PPC Google Ads',
    'Social Media Marketing',
    'AI Automation',
    'Outdoor Advertising',
    'Website Development',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
          <AIChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
