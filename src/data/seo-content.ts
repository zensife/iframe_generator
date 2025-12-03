export const homeContent = {
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

export const googleMapsContent = {
  title: "Google Map Embed Generator Guide",
  sections: [
    {
      title: "How to Embed Google Maps on Your Website",
      content: `
        <p>Embedding a <strong>Google Map</strong> helps customers find your location faster. The <strong>Google Map embed generator</strong> on this page outputs clean iframe code without an API key, so you can add maps to any site in seconds.</p>
        <p>We focus on the primary keyword <strong>google map embed</strong> and the tool intent for <strong>google maps embed generator</strong> to match what people actually search for while keeping the workflow simple.</p>
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
      title: "Embed Google Map vs Google Maps Embed API",
      content: `
        <h3>When to Use the Generator (Free)</h3>
        <ul>
          <li>Single locations on contact or footer pages.</li>
          <li>Small sites that need a quick embed without developer help.</li>
          <li>Projects that don't require custom markers or styling.</li>
        </ul>
        <h3>When to Use the Embed API (Paid)</h3>
        <ul>
          <li>Multiple markers, heavy customization, or custom colors.</li>
          <li>High-traffic sites needing quotas and usage monitoring.</li>
          <li>Advanced features like routes and directions.</li>
        </ul>
      `
    },
    {
      title: "How to Get Google Map Embed Code",
      content: `
        <h3>Method 1: Use This Generator (Recommended)</h3>
        <p>Enter your address, set zoom and dimensions, then copy the <strong>google map embed code</strong> instantly.</p>
        <h3>Method 2: Google Maps Share Button</h3>
        <ol>
          <li>Open Google Maps and search for your location.</li>
          <li>Click "Share" > "Embed a map".</li>
          <li>Choose Small/Medium/Large and copy the iframe HTML.</li>
        </ol>
        <p>The built-in option is limited. The generator adds responsive sizing, lazy loading, and custom map types.</p>
      `
    },
    {
      title: "Embed Google Map in HTML",
      content: `
        <p>Place the iframe where you want the map to appear. A basic example looks like this:</p>
        <pre><code>&lt;iframe 
  src="https://maps.google.com/maps?q=YOUR_LOCATION&amp;output=embed" 
  width="600" 
  height="450" 
  style="border:0;" 
  loading="lazy" 
  allowfullscreen&gt;
&lt;/iframe&gt;</code></pre>
        <p>The generator enhances this with responsive sizing and custom zoom for better embeds.</p>
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
        <h3>Add Context Text</h3>
        <p>Include your address in plain text near the map for accessibility and SEO.</p>
      `
    },
    {
      title: "Embed Google Maps on Different Platforms",
      content: `
        <h3>Embed Google Map in WordPress</h3>
        <p>Copy the iframe code and paste it into a Custom HTML block or the HTML editor. Most themes support it without plugins.</p>
        <h3>Embed Google Map on Website (HTML)</h3>
        <p>For custom sites, paste the code into your contact page or footer. It works anywhere HTML is accepted.</p>
        <h3>Embed Google Maps in Notion</h3>
        <p>Create an Embed block and paste the Google Maps URL. For full control on external sites, use this <strong>google maps embed generator</strong>.</p>
        <p>Need video embeds too? Check our <a href="/youtube-embed-code-generator">YouTube embed code generator</a> for a complementary tool.</p>
      `
    },
    {
      title: "Common Google Map Embed Issues",
      content: `
        <h3>Map Not Showing (Blank Space)</h3>
        <p>Confirm the iframe is complete, the location is correct, and your site allows iframes.</p>
        <h3>Map Not Responsive on Mobile</h3>
        <p>Enable the responsive option so the embed scales to different screen sizes.</p>
        <h3>"This Page Can't Load Google Maps Correctly"</h3>
        <p>This error appears with the Embed API when an API key is missing. Our iframe method avoids this by not requiring keys.</p>
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

export const youtubeContent = {
  title: "YouTube Embed Code Generator Guide",
  sections: [
    {
      title: "How to Get YouTube Embed Code",
      content: `
        <p>Getting the right <strong>YouTube embed code</strong> is easy with our YouTube embed code generator. Paste your video URL, customize player options, and instantly get a clean, responsive iframe you can drop into any site.</p>
        <p>This page focuses on the primary keyword <strong>youtube embed code generator</strong> and the secondary terms "youtube embed code" and "embed youtube video" so you can quickly match search intent while using the tool.</p>
      `
    },
    {
      title: "Quick Steps to Embed YouTube Videos",
      content: `
        <ol>
          <li><strong>Paste URL:</strong> Copy your YouTube video link into the generator.</li>
          <li><strong>Customize:</strong> Set dimensions, autoplay, loop, mute, privacy mode, and start time.</li>
          <li><strong>Generate:</strong> Click to get your optimized <strong>YouTube embed code</strong> instantly.</li>
          <li><strong>Copy & Paste:</strong> Add the iframe code to your website HTML wherever you want the video to appear.</li>
        </ol>
      `
    },
    {
      title: "YouTube Embed Code Features",
      content: `
        <h3>Responsive iframe Design</h3>
        <p>Every embed is responsive by default so your YouTube video fits desktop, tablet, and mobile screens. No extra CSS needed.</p>
        <h3>Advanced Player Parameters</h3>
        <ul>
          <li><strong>Autoplay & Mute:</strong> Autoplay pairs with mute for better browser support.</li>
          <li><strong>Loop Video:</strong> Automatically replay when the video ends.</li>
          <li><strong>Custom Start Time:</strong> Skip intros by starting at the exact second you want.</li>
          <li><strong>Modest Branding:</strong> Reduce YouTube UI for a cleaner embed.</li>
          <li><strong>Privacy-Enhanced Mode:</strong> Use youtube-nocookie.com to improve GDPR compliance.</li>
        </ul>
      `
    },
    {
      title: "Why Use a YouTube Embed Code Generator?",
      content: `
        <p>While YouTube provides a basic iframe, the <strong>youtube embed code generator</strong> here combines multiple parameters automatically:</p>
        <ul>
          <li>One-click privacy-enhanced mode.</li>
          <li>Responsive sizing without manual CSS.</li>
          <li>Autoplay, loop, mute, and branding options in one place.</li>
          <li>Clean iframe code ready to paste.</li>
        </ul>
      `
    },
    {
      title: "How to Embed YouTube Video in HTML",
      content: `
        <p>To embed a YouTube video in HTML, use the iframe generated by this tool. A basic example looks like this:</p>
        <pre><code>&lt;iframe width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;</code></pre>
        <p>The generator upgrades this snippet with responsive sizing, privacy-enhanced mode, and combined player parameters so you always get the best <strong>youtube embed code</strong>.</p>
      `
    },
    {
      title: "Privacy & GDPR Compliance",
      content: `
        <p>Enable privacy-enhanced mode to switch the domain to <code>youtube-nocookie.com</code>. This keeps tracking off until a visitor plays the video, helping your site stay compliant while still delivering the embed.</p>
      `
    },
    {
      title: "Embedding YouTube Videos in PowerPoint",
      content: `
        <p>PowerPoint users search for "embed YouTube video in PowerPoint" even though the intent differs from this tool. In PowerPoint, go to Insert &gt; Video &gt; Online Video and paste your YouTube URL. For websites, rely on this <strong>youtube embed code generator</strong> to get the iframe you need.</p>
      `
    },
    {
      title: "Common YouTube Embed Code Issues",
      content: `
        <h3>Video Says "Watch on YouTube"</h3>
        <p>The video owner disabled embedding. You cannot override this restriction.</p>
        <h3>Autoplay Not Working</h3>
        <p>Modern browsers block unmuted autoplay. Use autoplay + mute together in the generator.</p>
        <h3>Video Not Responsive</h3>
        <p>Select the responsive option to output an iframe that scales on every device.</p>
      `
    }
  ],
  faq: [
    {
      question: "How do I get a YouTube embed code?",
      answer: "Use the YouTube embed code generator: paste your video URL, pick options like autoplay, loop, and privacy-enhanced mode, then copy the generated iframe code."
    },
    {
      question: "What is the difference between YouTube embed code and iframe?",
      answer: "They are the same thing. A YouTube embed code is an iframe snippet that loads your video inside a web page."
    },
    {
      question: "Can I customize YouTube embed code parameters?",
      answer: "Yes. Customize autoplay, mute, loop, start time, modest branding, related videos, and privacy mode directly in the generator before copying the code."
    },
    {
      question: "Is the YouTube embed code generator free?",
      answer: "Yes. The generator is completely free with unlimited use for creating responsive YouTube embed codes."
    }
  ]
};

export const responsiveContent = {
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
