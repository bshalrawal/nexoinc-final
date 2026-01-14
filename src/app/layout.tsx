import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { ChatBot } from '@/components/chat-bot';
import { FloatingActionBar } from '@/components/ui/floating-action-bar';
import { EmailCTA } from '@/components/ui/email-cta';
import { WhatsAppCTA } from '@/components/ui/whatsapp-cta';
import { AnimationProvider } from '@/components/providers/animation-provider';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexoninc.tech'),
  title: {
    default: 'NexonInc — Engineering Success',
    template: '%s | NexonInc',
  },
  description: 'Nexon Inc is a global tech innovator that blends strategic design, cutting-edge technologies, and business-driven execution to build scalable digital products and solutions from responsive web and mobile apps to custom enterprise software, AI systems, cloud infrastructure, cybersecurity, data & analytics, and performance-focused digital marketing, all backed by intelligent support and long-term partnership.',
  keywords: ['web design Nepal', 'website development Kathmandu', 'NexonInc', 'IT company Nepal', 'ecommerce development Nepal'],
  authors: [{ name: 'NexonInc' }],
  creator: 'NexonInc',
  publisher: 'NexonInc',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'NexonInc — Engineering Success',
    description: 'Nexon Inc is a global tech innovator that blends strategic design, cutting-edge technologies, and business-driven execution to build scalable digital products and solutions from responsive web and mobile apps to custom enterprise software, AI systems, cloud infrastructure, cybersecurity, data & analytics, and performance-focused digital marketing, all backed by intelligent support and long-term partnership.',
    url: 'https://nexoninc.tech',
    siteName: 'NexonInc',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'NexonInc Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexonInc — Web Design & Development Company in Kathmandu',
    description: 'Nexon Inc is a global tech innovator that blends strategic design, cutting-edge technologies, and business-driven execution to build scalable digital products and solutions from responsive web and mobile apps to custom enterprise software, AI systems, cloud infrastructure, cybersecurity, data & analytics, and performance-focused digital marketing, all backed by intelligent support and long-term partnership.',
    images: ['/logo.png'],
  },
  verification: {
    google: '0E9d9n2Il3Zw9QFbV_VucUCQGHdZwQ1v5AuJcyoFicA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(poppins.variable, 'font-body antialiased')}>
        <FirebaseClientProvider>
          <AnimationProvider>
            {children}
          </AnimationProvider>
        </FirebaseClientProvider>
        <Toaster />
        <ChatBot />
        <div className="hidden lg:block">
          <FloatingActionBar />
        </div>
        <div className="lg:hidden">
          <EmailCTA />
          <WhatsAppCTA />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
