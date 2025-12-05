import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import HomeGenerator from '@/components/tools/HomeGenerator';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQSection } from '@/components/content/FAQSection';
import { getHomeContent } from '@/data/seo-content';
import { getHomeMetadata } from '@/data/seo-metadata';
import { routing } from '@/i18n/routing';
import { Locale } from '@/i18n/config';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const metadata = getHomeMetadata(locale as Locale);
  const baseUrl = 'https://www.iframegenerator.org';
  const canonicalUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = getHomeContent(locale as Locale);

  return (
    <>
      <HomeGenerator />
      <div className="container mx-auto px-4 max-w-4xl">
        <ContentSection title={content.title}>
          {content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          ))}
        </ContentSection>
        <FAQSection items={content.faq} />
      </div>
    </>
  );
}
