import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

type ContentSectionProps = {
    title: string;
    children: React.ReactNode;
    id?: string;
};

export function ContentSection({ title, children, id }: ContentSectionProps) {
    return (
        <section id={id} style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle as="h2" style={{ fontSize: '1.5rem' }}>{title}</CardTitle>
                </CardHeader>
                <CardContent className="content-text" style={{ lineHeight: '1.7' }}>
                    {children}
                </CardContent>
            </Card>
        </section>
    );
}
