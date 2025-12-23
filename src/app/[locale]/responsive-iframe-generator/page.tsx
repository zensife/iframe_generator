import { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import ResponsiveGenerator from '@/components/tools/ResponsiveGenerator';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQSection } from '@/components/content/FAQSection';
import { getResponsiveContent } from '@/data/seo-content';
import { getResponsiveMetadata } from '@/data/seo-metadata';
import { routing } from '@/i18n/routing';
import { Locale } from '@/i18n/config';
import styles from '@/styles/page.module.css';

import { getSEOTags } from '@/lib/seo';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const metadata = getResponsiveMetadata(locale as Locale);
    const alternates = getSEOTags('/responsive-iframe-generator', locale);

    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        alternates,
        openGraph: {
            title: metadata.openGraph.title,
            description: metadata.openGraph.description,
            url: alternates.canonical,
        },
    };
}

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
    const t = await getTranslations({ locale, namespace: 'responsive' });

    return (
        <>
            <section className={styles.hero}>
                <h1 className={styles.title}>{t('title')}</h1>
                <p className={styles.subtitle}>{t('subtitle')}</p>
            </section>

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
