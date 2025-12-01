import { Metadata } from 'next';
import GoogleMapsGenerator from '@/components/tools/GoogleMapsGenerator';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQSection } from '@/components/content/FAQSection';
import { googleMapsContent } from '@/data/seo-content';

export const metadata: Metadata = {
    title: 'Google Maps Iframe Generator - Embed Google Maps for Free',
    description: 'Create custom Google Maps embed codes for your website. Search addresses, adjust zoom levels, and generate responsive maps instantly. Free tool.',
    keywords: 'google maps embed, google maps iframe, map generator, embed map in website, responsive google map',
    alternates: {
        canonical: '/google-maps-iframe-generator',
    },
    openGraph: {
        title: 'Google Maps Iframe Generator - Embed Google Maps for Free',
        description: 'Create custom Google Maps embed codes for your website. Search addresses, adjust zoom levels, and generate responsive maps instantly.',
        url: '/google-maps-iframe-generator',
    },
};

export default function Page() {
    return (
        <>
            <GoogleMapsGenerator />
            <div className="container mx-auto px-4 max-w-4xl">
                <ContentSection title={googleMapsContent.title}>
                    {googleMapsContent.sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                    ))}
                </ContentSection>
                <FAQSection items={googleMapsContent.faq} />
            </div>
        </>
    );
}
