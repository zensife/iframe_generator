import { Metadata } from 'next';
import { ContentSection } from '@/components/content/ContentSection';

export const metadata: Metadata = {
    title: 'Privacy Policy - Iframe Generator',
    description: 'Privacy Policy for Iframe Generator. Learn how we handle your data.',
    robots: {
        index: false, // Legal pages usually don't need to be indexed for SEO juice, but good for trust. Let's keep it indexable or follow user preference. Usually index: true is fine.
        follow: true,
    },
};

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 max-w-4xl py-8">
            <ContentSection title="Privacy Policy">
                <div className="prose dark:prose-invert max-w-none">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
                    <p className="mb-4">
                        Welcome to Iframe Generator ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">2. Data We Collect</h3>
                    <p className="mb-4">
                        We currently do not require you to create an account to use our tools. We may collect:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
                        <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">3. How We Use Your Data</h3>
                    <p className="mb-4">
                        We will only use your personal data when the law allows us to. Most commonly, we use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>To improve our website and services.</li>
                        <li>To analyze how users use our website.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">4. Cookies</h3>
                    <p className="mb-4">
                        We use cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">5. Third-Party Links</h3>
                    <p className="mb-4">
                        This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you.
                        We do not control these third-party websites and are not responsible for their privacy statements.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">6. Contact Us</h3>
                    <p className="mb-4">
                        If you have any questions about this privacy policy or our privacy practices, please contact us.
                    </p>
                </div>
            </ContentSection>
        </div>
    );
}
