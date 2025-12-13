'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
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
    pt: 'Português',
    it: 'Italiano',
    ru: 'Русский',
};

const languageFlags: Record<Locale, string> = {
    en: '🇺🇸',
    zh: '🇨🇳',
    es: '🇪🇸',
    ja: '🇯🇵',
    de: '🇩🇪',
    fr: '🇫🇷',
    pt: '🇧🇷',
    it: '🇮🇹',
    ru: '🇷🇺',
};

export function LanguageSwitcher() {
    const pathname = usePathname(); // Returns pathname without locale prefix
    const router = useRouter();
    const currentLocale = useLocale() as Locale;

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as Locale;

        // router.replace will handle locale prefix automatically
        router.replace(pathname, { locale: newLocale });
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
