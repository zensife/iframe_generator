import { Metadata } from 'next';
import { ContentSection } from '@/components/content/ContentSection';
import { getAboutContent } from '@/data/static-content';
import { Locale } from '@/i18n/config';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const content = getAboutContent(locale as Locale);

    return {
        title: `${content.title} - Iframe Generator`,
        description: content.description,
    };
}

export default async function AboutPage({ params }: Props) {
    const { locale } = await params;
    const content = getAboutContent(locale as Locale);
    const { sections } = content;

    return (
        <div className="container mx-auto px-4 max-w-4xl py-8">
            <ContentSection title={content.title}>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg mb-6" dangerouslySetInnerHTML={{ __html: sections.intro }} />

                    <h3 className="text-xl font-semibold mb-3">{sections.mission.title}</h3>
                    <p className="mb-6">{sections.mission.content}</p>

                    <h3 className="text-xl font-semibold mb-3">{sections.whyBuilt.title}</h3>
                    <p className="mb-6" dangerouslySetInnerHTML={{ __html: sections.whyBuilt.content }} />

                    <h3 className="text-xl font-semibold mb-3">{sections.offer.title}</h3>
                    <ul className="list-disc pl-6 mb-6">
                        {sections.offer.items.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>

                    <p>{sections.conclusion}</p>
                </div>
            </ContentSection>
        </div>
    );
}
