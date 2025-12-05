// Re-export from new multi-language structure
export {
  getHomeContent,
  getGoogleMapsContent,
  getYoutubeContent,
  getResponsiveContent,
  type SEOContent,
  type SEOSection,
  type FAQItem
} from './seo-content/index';

// Legacy exports for backward compatibility
import { homeContent_en } from './seo-content/home';
import { googleMapsContent_en } from './seo-content/google-maps';
import { youtubeContent_en } from './seo-content/youtube';
import { responsiveContent_en } from './seo-content/responsive';

export const homeContent = homeContent_en;
export const googleMapsContent = googleMapsContent_en;
export const youtubeContent = youtubeContent_en;
export const responsiveContent = responsiveContent_en;
