import { Locale } from '@/i18n/config';

export type SEOSection = {
  title: string;
  content: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SEOContent = {
  title: string;
  sections: SEOSection[];
  faq: FAQItem[];
};

// English content
export const homeContent_en: SEOContent = {
  title: "How to Use Iframe Generator",
  sections: [
    {
      title: "What is an Iframe?",
      content: `
        <p>An <strong>iframe</strong> (Inline Frame) is an HTML element that allows you to embed another document within the current HTML document. It's essentially a window into another website, enabling you to display external content like videos, maps, or even entire webpages without users leaving your site.</p>
        <p>Common use cases include:</p>
        <ul>
          <li>Embedding <strong>YouTube videos</strong> or other media players.</li>
          <li>Displaying <strong>Google Maps</strong> for business locations.</li>
          <li>Integrating third-party widgets like social media feeds or payment forms.</li>
          <li>Showing external documents or PDFs.</li>
        </ul>
      `
    },
    {
      title: "How to Generate Iframe Code",
      content: `
        <p>Using our free <strong>iframe generator</strong> is simple and requires no coding knowledge:</p>
        <ol>
          <li><strong>Enter the URL:</strong> Paste the web address (URL) of the content you want to embed in the "Source URL" field.</li>
          <li><strong>Adjust Settings:</strong> Customize the width, height, border, and scrolling options to fit your website's design.</li>
          <li><strong>Preview:</strong> Use the live preview to ensure everything looks perfect on desktop and mobile devices.</li>
          <li><strong>Copy Code:</strong> Click the "Copy" button to grab the generated HTML code and paste it into your website's source code.</li>
        </ol>
      `
    },
    {
      title: "Iframe Parameters Explained",
      content: `
        <p>Understanding the key parameters helps you optimize your embeds:</p>
        <ul>
          <li><strong>Width & Height:</strong> Define the dimensions of the iframe. Use pixels (px) for fixed sizes or percentages (%) for responsive layouts.</li>
          <li><strong>Sandbox:</strong> A security feature that restricts what the embedded content can do (e.g., preventing scripts or popups). Enable specific permissions only if necessary.</li>
          <li><strong>Loading:</strong> Set to "lazy" to defer loading the iframe until it's near the viewport, improving your page load speed and SEO.</li>
          <li><strong>Border & Scrolling:</strong> Control the visual appearance. Removing borders usually looks cleaner, while scrolling settings depend on the content length.</li>
        </ul>
      `
    },
    {
      title: "Making Iframes Responsive",
      content: `
        <p>In today's mobile-first world, a <strong>responsive iframe</strong> is crucial. Standard iframes have fixed dimensions, which can break layouts on smaller screens.</p>
        <p>Our tool offers a "Make Responsive" option that uses modern CSS <code>aspect-ratio</code> or the classic "padding-hack" to ensure your embedded content scales perfectly across all devices, from desktops to smartphones.</p>
      `
    },
    {
      title: "Common Iframe Issues",
      content: `
        <p>If your iframe isn't working, check these common problems:</p>
        <ul>
          <li><strong>X-Frame-Options:</strong> Some websites (like Google or Facebook) block embedding via headers. If you see a "refused to connect" error, the site likely disallows iframes.</li>
          <li><strong>Mixed Content:</strong> If your site is on HTTPS, ensure the embedded URL is also HTTPS. Browsers block insecure HTTP content on secure pages.</li>
          <li><strong>Mobile Usability:</strong> Ensure the embedded content itself is mobile-friendly, or it may look small or broken within the iframe.</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "Is this Iframe Generator free?",
      answer: "Yes, this tool is 100% free to use for generating HTML iframe codes for any website."
    },
    {
      question: "How do I make my iframe responsive?",
      answer: "Simply check the 'Make Responsive' box in the settings. This will generate a wrapper div with CSS that maintains the aspect ratio on any screen size."
    },
    {
      question: "Why is my iframe not loading?",
      answer: "The most common reason is that the source website has set an 'X-Frame-Options' header to 'SAMEORIGIN' or 'DENY', preventing it from being embedded on other sites."
    },
    {
      question: "Can I embed YouTube videos with this?",
      answer: "Yes, but for the best experience, we recommend using our dedicated <a href='/youtube-embed-code-generator'>YouTube Embed Code Generator</a> which offers specific options like autoplay and loop."
    },
    {
      question: "Is it SEO friendly?",
      answer: "Yes. We include options for 'loading=\"lazy\"' to improve performance and 'title' attributes for accessibility, both of which are important for SEO."
    }
  ]
};

// Chinese content
export const homeContent_zh: SEOContent = {
  title: "如何使用 Iframe 生成器",
  sections: [
    {
      title: "什么是 Iframe？",
      content: `
        <p><strong>iframe</strong>（内联框架）是一个 HTML 元素，允许您在当前 HTML 文档中嵌入另一个文档。它本质上是通往另一个网站的窗口，使您能够显示外部内容，如视频、地图，甚至整个网页，而无需用户离开您的网站。</p>
        <p>常见用例包括：</p>
        <ul>
          <li>嵌入 <strong>YouTube 视频</strong>或其他媒体播放器。</li>
          <li>显示 <strong>Google 地图</strong>用于企业位置。</li>
          <li>集成第三方小部件，如社交媒体信息流或支付表单。</li>
          <li>显示外部文档或 PDF。</li>
        </ul>
      `
    },
    {
      title: "如何生成 Iframe 代码",
      content: `
        <p>使用我们免费的 <strong>iframe 生成器</strong>非常简单，无需编程知识：</p>
        <ol>
          <li><strong>输入 URL：</strong>在"源 URL"字段中粘贴要嵌入内容的网址 (URL)。</li>
          <li><strong>调整设置：</strong>自定义宽度、高度、边框和滚动选项以适应您网站的设计。</li>
          <li><strong>预览：</strong>使用实时预览确保在桌面和移动设备上一切看起来完美。</li>
          <li><strong>复制代码：</strong>点击"复制"按钮获取生成的 HTML 代码，并将其粘贴到您网站的源代码中。</li>
        </ol>
      `
    },
    {
      title: "Iframe 参数详解",
      content: `
        <p>了解关键参数有助于优化您的嵌入内容：</p>
        <ul>
          <li><strong>宽度和高度：</strong>定义 iframe 的尺寸。使用像素 (px) 表示固定尺寸，或使用百分比 (%) 表示响应式布局。</li>
          <li><strong>沙盒：</strong>一种安全功能，限制嵌入内容可以执行的操作（例如，阻止脚本或弹窗）。仅在必要时启用特定权限。</li>
          <li><strong>加载：</strong>设置为"lazy"以推迟加载 iframe，直到它接近视口，从而提高页面加载速度和 SEO。</li>
          <li><strong>边框和滚动：</strong>控制视觉外观。删除边框通常看起来更简洁，而滚动设置取决于内容长度。</li>
        </ul>
      `
    },
    {
      title: "使 Iframe 响应式",
      content: `
        <p>在当今移动优先的世界中，<strong>响应式 iframe</strong> 至关重要。标准 iframe 具有固定尺寸，可能会在较小的屏幕上破坏布局。</p>
        <p>我们的工具提供"设为响应式"选项，使用现代 CSS <code>aspect-ratio</code> 或经典的"padding-hack"确保您的嵌入内容在从桌面到智能手机的所有设备上完美缩放。</p>
      `
    },
    {
      title: "常见 Iframe 问题",
      content: `
        <p>如果您的 iframe 无法正常工作，请检查这些常见问题：</p>
        <ul>
          <li><strong>X-Frame-Options：</strong>某些网站（如 Google 或 Facebook）通过头信息阻止嵌入。如果您看到"拒绝连接"错误，该网站可能不允许 iframe。</li>
          <li><strong>混合内容：</strong>如果您的网站使用 HTTPS，请确保嵌入的 URL 也是 HTTPS。浏览器会在安全页面上阻止不安全的 HTTP 内容。</li>
          <li><strong>移动可用性：</strong>确保嵌入内容本身是移动友好的，否则它可能在 iframe 中看起来很小或损坏。</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "这个 Iframe 生成器是免费的吗？",
      answer: "是的，此工具 100% 免费使用，可为任何网站生成 HTML iframe 代码。"
    },
    {
      question: "如何使我的 iframe 响应式？",
      answer: "只需在设置中勾选\\\"设为响应式\\\"框。这将生成一个带有 CSS 的包装 div，可在任何屏幕尺寸上保持宽高比。"
    },
    {
      question: "为什么我的 iframe 无法加载？",
      answer: "最常见的原因是源网站已将 'X-Frame-Options' 头设置为 'SAMEORIGIN' 或 'DENY'，阻止其嵌入到其他网站。"
    },
    {
      question: "我可以用这个嵌入 YouTube 视频吗？",
      answer: "可以，但为了获得最佳体验，我们建议使用我们专用的 <a href='/zh/youtube-embed-code-generator'>YouTube 嵌入代码生成器</a>，它提供自动播放和循环等特定选项。"
    },
    {
      question: "对 SEO 友好吗？",
      answer: "是的。我们包含 'loading=\"lazy\"' 选项以提高性能，以及 'title' 属性以提高可访问性，这两者对 SEO 都很重要。"
    }
  ]
};

// Get content by locale
export function getHomeContent(locale: Locale): SEOContent {
  switch (locale) {
    case 'zh':
      return homeContent_zh;
    case 'en':
    default:
      return homeContent_en;
  }
}
