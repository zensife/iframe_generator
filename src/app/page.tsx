import { Metadata } from 'next';
import HomeGenerator from '@/components/tools/HomeGenerator';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQSection } from '@/components/content/FAQSection';
import { homeContent } from '@/data/seo-content';

export const metadata: Metadata = {
  title: 'Iframe Generator - Free Online Embed Code Tools',
  description: 'Generate responsive iframe codes for websites, Google Maps, and YouTube videos. Free, SEO-friendly, and easy to use.',
  keywords: 'iframe generator, google maps embed, youtube embed code, responsive iframe, embed code generator',
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return (
    <>
      <HomeGenerator />
      <div className="container mx-auto px-4 max-w-4xl">
        <ContentSection title={homeContent.title}>
          {homeContent.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          ))}
        </ContentSection>
        <FAQSection items={homeContent.faq} />
      </div>
    </>
  );
}
