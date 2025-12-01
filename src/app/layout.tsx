import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iframegenerator.org'), // TODO: Update with actual domain
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Iframe Generator',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate responsive iframe codes for websites, Google Maps, and YouTube videos. Free, SEO-friendly, and easy to use.',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EWJWEFZQMW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EWJWEFZQMW');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uemqsm2wxx");
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
