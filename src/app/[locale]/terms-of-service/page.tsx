import { Metadata } from 'next';
import { ContentSection } from '@/components/content/ContentSection';
import { getTermsOfServiceContent } from '@/data/static-content';
import { Locale } from '@/i18n/config';

type Props = {
    params: Promise<{ locale: string }>;
};

import { getSEOTags } from '@/lib/seo';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const content = getTermsOfServiceContent(locale as Locale);
    const alternates = getSEOTags('/terms-of-service', locale);

    return {
        title: `${content.title} - Iframe Generator`,
        description: 'Terms of Service for Iframe Generator. Rules and regulations for using our website.',
        alternates,
    };
}

export default async function TermsOfService({ params }: Props) {
    const { locale } = await params;
    const content = getTermsOfServiceContent(locale as Locale);

    return (
        <div className="container mx-auto px-4 max-w-4xl py-8">
            <ContentSection title={content.title}>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="mb-4">{content.lastUpdated}</p>

                    {content.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                            <p className="mb-4">{section.content}</p>
                        </div>
                    ))}
                </div>
            </ContentSection>
        </div>
    );
}
