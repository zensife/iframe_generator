import { Metadata } from 'next';
import ResponsiveGenerator from '@/components/tools/ResponsiveGenerator';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQSection } from '@/components/content/FAQSection';
import { responsiveContent } from '@/data/seo-content';

export const metadata: Metadata = {
    title: 'Responsive Iframe Generator - Mobile-Friendly Embed Code',
    description: 'Create responsive iframe embed codes that automatically adapt to any screen size. Support for modern CSS aspect-ratio and legacy padding-bottom methods. Free tool with live preview.',
    keywords: 'responsive iframe generator, responsive iframe code generator, iframe responsive generator, mobile-friendly iframe',
    alternates: {
        canonical: '/responsive-iframe-generator',
    },
    openGraph: {
        title: 'Responsive Iframe Generator - Mobile-Friendly Embed Code',
        description: 'Create responsive iframe embed codes that automatically adapt to any screen size. Support for modern CSS aspect-ratio and legacy padding-bottom methods.',
        url: '/responsive-iframe-generator',
    },
};

export default function Page() {
    return (
        <>
            <ResponsiveGenerator />
            <div className="container mx-auto px-4 max-w-4xl">
                <ContentSection title={responsiveContent.title}>
                    {responsiveContent.sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                    ))}
                </ContentSection>
                <FAQSection items={responsiveContent.faq} />
            </div>
        </>
    );
}
