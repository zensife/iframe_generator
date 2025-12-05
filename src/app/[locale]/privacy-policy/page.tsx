import { Metadata } from 'next';
import { ContentSection } from '@/components/content/ContentSection';
import { getPrivacyPolicyContent } from '@/data/static-content';
import { Locale } from '@/i18n/config';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const content = getPrivacyPolicyContent(locale as Locale);

    return {
        title: `${content.title} - Iframe Generator`,
        description: 'Privacy Policy for Iframe Generator. Learn how we handle your data.',
        robots: {
            index: false,
            follow: true,
        },
    };
}

export default async function PrivacyPolicy({ params }: Props) {
    const { locale } = await params;
    const content = getPrivacyPolicyContent(locale as Locale);

    return (
        <div className="container mx-auto px-4 max-w-4xl py-8">
            <ContentSection title={content.title}>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="mb-4">{content.lastUpdated}</p>

                    {content.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                            {Array.isArray(section.content) ? (
                                section.content.map((paragraph, i) => (
                                    <p key={i} className="mb-4">{paragraph}</p>
                                ))
                            ) : (
                                <p className="mb-4">{section.content}</p>
                            )}
                            {section.list && (
                                <ul className="list-disc pl-6 mb-4">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </ContentSection>
        </div>
    );
}
