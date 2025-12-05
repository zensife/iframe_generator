import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import GoogleMapsGenerator from '@/components/tools/GoogleMapsGenerator';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQSection } from '@/components/content/FAQSection';
import { googleMapsContent } from '@/data/seo-content';
import { StructuredData } from '@/components/seo/StructuredData';
import { routing } from '@/i18n/routing';

const pageUrl = 'https://www.iframegenerator.org/google-maps-iframe-generator';

export const metadata: Metadata = {
    title: 'Google Map Embed Generator - Free iframe Code Tool (No API Key)',
    description: 'Generate Google Map embed code instantly. Free tool to embed Google Maps on your website without API key. Create responsive iframe codes with custom zoom and map types.',
    keywords: [
        'google map embed',
        'google maps embed generator',
        'embed google map',
        'google map embed code generator',
        'embed google map on website',
        'google map iframe code',
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Google Map Embed Generator - Free iframe Code Tool (No API Key)',
        description: 'Create custom Google Maps embed codes without an API key. Responsive iframe generator with zoom and map type options.',
        url: pageUrl,
        type: 'website',
    },
};

const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Google Map Embed Generator',
    url: pageUrl,
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

    return (
        <>
            <StructuredData data={webAppSchema} />
            <GoogleMapsGenerator />
            <nav
                aria-label="Breadcrumb"
                className="container mx-auto px-4 max-w-4xl"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
                style={{ marginTop: '2rem', marginBottom: '1rem' }}
            >
                <ol
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'hsl(var(--muted-foreground))',
                    }}
                >
                    <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <a
                            itemProp="item"
                            href="/"
                            style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                            <span itemProp="name">Iframe Generator</span>
                        </a>
                        <meta itemProp="position" content="1" />
                    </li>
                    <span aria-hidden="true">/</span>
                    <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <span itemProp="name">Google Map Embed Generator</span>
                        <meta itemProp="position" content="2" />
                    </li>
                </ol>
            </nav>
            <div className="container mx-auto px-4 max-w-4xl">
                <ContentSection title={googleMapsContent.title}>
                    {googleMapsContent.sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                    ))}
                </ContentSection>
                <FAQSection items={googleMapsContent.faq} />
            </div>
        </>
    );
}
