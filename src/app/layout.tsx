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
  title: 'Nexon Inc- Engineering Success',
  description: '#1 Web Design & Development  Company in Nepal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>NexonInc — Web Design & Development Company in Kathmandu</title>
        <meta name="google-site-verification" content="0E9d9n2Il3Zw9QFbV_VucUCQGHdZwQ1v5AuJcyoFicA" />
        <meta name="description" content="NexonInc is a leading web design and development company in Kathmandu, Nepal. We build modern, fast, and custom websites that help businesses grow." />
        <meta name="author" content="NexonInc" />
        <link rel="canonical" href="https://nexoninc.com/" />

        <meta property="og:title" content="NexonInc — Web Design & Development Company in Kathmandu" />
        <meta property="og:description" content="Professional website design, custom development, e-commerce builds, and reliable digital solutions in Kathmandu, Nepal." />
        <meta property="og:image" content="https://nexoninc.com/og-image.jpg" />
        <meta property="og:url" content="https://nexoninc.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NexonInc — Web Design & Development Company in Kathmandu" />
        <meta name="twitter:description" content="We create modern, user-focused web solutions for growing businesses." />
        <meta name="twitter:image" content="https://nexoninc.com/og-image.jpg" />


        <meta name="keywords" content="web design Nepal, website development Kathmandu, NexonInc, IT company Nepal, ecommerce development Nepal" />
      </head>
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
