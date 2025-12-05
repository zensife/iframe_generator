import { Locale } from '@/i18n/config';
import { PageMetadata } from './index';

const metadata_en: PageMetadata = {
    title: 'Responsive Iframe Generator - Mobile-Friendly Embed Code',
    description: 'Create responsive iframe codes that adapt to any screen size. Modern CSS aspect-ratio and legacy padding-bottom methods. Free tool with live preview.',
    keywords: 'responsive iframe generator, responsive iframe code generator, iframe responsive generator, mobile-friendly iframe',
    openGraph: {
        title: 'Responsive Iframe Generator - Mobile-Friendly Embed Code',
        description: 'Create responsive iframe embed codes that automatically adapt to any screen size. Support for modern CSS aspect-ratio and legacy padding-bottom methods.',
    }
};

const metadata_zh: PageMetadata = {
    title: '响应式 Iframe 生成器 - 同时也移动友好的嵌入代码',
    description: '创建适应任何屏幕尺寸的响应式 iframe 代码。现代 CSS aspect-ratio 和传统的 padding-bottom 方法。带有实时预览的免费工具。',
    keywords: '响应式 iframe 生成器, 响应式 iframe 代码生成器, iframe 响应式生成器, 移动友好 iframe',
    openGraph: {
        title: '响应式 Iframe 生成器 - 同时也移动友好的嵌入代码',
        description: '创建适应任何屏幕尺寸的响应式 iframe 代码。现代 CSS aspect-ratio 和传统的 padding-bottom 方法。带有实时预览的免费工具。',
    }
};

const metadata_es: PageMetadata = {
    title: 'Generador de Iframe Responsivo - Código de incrustación compatible con móviles',
    description: 'Cree códigos iframe responsivos que se adapten a cualquier tamaño de pantalla. Métodos modernos CSS aspect-ratio y heredado padding-bottom. Herramienta gratuita con vista previa en vivo.',
    keywords: 'generador iframe responsivo, generador código iframe responsivo, generador responsivo iframe, iframe compatible móvil',
    openGraph: {
        title: 'Generador de Iframe Responsivo - Código de incrustación compatible con móviles',
        description: 'Cree códigos iframe responsivos que se adapten a cualquier tamaño de pantalla. Métodos modernos CSS aspect-ratio y heredado padding-bottom. Herramienta gratuita con vista previa en vivo.',
    }
};

const metadata_ja: PageMetadata = {
    title: 'レスポンシブ Iframe ジェネレーター - モバイルフレンドリーな埋め込みコード',
    description: 'あらゆる画面サイズに適応するレスポンシブ iframe コードを作成します。最新の CSS aspect-ratio と従来の padding-bottom メソッド。ライブプレビュー付きの無料ツール。',
    keywords: 'レスポンシブ iframe ジェネレーター, レスポンシブ iframe コード ジェネレーター, iframe レスポンシブ ジェネレーター, モバイルフレンドリー iframe',
    openGraph: {
        title: 'レスポンシブ Iframe ジェネレーター - モバイルフレンドリーな埋め込みコード',
        description: 'あらゆる画面サイズに適応するレスポンシブ iframe コードを作成します。最新の CSS aspect-ratio と従来の padding-bottom メソッド。ライブプレビュー付きの無料ツール。',
    }
};

const metadata_de: PageMetadata = {
    title: 'Responsiver Iframe-Generator - Mobilfreundlicher Einbettungscode',
    description: 'Erstellen Sie responsive Iframe-Codes, die sich jeder Bildschirmgröße anpassen. Moderne CSS aspect-ratio und Legacy padding-bottom Methoden. Kostenloses Tool mit Live-Vorschau.',
    keywords: 'responsiver iframe generator, responsiver iframe code generator, iframe responsiver generator, mobilfreundlicher iframe',
    openGraph: {
        title: 'Responsiver Iframe-Generator - Mobilfreundlicher Einbettungscode',
        description: 'Erstellen Sie responsive Iframe-Codes, die sich jeder Bildschirmgröße anpassen. Moderne CSS aspect-ratio und Legacy padding-bottom Methoden. Kostenloses Tool mit Live-Vorschau.',
    }
};

const metadata_fr: PageMetadata = {
    title: 'Générateur d\'Iframe Réactif - Code d\'intégration adapté aux mobiles',
    description: 'Créez des codes iframe réactifs qui s\'adaptent à toutes les tailles d\'écran. Méthodes CSS aspect-ratio modernes et padding-bottom héritées. Outil gratuit avec aperçu en direct.',
    keywords: 'générateur iframe réactif, générateur code iframe réactif, générateur réactif iframe, iframe adapté mobile',
    openGraph: {
        title: 'Générateur d\'Iframe Réactif - Code d\'intégration adapté aux mobiles',
        description: 'Créez des codes iframe réactifs qui s\'adaptent à toutes les tailles d\'écran. Méthodes CSS aspect-ratio modernes et padding-bottom héritées. Outil gratuit avec aperçu en direct.',
    }
};

export function getResponsiveMetadata(locale: Locale): PageMetadata {
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
