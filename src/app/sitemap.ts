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

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries: MetadataRoute.Sitemap = [];

    routes.forEach((route) => {
        // Generate entries for all locales
        locales.forEach((locale) => {
            // For default locale (English), don't add prefix
            const url = locale === defaultLocale
                ? `${baseUrl}${route.path}`
                : `${baseUrl}/${locale}${route.path}`;

            // Default locale gets slightly higher priority
            const priorityMultiplier = locale === defaultLocale ? 1 : 0.9;

            sitemapEntries.push({
                url,
                lastModified: new Date(),
                changeFrequency: route.changeFrequency,
                priority: route.priority * priorityMultiplier,
            });
        });
    });

    return sitemapEntries;
}
