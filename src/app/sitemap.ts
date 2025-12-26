import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n/config';

const baseUrl = 'https://iframegenerator.org';

// Define all routes with their priorities and change frequencies
const routes = [
    // Core Tool Pages (Highest Priority)
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/google-maps-iframe-generator', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/youtube-embed-code-generator', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/responsive-iframe-generator', changeFrequency: 'weekly' as const, priority: 0.9 },

    // Information Pages
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.5 },

    // Legal Pages (Lower Priority)
    { path: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms-of-service', changeFrequency: 'yearly' as const, priority: 0.3 },
];

import { blogPosts } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries: MetadataRoute.Sitemap = [];

    // 1. Core Pages (Localized)
    // We generate /en, /zh, /es variants for these as they are fully translated
    routes.forEach((route) => {
        locales.forEach((locale) => {
            const url = locale === defaultLocale
                ? `${baseUrl}${route.path}`
                : `${baseUrl}/${locale}${route.path}`;

            const priorityMultiplier = locale === defaultLocale ? 1 : 0.9;

            sitemapEntries.push({
                url,
                lastModified: new Date(),
                changeFrequency: route.changeFrequency,
                priority: route.priority * priorityMultiplier,
            });
        });
    });

    // 2. Blog Pages (English Only)
    // We ONLY output the default locale URL (Canonical) to prevent "Dirty Sitemap" warnings.
    // Even though /zh/blog/slug exists, it effectively redirects SE authority to /blog/slug via canonical tag.

    // Blog Index
    sitemapEntries.push({
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    });

    // Blog Posts
    blogPosts.forEach((post) => {
        sitemapEntries.push({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly',
            priority: 0.7,
        });
    });

    return sitemapEntries;
}
