import { Locale } from '@/i18n/config';
import { SEOContent } from './home';

// English content
export const googleMapsContent_en: SEOContent = {
    title: "Google Map Embed Generator Guide",
    sections: [
        {
            title: "How to Embed Google Maps on Your Website",
            content: `
        <p>Embedding a <strong>Google Map</strong> helps customers find your location faster. The <strong>Google Map embed generator</strong> on this page outputs clean iframe code without an API key, so you can add maps to any site in seconds.</p>
      `
        },
        {
            title: "Quick Steps to Embed Google Map",
            content: `
        <ol>
          <li><strong>Enter Location:</strong> Type your business address, name, or coordinates.</li>
          <li><strong>Customize Map:</strong> Adjust zoom level (10-18) and choose Roadmap, Satellite, or Hybrid map types.</li>
          <li><strong>Set Dimensions:</strong> Pick presets or set custom width/height for responsive embeds.</li>
          <li><strong>Copy Code:</strong> Copy your Google Map embed code and paste it into your website HTML.</li>
        </ol>
      `
        },
        {
            title: "Google Map Embed Code Features",
            content: `
        <h3>No API Key Required</h3>
        <p>The generator outputs a standard iframe, so you avoid Google Cloud billing and API setup.</p>
        <h3>Responsive Map Embed</h3>
        <p>Enable the responsive option to output a fluid-width iframe that scales on mobile, tablet, and desktop.</p>
        <h3>Custom Zoom and Map Type</h3>
        <ul>
          <li><strong>Zoom 15-18:</strong> Show specific buildings and entrances.</li>
          <li><strong>Zoom 10-12:</strong> Give city or district context.</li>
          <li><strong>Roadmap / Satellite / Hybrid:</strong> Pick the map style that matches your use case.</li>
        </ul>
      `
        },
        {
            title: "Why Use Our Google Maps Embed Generator?",
            content: `
        <p>Google's "Share > Embed a map" is basic. Our <strong>google maps embed generator</strong> adds:</p>
        <ul>
          <li><strong>No API key:</strong> Ship maps fast without billing setup.</li>
          <li><strong>Custom dimensions:</strong> Presets for mobile/tablet/desktop or manual sizing.</li>
          <li><strong>Responsive embed:</strong> One-click responsive option for all screens.</li>
          <li><strong>Lazy loading:</strong> <code>loading="lazy"</code> added for better performance.</li>
          <li><strong>Clean code:</strong> Optimized iframe ready to paste.</li>
        </ul>
      `
        },
        {
            title: "Google Maps Embed Best Practices",
            content: `
        <h3>Use Lazy Loading</h3>
        <p><code>loading="lazy"</code> keeps your page fast until users scroll to the map.</p>
        <h3>Make It Responsive</h3>
        <p>Select the responsive option so the <strong>google map embed</strong> fits every screen.</p>
        <h3>Choose the Right Zoom</h3>
        <ul>
          <li><strong>15-18:</strong> Storefronts and points of interest.</li>
          <li><strong>12-14:</strong> Neighborhoods and districts.</li>
          <li><strong>10-11:</strong> City-wide or regional context.</li>
        </ul>
      `
        }
    ],
    faq: [
        {
            question: "How do I embed a Google Map on my website?",
            answer: "Use the Google Map embed generator: enter your location, pick zoom and size, then copy the iframe code. Paste it into your site HTML—no API key required."
        },
        {
            question: "Do I need an API key to embed Google Maps?",
            answer: "No. Standard iframe embeds from this generator do not require API keys or billing, so they work immediately."
        },
        {
            question: "How do I get Google Map embed code?",
            answer: "Enter your address, adjust zoom and dimensions, and click copy. You can also use Google Maps \"Share > Embed a map,\" but the generator adds responsive design and lazy loading."
        },
        {
            question: "Is embedding Google Maps free?",
            answer: "Yes. Using iframe embed code is free and does not need an API key. Our tool remains free with unlimited use."
        },
        {
            question: "How do I make my embedded Google Map responsive?",
            answer: "Enable the responsive option in the generator so the iframe automatically adapts to mobile, tablet, and desktop widths."
        }
    ]
};

// Chinese content
export const googleMapsContent_zh: SEOContent = {
    title: "Google 地图嵌入生成器指南",
    sections: [
        {
            title: "如何在您的网站上嵌入 Google 地图",
            content: `
        <p>嵌入 <strong>Google 地图</strong>可帮助客户更快找到您的位置。本页面的 <strong>Google 地图嵌入生成器</strong>无需 API 密钥即可输出干净的 iframe 代码，让您可以在几秒钟内将地图添加到任何网站。</p>
      `
        },
        {
            title: "嵌入 Google 地图的快速步骤",
            content: `
        <ol>
          <li><strong>输入位置：</strong>输入您的企业地址、名称或坐标。</li>
          <li><strong>自定义地图：</strong>调整缩放级别（10-18）并选择道路地图、卫星或混合地图类型。</li>
          <li><strong>设置尺寸：</strong>选择预设或设置自定义宽度/高度以实现响应式嵌入。</li>
          <li><strong>复制代码：</strong>复制您的 Google 地图嵌入代码并将其粘贴到您网站的 HTML 中。</li>
        </ol>
      `
        },
        {
            title: "Google 地图嵌入代码功能",
            content: `
        <h3>无需 API 密钥</h3>
        <p>生成器输出标准 iframe，因此您无需 Google Cloud 计费和 API 设置。</p>
        <h3>响应式地图嵌入</h3>
        <p>启用响应式选项可输出流式宽度 iframe，可在移动设备、平板电脑和桌面上缩放。</p>
        <h3>自定义缩放和地图类型</h3>
        <ul>
          <li><strong>缩放 15-18：</strong>显示特定建筑物和入口。</li>
          <li><strong>缩放 10-12：</strong>提供城市或地区背景。</li>
          <li><strong>道路地图/卫星/混合：</strong>选择与您的用例匹配的地图样式。</li>
        </ul>
      `
        },
        {
            title: "为什么使用我们的 Google 地图嵌入生成器？",
            content: `
        <p>Google 的"分享 > 嵌入地图"功能很基础。我们的 <strong>Google 地图嵌入生成器</strong>添加了：</p>
        <ul>
          <li><strong>无需 API 密钥：</strong>无需设置计费即可快速部署地图。</li>
          <li><strong>自定义尺寸：</strong>移动/平板/桌面预设或手动调整大小。</li>
          <li><strong>响应式嵌入：</strong>一键响应式选项，适用于所有屏幕。</li>
          <li><strong>延迟加载：</strong>添加 <code>loading="lazy"</code> 以获得更好的性能。</li>
          <li><strong>干净代码：</strong>优化的 iframe，可直接粘贴使用。</li>
        </ul>
      `
        },
        {
            title: "Google 地图嵌入最佳实践",
            content: `
        <h3>使用延迟加载</h3>
        <p><code>loading="lazy"</code> 可保持页面快速加载，直到用户滚动到地图位置。</p>
        <h3>使其响应式</h3>
        <p>选择响应式选项，使 <strong>Google 地图嵌入</strong>适合每个屏幕。</p>
        <h3>选择合适的缩放级别</h3>
        <ul>
          <li><strong>15-18：</strong>店面和兴趣点。</li>
          <li><strong>12-14：</strong>社区和地区。</li>
          <li><strong>10-11：</strong>全市或区域背景。</li>
        </ul>
      `
        }
    ],
    faq: [
        {
            question: "如何在我的网站上嵌入 Google 地图？",
            answer: "使用 Google 地图嵌入生成器：输入您的位置，选择缩放和大小，然后复制 iframe 代码。将其粘贴到您网站的 HTML 中——无需 API 密钥。"
        },
        {
            question: "嵌入 Google 地图需要 API 密钥吗？",
            answer: "不需要。此生成器的标准 iframe 嵌入不需要 API 密钥或计费，因此可以立即使用。"
        },
        {
            question: "如何获取 Google 地图嵌入代码？",
            answer: "输入您的地址，调整缩放和尺寸，然后点击复制。您也可以使用 Google 地图的\"分享 > 嵌入地图\"，但生成器添加了响应式设计和延迟加载。"
        },
        {
            question: "嵌入 Google 地图是免费的吗？",
            answer: "是的。使用 iframe 嵌入代码是免费的，不需要 API 密钥。我们的工具保持免费，无限使用。"
        },
        {
            question: "如何使嵌入的 Google 地图响应式？",
            answer: "在生成器中启用响应式选项，使 iframe 自动适应移动、平板和桌面宽度。"
        }
    ]
};

// Get content by locale
export function getGoogleMapsContent(locale: Locale): SEOContent {
    switch (locale) {
        case 'zh':
            return googleMapsContent_zh;
        case 'en':
        default:
            return googleMapsContent_en;
    }
}
