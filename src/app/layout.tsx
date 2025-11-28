import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';

export const metadata: Metadata = {
  title: 'Iframe Generator - Free Online Embed Code Tools',
  description: 'Generate responsive iframe codes for websites, Google Maps, and YouTube videos. Free, SEO-friendly, and easy to use.',
  keywords: 'iframe generator, google maps embed, youtube embed code, responsive iframe, embed code generator',
  openGraph: {
    title: 'Iframe Generator - Free Online Embed Code Tools',
    description: 'Generate responsive iframe codes for websites, Google Maps, and YouTube videos.',
    type: 'website',
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
