import { Locale } from '@/i18n/config';
import { SEOContent } from './home';

// English content
export const responsiveContent_en: SEOContent = {
    title: "Complete Guide to Responsive Iframes",
    sections: [
        {
            title: "Introduction",
            content: `
        <p>In a mobile-first world, <strong>responsive iframes</strong> are non-negotiable. With over 50% of web traffic coming from mobile devices, a fixed-width iframe will break your layout and frustrate users.</p>
        <p>Our <strong>Responsive Iframe Generator</strong> solves this by creating embed codes that automatically adapt to any screen size while maintaining the correct aspect ratio.</p>
      `
        },
        {
            title: "Two Methods Explained",
            content: `
        <p>We offer two ways to make iframes responsive:</p>
        <ul>
          <li><strong>Modern CSS (aspect-ratio):</strong> Uses the new <code>aspect-ratio</code> CSS property. It's clean, requires less code, and is supported by all modern browsers. Best for new projects.</li>
          <li><strong>Legacy Hack (padding-bottom):</strong> The classic "padding-hack" uses a wrapper div with a percentage-based padding-bottom to force an aspect ratio. It's 100% compatible with even the oldest browsers (like Internet Explorer).</li>
        </ul>
      `
        },
        {
            title: "Step-by-Step Tutorial",
            content: `
        <ol>
          <li><strong>Choose Method:</strong> Select "Modern CSS" for cleaner code or "Legacy Hack" for maximum compatibility.</li>
          <li><strong>Set Aspect Ratio:</strong> Common ratios are 16:9 (video), 4:3 (standard), 1:1 (square), or 21:9 (ultrawide).</li>
          <li><strong>Max Width:</strong> Optionally set a maximum width (e.g., 800px) to prevent the iframe from getting too large on desktop screens.</li>
          <li><strong>Test:</strong> Use the preview to see how it behaves on different screen sizes.</li>
        </ol>
      `
        },
        {
            title: "Common Aspect Ratios",
            content: `
        <ul>
          <li><strong>16:9:</strong> The standard for YouTube videos and most modern media.</li>
          <li><strong>4:3:</strong> Common for older videos, presentations, or standard documents.</li>
          <li><strong>1:1:</strong> Perfect for Instagram posts, maps, or square widgets.</li>
          <li><strong>21:9:</strong> Ultrawide format, great for cinematic content.</li>
        </ul>
      `
        },
        {
            title: "Troubleshooting",
            content: `
        <p><strong>Content Overflow:</strong> If the content inside the iframe is wider than the iframe itself, you might see scrollbars. Ensure the source content is also responsive.</p>
        <p><strong>Mobile Scrolling:</strong> On iOS, scrolling inside an iframe can sometimes be tricky. Using the "Legacy Hack" often provides a more stable scrolling experience on older iPhones.</p>
      `
        }
    ],
    faq: [
        {
            question: "What is the difference between Modern and Legacy methods?",
            answer: "Modern uses the 'aspect-ratio' CSS property which is cleaner but requires modern browsers. Legacy uses a padding trick that works everywhere but requires more HTML code."
        },
        {
            question: "How do I calculate the aspect ratio?",
            answer: "Divide the height by the width. For example, 9 / 16 = 0.5625 (56.25%). Our tool calculates this automatically for you."
        },
        {
            question: "Can I limit how wide the iframe gets?",
            answer: "Yes, use the 'Max Width' setting to ensure the iframe doesn't stretch too wide on large desktop screens."
        }
    ]
};

// Chinese content
export const responsiveContent_zh: SEOContent = {
    title: "响应式 Iframe 完全指南",
    sections: [
        {
            title: "简介",
            content: `
        <p>在移动优先的世界中，<strong>响应式 iframe</strong> 是不可或缺的。超过 50% 的网络流量来自移动设备，固定宽度的 iframe 会破坏您的布局并让用户感到沮丧。</p>
        <p>我们的 <strong>响应式 Iframe 生成器</strong>通过创建自动适应任何屏幕尺寸同时保持正确宽高比的嵌入代码来解决这个问题。</p>
      `
        },
        {
            title: "两种方法详解",
            content: `
        <p>我们提供两种使 iframe 响应式的方法：</p>
        <ul>
          <li><strong>现代 CSS (aspect-ratio)：</strong>使用新的 <code>aspect-ratio</code> CSS 属性。它干净、需要更少的代码，并且所有现代浏览器都支持。最适合新项目。</li>
          <li><strong>传统方案 (padding-bottom)：</strong>经典的"padding-hack"使用带有基于百分比的 padding-bottom 的包装 div 来强制宽高比。它与最古老的浏览器（如 Internet Explorer）100% 兼容。</li>
        </ul>
      `
        },
        {
            title: "分步教程",
            content: `
        <ol>
          <li><strong>选择方法：</strong>选择"现代 CSS"以获得更干净的代码，或选择"传统方案"以获得最大兼容性。</li>
          <li><strong>设置宽高比：</strong>常见比例有 16:9（视频）、4:3（标准）、1:1（正方形）或 21:9（超宽）。</li>
          <li><strong>最大宽度：</strong>可选择设置最大宽度（例如 800px）以防止 iframe 在桌面屏幕上变得太大。</li>
          <li><strong>测试：</strong>使用预览查看它在不同屏幕尺寸上的表现。</li>
        </ol>
      `
        },
        {
            title: "常见宽高比",
            content: `
        <ul>
          <li><strong>16:9：</strong>YouTube 视频和大多数现代媒体的标准。</li>
          <li><strong>4:3：</strong>常用于较旧的视频、演示文稿或标准文档。</li>
          <li><strong>1:1：</strong>非常适合 Instagram 帖子、地图或正方形小部件。</li>
          <li><strong>21:9：</strong>超宽格式，非常适合电影内容。</li>
        </ul>
      `
        },
        {
            title: "故障排除",
            content: `
        <p><strong>内容溢出：</strong>如果 iframe 内的内容比 iframe 本身宽，您可能会看到滚动条。确保源内容也是响应式的。</p>
        <p><strong>移动端滚动：</strong>在 iOS 上，iframe 内的滚动有时会很棘手。使用"传统方案"通常可在旧款 iPhone 上提供更稳定的滚动体验。</p>
      `
        }
    ],
    faq: [
        {
            question: "现代方法和传统方法有什么区别？",
            answer: "现代方法使用 'aspect-ratio' CSS 属性，更干净但需要现代浏览器。传统方法使用 padding 技巧，可在任何地方工作，但需要更多 HTML 代码。"
        },
        {
            question: "如何计算宽高比？",
            answer: "将高度除以宽度。例如，9 / 16 = 0.5625（56.25%）。我们的工具会自动为您计算。"
        },
        {
            question: "我可以限制 iframe 的宽度吗？",
            answer: "可以，使用\"最大宽度\"设置来确保 iframe 在大型桌面屏幕上不会拉伸得太宽。"
        }
    ]
};

// Get content by locale
export function getResponsiveContent(locale: Locale): SEOContent {
    switch (locale) {
        case 'zh':
            return responsiveContent_zh;
        case 'en':
        default:
            return responsiveContent_en;
    }
}
