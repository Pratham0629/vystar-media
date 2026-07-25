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
  title: 'Vystar Media — Expanding Brands Beyond Boundaries',
  description:
    'Vystar Media is a full-service marketing & branding agency helping businesses grow through Digital Marketing, Traditional Marketing, Branding, Creative Design, AI Automation, and Business Strategy.',
  keywords: [
    'marketing agency',
    'branding agency',
    'digital marketing',
    'SEO',
    'PPC',
    'AI marketing',
    'Vystar Media',
    'advertising agency',
  ],
  authors: [{ name: 'Vystar Media' }],
  openGraph: {
    title: 'Vystar Media — Expanding Brands Beyond Boundaries',
    description:
      'Full-service marketing & branding agency. We don\u2019t just market brands. We build them.',
    type: 'website',
    siteName: 'Vystar Media',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vystar Media — Expanding Brands Beyond Boundaries',
    description:
      'Full-service marketing & branding agency. We don\u2019t just market brands. We build them.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
