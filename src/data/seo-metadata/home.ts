import { Locale } from '@/i18n/config';
import { PageMetadata } from './index';

const metadata_en: PageMetadata = {
    title: 'Iframe Generator - Free Online Embed Code Tools',
    description: 'Generate responsive iframe codes for websites, Google Maps, and YouTube videos. Free, SEO-friendly embed code generator with live preview.',
    keywords: 'iframe generator, google maps embed, youtube embed code, responsive iframe, embed code generator',
    openGraph: {
        title: 'Iframe Generator - Free Online Embed Code Tools',
        description: 'Generate responsive iframe codes for websites, Google Maps, and YouTube videos. Free, SEO-friendly embed code generator with live preview.',
    }
};

const metadata_zh: PageMetadata = {
    title: 'Iframe 生成器 - 免费在线嵌入代码工具',
    description: '生成用于网站、Google 地图和 YouTube 视频的响应式 iframe 代码。免费、SEO友好的嵌入代码生成器，带有实时预览。',
    keywords: 'iframe 生成器, google 地图嵌入, youtube 嵌入代码, 响应式 iframe, 嵌入代码生成器',
    openGraph: {
        title: 'Iframe 生成器 - 免费在线嵌入代码工具',
        description: '生成用于网站、Google 地图和 YouTube 视频的响应式 iframe 代码。免费、SEO友好的嵌入代码生成器，带有实时预览。',
    }
};

const metadata_es: PageMetadata = {
    title: 'Generador de Iframe - Herramientas gratuitas de código de incrustación',
    description: 'Genere códigos iframe responsivos para sitios web, Google Maps y videos de YouTube. Generador de código de incrustación gratuito y compatible con SEO con vista previa en vivo.',
    keywords: 'generador de iframe, incrustar google maps, código de incrustación youtube, iframe responsivo, generador de código de incrustación',
    openGraph: {
        title: 'Generador de Iframe - Herramientas gratuitas de código de incrustación',
        description: 'Genere códigos iframe responsivos para sitios web, Google Maps y videos de YouTube. Generador de código de incrustación gratuito y compatible con SEO con vista previa en vivo.',
    }
};

const metadata_ja: PageMetadata = {
    title: 'Iframe ジェネレーター - 無料オンライン埋め込みコードツール',
    description: 'ウェブサイト、Google マップ、YouTube 動画用のレスポンシブな iframe コードを生成します。ライブプレビュー付きの無料、SEO フレンドリーな埋め込みコードジェネレーター。',
    keywords: 'iframe ジェネレーター, google マップ 埋め込み, youtube 埋め込みコード, レスポンシブ iframe, 埋め込みコードジェネレーター',
    openGraph: {
        title: 'Iframe ジェネレーター - 無料オンライン埋め込みコードツール',
        description: 'ウェブサイト、Google マップ、YouTube 動画用のレスポンシブな iframe コードを生成します。ライブプレビュー付きの無料、SEO フレンドリーな埋め込みコードジェネレーター。',
    }
};

const metadata_de: PageMetadata = {
    title: 'Iframe-Generator - Kostenlose Online-Einbettungscode-Tools',
    description: 'Generieren Sie responsive Iframe-Codes für Websites, Google Maps und YouTube-Videos. Kostenloser, SEO-freundlicher Einbettungscode-Generator mit Live-Vorschau.',
    keywords: 'iframe generator, google maps einbetten, youtube einbettungscode, responsiver iframe, einbettungscode generator',
    openGraph: {
        title: 'Iframe-Generator - Kostenlose Online-Einbettungscode-Tools',
        description: 'Generieren Sie responsive Iframe-Codes für Websites, Google Maps und YouTube-Videos. Kostenloser, SEO-freundlicher Einbettungscode-Generator mit Live-Vorschau.',
    }
};

const metadata_fr: PageMetadata = {
    title: 'Générateur d\'Iframe - Outils de code d\'intégration gratuits en ligne',
    description: 'Générez des codes iframe réactifs pour les sites Web, Google Maps et les vidéos YouTube. Générateur de code d\'intégration gratuit et compatible SEO avec aperçu en direct.',
    keywords: 'générateur d\'iframe, intégrer google maps, code d\'intégration youtube, iframe réactif, générateur de code d\'intégration',
    openGraph: {
        title: 'Générateur d\'Iframe - Outils de code d\'intégration gratuits en ligne',
        description: 'Générez des codes iframe réactifs pour les sites Web, Google Maps et les vidéos YouTube. Générateur de code d\'intégration gratuit et compatible SEO avec aperçu en direct.',
    }
};

export function getHomeMetadata(locale: Locale): PageMetadata {
    switch (locale) {
        case 'zh': return metadata_zh;
        case 'es': return metadata_es;
        case 'ja': return metadata_ja;
        case 'de': return metadata_de;
        case 'fr': return metadata_fr;
        case 'en':
        default: return metadata_en;
    }
}
