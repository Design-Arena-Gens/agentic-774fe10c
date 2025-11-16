import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-plus' });
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Construction Technology & Management ? Portfolio',
  description: 'Portfolio website showcasing expertise in construction technology, digital delivery, and project management.',
  openGraph: {
    title: 'Construction Technology & Management ? Portfolio',
    description: 'Modern, engaging, and conversion-focused portfolio.',
    type: 'website',
    url: 'https://agentic-774fe10c.vercel.app',
  },
  metadataBase: new URL('https://agentic-774fe10c.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
