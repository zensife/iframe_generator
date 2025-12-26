import { Metadata } from 'next';
import Link from 'next/link';
import { ContentSection } from '@/components/content/ContentSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { blogPosts } from '@/data/blog-posts';

import { locales } from '@/i18n/config';

export function generateMetadata(): Metadata {
    const languages: Record<string, string> = {};
    locales.forEach((locale) => {
        languages[locale] = locale === 'en' ? '/blog' : `/${locale}/blog`;
    });

    return {
        title: 'Blog - Iframe Generator',
        description: 'Read our latest guides and tutorials on iframes, embedding, and web development.',
        alternates: {
            canonical: '/blog',
            languages,
        },
    };
}

export default function BlogIndex() {
    return (
        <div className="container mx-auto px-4 max-w-4xl py-8">
            <ContentSection title="Latest Articles">
                <div className="grid gap-6">
                    {blogPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                                <CardHeader>
                                    <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </ContentSection>
        </div>
    );
}
