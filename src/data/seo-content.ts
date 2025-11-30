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
      answer: "Yes, but for the best experience, we recommend using our dedicated <a href='/youtube'>YouTube Iframe Generator</a> which offers specific options like autoplay and loop."
    },
    {
      question: "Is it SEO friendly?",
      answer: "Yes. We include options for 'loading=\"lazy\"' to improve performance and 'title' attributes for accessibility, both of which are important for SEO."
    }
  ]
};

export const googleMapsContent = {
  title: "How to Embed Google Maps on Your Website",
  sections: [
    {
      title: "Introduction",
      content: `
        <p>Embedding a <strong>Google Map</strong> is essential for businesses to help customers find their physical location. While Google Maps provides a basic embed option, our <strong>Google Maps Iframe Generator</strong> gives you more control <strong>without needing an API key</strong>.</p>
        <p>Many custom map solutions require a complex Google Cloud setup and billing account. Our tool bypasses this by generating standard HTML embed codes that are free, secure, and require <strong>no API key</strong> or credit card.</p>
      `
    },
    {
      title: "Step-by-Step Guide",
      content: `
        <ol>
          <li><strong>Enter Location:</strong> Type your address, business name, or coordinates into the search bar. You can also use the "Current Location" button.</li>
          <li><strong>Customize Map:</strong> Adjust the <strong>zoom level</strong> to show more detail or a broader area. Choose between Roadmap, Satellite, or Hybrid views.</li>
          <li><strong>Set Dimensions:</strong> Select a preset device size or enter custom width/height. Enable "Responsive" to ensure it looks good on mobile.</li>
          <li><strong>Get Code:</strong> Copy the generated HTML code and paste it into your website's contact page or footer.</li>
        </ol>
      `
    },
    {
      title: "Customization Options",
      content: `
        <p>Fine-tune your map for the best user experience:</p>
        <ul>
          <li><strong>Zoom Level:</strong> Use a high zoom (15-18) for specific buildings and a lower zoom (10-12) for city-wide context.</li>
          <li><strong>Map Type:</strong> 'Roadmap' is best for navigation, while 'Satellite' is great for showing real-world surroundings.</li>
          <li><strong>Responsive Design:</strong> Always recommended. It ensures the map resizes dynamically, preventing horizontal scrolling on phones.</li>
        </ul>
      `
    },
    {
      title: "Best Practices",
      content: `
        <p>To maintain your site's performance and SEO:</p>
        <ul>
          <li><strong>Lazy Loading:</strong> Our generator adds <code>loading="lazy"</code> automatically. This stops the map from loading until the user scrolls to it, speeding up your initial page load.</li>
          <li><strong>Accessibility:</strong> The generated code includes a title attribute, helping screen readers understand that a map is present.</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "Do I need a Google Maps API key?",
      answer: "No. This tool generates standard embed codes that do not require an API key for basic usage."
    },
    {
      question: "Is the generated map responsive?",
      answer: "Yes, if you select the 'Make Responsive' option, the map will automatically adjust to fit the width of its container on any device."
    },
    {
      question: "Can I show satellite view?",
      answer: "Yes, simply select 'Satellite' or 'Hybrid' from the Map Type dropdown menu before generating the code."
    },
    {
      question: "Why is the map not showing the correct address?",
      answer: "Try to be as specific as possible with the address (include city and zip code) or use latitude/longitude coordinates for exact precision."
    }
  ]
};

export const youtubeContent = {
  title: "How to Embed YouTube Videos on Your Website",
  sections: [
    {
      title: "Why Embed YouTube Videos?",
      content: `
        <p>Embedding videos keeps visitors on your site longer, reducing bounce rates and signaling quality to search engines. Using a <strong>YouTube Iframe Generator</strong> is better than uploading videos directly because:</p>
        <ul>
          <li>It saves your server bandwidth and storage.</li>
          <li>YouTube's global CDN ensures fast playback anywhere.</li>
          <li>It's fully compatible with all modern browsers and devices.</li>
        </ul>
      `
    },
    {
      title: "Quick Start Guide",
      content: `
        <ol>
          <li><strong>Paste URL:</strong> Copy the link of the YouTube video you want to embed.</li>
          <li><strong>Configure Player:</strong> Choose options like <strong>Autoplay</strong>, <strong>Loop</strong>, or <strong>Mute</strong>.</li>
          <li><strong>Privacy:</strong> Enable "Privacy-Enhanced Mode" to prevent YouTube from tracking visitors unless they play the video.</li>
          <li><strong>Generate:</strong> Get your optimized embed code instantly.</li>
        </ol>
      `
    },
    {
      title: "Customization Options",
      content: `
        <p>Our tool unlocks advanced YouTube player parameters:</p>
        <ul>
          <li><strong>Autoplay & Mute:</strong> Modern browsers require videos to be muted to autoplay. Our tool handles this logic for you.</li>
          <li><strong>Loop:</strong> Automatically replay the video when it ends. Great for background videos.</li>
          <li><strong>Start Time:</strong> Skip intros by specifying exactly when the video should begin (in seconds).</li>
          <li><strong>Modest Branding:</strong> Remove the YouTube logo from the control bar for a cleaner look.</li>
        </ul>
      `
    },
    {
      title: "Privacy & GDPR",
      content: `
        <p>For GDPR and privacy compliance, use the <strong>Privacy-Enhanced Mode</strong>. This changes the domain to <code>youtube-nocookie.com</code>, ensuring no cookies are set on your user's device until they interact with the video.</p>
      `
    }
  ],
  faq: [
    {
      question: "How do I make the video autoplay?",
      answer: "Check the 'Autoplay' box. Note that you must also check 'Mute' for autoplay to work reliably in most modern browsers (Chrome, Safari, Edge)."
    },
    {
      question: "Can I hide the YouTube logo?",
      answer: "Yes, select 'Modest Branding' to minimize YouTube branding in the player controls."
    },
    {
      question: "What is Privacy-Enhanced Mode?",
      answer: "It uses the 'youtube-nocookie.com' domain, which prevents YouTube from storing information about visitors on your website unless they play the video."
    },
    {
      question: "Does this work for YouTube Shorts?",
      answer: "Yes, simply paste the URL of the Short, and our generator will handle it correctly."
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
