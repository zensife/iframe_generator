import { Metadata } from 'next';
import { ContentSection } from '@/components/content/ContentSection';
import { Card, CardContent } from '@/components/ui/Card';
import { Mail } from 'lucide-react';
import { getContactContent } from '@/data/static-content';
import { Locale } from '@/i18n/config';

type Props = {
    params: Promise<{ locale: string }>;
};

import { getSEOTags } from '@/lib/seo';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const content = getContactContent(locale as Locale);
    const alternates = getSEOTags('/contact', locale);

    return {
        title: `${content.title} - Iframe Generator`,
        description: content.description,
        alternates,
    };
}

export default async function ContactPage({ params }: Props) {
    const { locale } = await params;
    const content = getContactContent(locale as Locale);

    return (
        <div className="container mx-auto px-4 max-w-4xl py-8">
            <ContentSection title={content.title}>
                <div className="prose dark:prose-invert max-w-none mb-8">
                    <p className="text-lg">
                        {content.intro}
                    </p>
                </div>

                <div className="flex justify-center">
                    <Card className="hover:border-primary/50 transition-colors max-w-md w-full">
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">{content.email.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {content.email.description}
                            </p>
                            <a
                                href="mailto:support@iframegenerator.org"
                                className="text-primary hover:underline font-medium text-lg"
                            >
                                support@iframegenerator.org
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </ContentSection>
        </div>
    );
}
