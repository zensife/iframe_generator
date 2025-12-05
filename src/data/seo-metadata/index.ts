import { Locale } from '@/i18n/config';

export type PageMetadata = {
    title: string;
    description: string;
    keywords: string | string[];
    openGraph: {
        title: string;
        description: string;
        url?: string;
        type?: string;
    };
};

export { getHomeMetadata } from './home';
export { getGoogleMapsMetadata } from './google-maps';
export { getYoutubeMetadata } from './youtube';
export { getResponsiveMetadata } from './responsive';
