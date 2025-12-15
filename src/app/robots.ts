import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.iframegenerator.org';

    return {
        rules: {
            userAgent: '*',  // Applies to all search engines (Google, Bing, Yandex, Baidu, etc.)
            allow: '/',
            disallow: [
                '/api/',       // Block API routes
                '/private/',   // Block private directory if exists
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
