export const locales = ['en', 'zh', 'es', 'ja', 'de', 'fr', 'pt', 'it', 'ru'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];
