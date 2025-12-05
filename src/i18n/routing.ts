import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
    locales,
    defaultLocale,
    localePrefix: 'as-needed', // 英文保持无前缀，其他语言有前缀
});
