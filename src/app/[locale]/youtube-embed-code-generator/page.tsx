import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import YoutubeGenerator from '@/components/tools/YoutubeGenerator';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQSection } from '@/components/content/FAQSection';
import { getYoutubeContent } from '@/data/seo-content';
import { getYoutubeMetadata } from '@/data/seo-metadata';
import { StructuredData } from '@/components/seo/StructuredData';
import { routing } from '@/i18n/routing';
import { Locale } from '@/i18n/config';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const metadata = getYoutubeMetadata(locale as Locale);
    const baseUrl = 'https://www.iframegenerator.org';
    const path = '/youtube-embed-code-generator';
    const canonicalUrl = locale === 'en' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: metadata.openGraph.title,
            description: metadata.openGraph.description,
            url: canonicalUrl,
            type: 'website',
        },
    };
}

const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'YouTube Embed Code Generator',
    url: 'https://www.iframegenerator.org/youtube-embed-code-generator',
    description: 'Generate custom YouTube embed codes with autoplay, loop, privacy mode, and responsive iframe settings.',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Any',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    featureList: [
        'Custom dimensions',
        'Autoplay and mute pairing',
        'Loop video automatically',
        'Privacy-enhanced youtube-nocookie.com mode',
        'Responsive iframe code output',
        'Modest branding and related video controls',
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

    const content = getYoutubeContent(locale as Locale);

    return (
        <>
            <StructuredData data={webAppSchema} />
            <YoutubeGenerator />

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
