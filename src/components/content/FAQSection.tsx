import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { StructuredData } from '@/components/seo/StructuredData';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
    question: string;
    answer: string;
};

type FAQSectionProps = {
    items: FAQItem[];
};

export function FAQSection({ items }: FAQSectionProps) {
    const t = useTranslations('faq');
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <section style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <StructuredData data={schema} />
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle as="h2" style={{ fontSize: '1.5rem' }}>{t('title')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {items.map((item, index) => (
                            <details
                                key={index}
                                className="group"
                                style={{
                                    borderBottom: index < items.length - 1 ? '1px solid hsl(var(--border))' : 'none',
                                    paddingBottom: index < items.length - 1 ? '1rem' : '0',
                                }}
                            >
                                <summary
                                    style={{
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        fontSize: '1.1rem',
                                        listStyle: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '0.5rem 0',
                                    }}
                                >
                                    {item.question}
                                    <ChevronDown
                                        size={20}
                                        style={{
                                            opacity: 0.5,
                                            transition: 'transform 0.2s ease',
                                        }}
                                        className="chevron-icon"
                                    />
                                </summary>
                                <div
                                    className="content-text"
                                    style={{ marginTop: '0.5rem', lineHeight: '1.6' }}
                                    dangerouslySetInnerHTML={{ __html: item.answer }}
                                />
                            </details>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
