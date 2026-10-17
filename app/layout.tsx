import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';
import { AIChatbot } from '@/components/ai-chatbot';
import { CustomCursor } from '@/components/custom-cursor';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vystarmedia.in'),
  title: {
    default: 'Digital Marketing Agency in Boisar | Vystar Media',
    template: '%s',
  },
  description:
    'Vystar Media is a Boisar-based marketing agency offering SEO, social media marketing, paid ads, branding and creative services for businesses in Boisar, Palghar and Mumbai.',
  keywords: [
    'digital marketing agency in Boisar',
    'digital marketing company in Boisar',
    'digital marketing agency in Mumbai',
    'marketing agency in Palghar',
    'digital marketing services in Maharashtra',
    'branding agency in Boisar',
    'SEO services Boisar',
    'social media marketing Boisar',
    'Google Ads agency Boisar',
    'website development company Boisar',
    'video production company Boisar',
  ],
  authors: [{ name: 'Vystar Media' }],
  alternates: {
    canonical: 'https://vystarmedia.in',
  },
  openGraph: {
    title: 'Digital Marketing Agency in Boisar | Vystar Media',
    description:
      'Vystar Media is a Boisar-based marketing agency offering SEO, social media marketing, paid ads, branding and creative services for businesses in Boisar, Palghar and Mumbai.',
    type: 'website',
    url: 'https://vystarmedia.in',
    siteName: 'Vystar Media',
    images: [
      {
        url: 'https://vystarmedia.in/images/vystar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Vystar Media digital marketing team; branding and creative studio; social media video production',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Boisar | Vystar Media',
    description:
      'Vystar Media is a Boisar-based marketing agency offering SEO, social media marketing, paid ads, branding and creative services for businesses in Boisar, Palghar and Mumbai.',
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
  telephone: '+91-8468962914',
  email: 'businesswithvystarmedia@gmail.com',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Boisar',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '19.8036',
    longitude: '72.7547',
  },
  areaServed: ['Boisar', 'Palghar', 'Mumbai', 'Maharashtra', 'India'],
  knowsAbout: [
    'Digital Marketing Agency in Boisar',
    'Digital Marketing Services in Boisar',
    'SEO Services in Boisar & Mumbai',
    'Social Media Marketing in Boisar & Mumbai',
    'Google & Meta Ads Management Boisar',
    'Branding Agency in Boisar & Mumbai',
    'Video Production & Editing in Boisar',
    'Website Development in Boisar & Mumbai',
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
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
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
