export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    content: string; // HTML content
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'responsive-iframe-guide-2024',
        title: 'The Ultimate Guide to Responsive Iframes in 2024',
        excerpt: 'Learn how to make any iframe responsive using modern CSS aspect-ratio or the classic padding hack. A complete guide for developers and content creators.',
        date: '2024-01-15',
        author: 'Iframe Generator Team',
        tags: ['Responsive Design', 'CSS', 'Tutorial'],
        content: `
      <p>In the mobile-first era, ensuring your embedded content looks great on all devices is crucial. A non-responsive iframe can break your layout and frustrate users.</p>
      
      <h2>Why Responsiveness Matters</h2>
      <p>Standard iframes have fixed width and height attributes. If you set a width of 800px, it will cause horizontal scrolling on a mobile device with a 375px screen width. This is bad for User Experience (UX) and SEO.</p>

      <h2>Method 1: The Modern Way (aspect-ratio)</h2>
      <p>Modern browsers now support the <code>aspect-ratio</code> CSS property. This is the cleanest way to handle responsive iframes.</p>
      <pre><code class="language-css">.iframe-container {
  width: 100%;
  aspect-ratio: 16 / 9;
}
.iframe-container iframe {
  width: 100%;
  height: 100%;
}</code></pre>

      <h2>Method 2: The Classic "Padding Hack"</h2>
      <p>If you need to support very old browsers, the padding hack is reliable. It uses a container with <code>position: relative</code> and a percentage-based <code>padding-bottom</code> to create the aspect ratio.</p>
      
      <h3>Calculating the Percentage</h3>
      <p>To get the percentage, divide height by width and multiply by 100.</p>
      <ul>
        <li>16:9 = 9 / 16 * 100 = 56.25%</li>
        <li>4:3 = 3 / 4 * 100 = 75%</li>
      </ul>

      <h2>Conclusion</h2>
      <p>For most projects today, we recommend using the <code>aspect-ratio</code> property. It's easier to read and maintain. However, our <strong>Iframe Generator</strong> tool supports both methods, so you can choose what works best for you.</p>
    `
    },
    {
        slug: 'google-maps-embed-no-api-key',
        title: 'How to Embed Google Maps Without an API Key',
        excerpt: 'Did you know you can embed Google Maps for free without a billing account? Discover the simple method to add maps to your website.',
        date: '2024-02-01',
        author: 'Iframe Generator Team',
        tags: ['Google Maps', 'Tips', 'No Code'],
        content: `
      <p>Many business owners think they need a complex Google Cloud Platform setup and an API key just to show their location on a website. This is often overkill.</p>

      <h2>The Embed API vs. The Embed Tool</h2>
      <p>Google offers a "Maps Embed API" which allows for simple iframe embeds. While it technically has "API" in the name, you can generate these standard embed codes without setting up a billing account for basic usage.</p>

      <h2>Steps to Embed for Free</h2>
      <ol>
        <li>Go to Google Maps and find your location.</li>
        <li>Click the "Share" button.</li>
        <li>Select "Embed a map".</li>
        <li>Copy the HTML provided.</li>
      </ol>

      <p>Alternatively, you can use our <a href="/google-maps-iframe-generator">Google Maps Iframe Generator</a> to customize the zoom level, map type (satellite/roadmap), and dimensions easily.</p>
    `
    }
];
