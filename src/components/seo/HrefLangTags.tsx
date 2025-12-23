import { locales, defaultLocale } from '@/i18n/config';

type HrefLangProps = {
    pathname: string; // The path without locale prefix, e.g., '/google-maps-iframe-generator'
};

/**
 * Generates hreflang link elements for SEO
 * Should be used in the <head> section of each page
 */
export function HrefLangTags({ pathname }: HrefLangProps) {
    const baseUrl = 'https://iframegenerator.org';
    const path = pathname === '/' ? '' : pathname;

    return (
        <>
            {locales.map((locale) => {
                const url = locale === defaultLocale
                    ? `${baseUrl}${path}`
                    : `${baseUrl}/${locale}${path}`;

                return (
                    <link
                        key={locale}
                        rel="alternate"
                        hrefLang={locale}
                        href={url}
                    />
                );
            })}
            {/* x-default points to the default language version */}
            <link
                rel="alternate"
                hrefLang="x-default"
                href={`${baseUrl}${path}`}
            />
        </>
    );
}
