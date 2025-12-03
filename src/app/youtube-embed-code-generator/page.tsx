import { Metadata } from 'next';
import YoutubeGenerator from '@/components/tools/YoutubeGenerator';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQSection } from '@/components/content/FAQSection';
import { youtubeContent } from '@/data/seo-content';
import { StructuredData } from '@/components/seo/StructuredData';

const pageUrl = 'https://www.iframegenerator.org/youtube-embed-code-generator';

export const metadata: Metadata = {
    title: 'YouTube Embed Code Generator - Free iframe Tool',
    description: 'Generate YouTube embed code instantly. Free generator with autoplay, loop, privacy mode, custom start times, and responsive iframe code for any website.',
    keywords: [
        'youtube embed code generator',
        'youtube embed code',
        'embed youtube video',
        'get youtube embed code',
        'youtube iframe generator',
        'youtube embed code tool',
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'YouTube Embed Code Generator - Free iframe Tool',
        description: 'Create custom YouTube embed codes with autoplay, loop, privacy-enhanced mode, and responsive iframe options.',
        url: pageUrl,
        type: 'website',
    },
};

const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'YouTube Embed Code Generator',
    url: pageUrl,
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

export default function Page() {
    return (
        <>
            <StructuredData data={webAppSchema} />
            <YoutubeGenerator />

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
                        <span itemProp="name">YouTube Embed Code Generator</span>
                        <meta itemProp="position" content="2" />
                    </li>
                </ol>
            </nav>

            <div className="container mx-auto px-4 max-w-4xl">
                <ContentSection title={youtubeContent.title}>
                    {youtubeContent.sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                    ))}
                </ContentSection>
                <FAQSection items={youtubeContent.faq} />
            </div>
        </>
    );
}
