import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import ResponsiveGenerator from '@/components/tools/ResponsiveGenerator';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQSection } from '@/components/content/FAQSection';
import { getResponsiveContent } from '@/data/seo-content';
import { routing } from '@/i18n/routing';
import { Locale } from '@/i18n/config';

export const metadata: Metadata = {
    title: 'Responsive Iframe Generator - Mobile-Friendly Embed Code',
    description: 'Create responsive iframe codes that adapt to any screen size. Modern CSS aspect-ratio and legacy padding-bottom methods. Free tool with live preview.',
    keywords: 'responsive iframe generator, responsive iframe code generator, iframe responsive generator, mobile-friendly iframe',
    alternates: {
        canonical: '/responsive-iframe-generator',
    },
    openGraph: {
        title: 'Responsive Iframe Generator - Mobile-Friendly Embed Code',
        description: 'Create responsive iframe embed codes that automatically adapt to any screen size. Support for modern CSS aspect-ratio and legacy padding-bottom methods.',
        url: '/responsive-iframe-generator',
    },
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

    const content = getResponsiveContent(locale as Locale);

    return (
        <>
            <ResponsiveGenerator />
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
