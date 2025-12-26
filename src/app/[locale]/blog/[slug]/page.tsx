import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ContentSection } from '@/components/content/ContentSection';
import { blogPosts } from '@/data/blog-posts';
import { ArrowLeft } from 'lucide-react';
import { SyntaxHighlighter } from '@/components/blog/SyntaxHighlighter';

interface Props {
    params: Promise<{
        slug: string;
        locale: string;
    }>;
}

import { locales } from '@/i18n/config';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    // Best Practice for Non-Localized Content in Multilingual Site:
    // 1. Canonical points to the 'master' version (English) to consolidate ranking signals.
    // 2. alternate languages point to their respective URLs so users are directed to the correct nav language.
    const languages: Record<string, string> = {};
    locales.forEach((locale) => {
        // Assuming 'en' is default and has no prefix (as-needed strategy)
        languages[locale] = locale === 'en' ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`;
    });

    return {
        title: `${post.title} - Iframe Generator`,
        description: post.excerpt,
        alternates: {
            canonical: `/blog/${post.slug}`,
            languages,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 max-w-4xl py-8">
            <SyntaxHighlighter />
            <Link
                href="/blog"
                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
                <ArrowLeft size={20} className="mr-2" />
                Back to Blog
            </Link>

            <article>
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                    </div>
                </header>

                <ContentSection title="">
                    <div
                        className="prose dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </ContentSection>
            </article>
        </div>
    );
}
