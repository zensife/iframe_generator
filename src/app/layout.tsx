import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iframe-generator.com'), // TODO: Update with actual domain
  title: 'Iframe Generator - Free Online Embed Code Tools',
  description: 'Generate responsive iframe codes for websites, Google Maps, and YouTube videos. Free, SEO-friendly, and easy to use.',
  keywords: 'iframe generator, google maps embed, youtube embed code, responsive iframe, embed code generator',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Iframe Generator - Free Online Embed Code Tools',
    description: 'Generate responsive iframe codes for websites, Google Maps, and YouTube videos.',
    type: 'website',
    url: '/',
    siteName: 'Iframe Generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iframe Generator - Free Online Embed Code Tools',
    description: 'Generate responsive iframe codes for websites, Google Maps, and YouTube videos.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
