import { Metadata } from 'next';
import YoutubeGenerator from '@/components/tools/YoutubeGenerator';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQSection } from '@/components/content/FAQSection';
import { youtubeContent } from '@/data/seo-content';

export const metadata: Metadata = {
    title: 'YouTube Iframe Generator - Embed YouTube Videos with Advanced Options',
    description: 'Generate advanced YouTube embed codes with autoplay, loop, mute, and privacy-enhanced mode. Fully responsive and SEO-friendly.',
    keywords: 'youtube embed generator, youtube iframe, embed youtube video, youtube autoplay code, responsive youtube embed',
    alternates: {
        canonical: '/youtube-iframe-generator',
    },
    openGraph: {
        title: 'YouTube Iframe Generator - Embed YouTube Videos with Advanced Options',
        description: 'Generate advanced YouTube embed codes with autoplay, loop, mute, and privacy-enhanced mode. Fully responsive and SEO-friendly.',
        url: '/youtube-iframe-generator',
    },
};

export default function Page() {
    return (
        <>
            <YoutubeGenerator />
            <div className="container mx-auto px-4 max-w-4xl">
                <ContentSection title={youtubeContent.title}>
                    {youtubeContent.sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                    ))}
                </ContentSection>
                <FAQSection items={youtubeContent.faq} />
            </div>
        </>
    );
}
