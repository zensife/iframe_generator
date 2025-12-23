import { locales, defaultLocale } from '@/i18n/config';

type SEOTags = {
    canonical: string;
    languages: Record<string, string>;
};

export function getSEOTags(path: string, currentLocale: string): SEOTags {
    const baseUrl = 'https://iframegenerator.org';

    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    // For root path, we don't want trailing slash issues
    const routePath = cleanPath === '/' ? '' : cleanPath;

    const languages: Record<string, string> = {};

    locales.forEach((locale) => {
        const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
        languages[locale] = `${baseUrl}${localePrefix}${routePath}`;
    });

    // Add x-default for users with unsupported languages (fallback to English)
    languages['x-default'] = `${baseUrl}${routePath}`;

    const currentLocalePrefix = currentLocale === defaultLocale ? '' : `/${currentLocale}`;

    return {
        canonical: `${baseUrl}${currentLocalePrefix}${routePath}`,
        languages,
    };
}
