'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales, defaultLocale, type Locale } from '@/i18n/config';
import { Globe } from 'lucide-react';
import styles from './LanguageSwitcher.module.css';

const languageNames: Record<Locale, string> = {
    en: 'English',
    zh: '中文',
    es: 'Español',
    ja: '日本語',
    de: 'Deutsch',
    fr: 'Français',
};

const languageFlags: Record<Locale, string> = {
    en: '🇺🇸',
    zh: '🇨🇳',
    es: '🇪🇸',
    ja: '🇯🇵',
    de: '🇩🇪',
    fr: '🇫🇷',
};

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale() as Locale;

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as Locale;

        // Remove current locale prefix from pathname
        let pathWithoutLocale = pathname;
        for (const locale of locales) {
            if (pathname.startsWith(`/${locale}/`)) {
                pathWithoutLocale = pathname.slice(locale.length + 1);
                break;
            } else if (pathname === `/${locale}`) {
                pathWithoutLocale = '/';
                break;
            }
        }

        // Construct new path
        const newPath = newLocale === defaultLocale
            ? pathWithoutLocale
            : `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

        router.push(newPath);
    };

    return (
        <div className={styles.container}>
            <Globe size={16} className={styles.icon} />
            <select
                value={currentLocale}
                onChange={handleChange}
                className={styles.select}
                aria-label="Select language"
            >
                {locales.map((locale) => (
                    <option key={locale} value={locale}>
                        {languageFlags[locale]} {languageNames[locale]}
                    </option>
                ))}
            </select>
        </div>
    );
}
