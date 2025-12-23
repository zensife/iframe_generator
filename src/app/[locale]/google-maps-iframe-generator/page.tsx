import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import GoogleMapsGenerator from '@/components/tools/GoogleMapsGenerator';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQSection } from '@/components/content/FAQSection';
import { getGoogleMapsContent } from '@/data/seo-content';
import { getGoogleMapsMetadata } from '@/data/seo-metadata';
import { StructuredData } from '@/components/seo/StructuredData';
import { routing } from '@/i18n/routing';
import { Locale } from '@/i18n/config';

import { getSEOTags } from '@/lib/seo';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const metadata = getGoogleMapsMetadata(locale as Locale);
    const alternates = getSEOTags('/google-maps-iframe-generator', locale);

    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        alternates,
        openGraph: {
            title: metadata.openGraph.title,
            description: metadata.openGraph.description,
            url: alternates.canonical,
            type: 'website',
        },
    };
}

const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Google Map Embed Generator',
    url: 'https://iframegenerator.org/google-maps-iframe-generator',
    description: 'Free tool to embed Google Maps on websites without API key. Generate responsive iframe code with custom zoom and map types.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    featureList: [
        'No API key required',
        'Custom zoom levels',
        'Responsive iframe code',
        'Multiple map types (Roadmap, Satellite, Hybrid)',
        'Lazy loading support',
    ],
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const content = getGoogleMapsContent(locale as Locale);

    return (
        <>
            <StructuredData data={webAppSchema} />
            <GoogleMapsGenerator />
            <div className="container mx-auto px-4 max-w-4xl">
                <ContentSection title={content.title}>
                    {content.sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                    ))}
                </ContentSection>
                <FAQSection items={content.faq} />
            </div>
        </>
    );
}
