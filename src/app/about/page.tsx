import { Metadata } from 'next';
import { ContentSection } from '@/components/content/ContentSection';

export const metadata: Metadata = {
    title: 'About Us - Iframe Generator',
    description: 'Learn more about Iframe Generator, our mission, and why we created the best free online iframe tools.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 max-w-4xl py-8">
            <ContentSection title="About Us">
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg mb-6">
                        Welcome to <strong>Iframe Generator</strong>, the most comprehensive and user-friendly tool for creating responsive iframe embed codes.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                    <p className="mb-6">
                        We believe that embedding content on the web should be simple, accessible, and responsive by default.
                        Whether you're a developer, a content creator, or a business owner, you shouldn't have to wrestle with complex HTML or CSS just to share a map or a video.
                        Our mission is to provide free, high-quality tools that solve these common web development challenges.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">Why We Built This</h3>
                    <p className="mb-6">
                        The web is evolving, and mobile traffic now accounts for over half of all internet usage.
                        Traditional iframes are often static and break on smaller screens. We saw a need for a tool that prioritizes <strong>responsiveness</strong> and <strong>SEO best practices</strong> out of the box.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">What We Offer</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Iframe Generator:</strong> Create custom iframes for any URL.</li>
                        <li><strong>Google Maps Embed:</strong> Generate map embeds without an API key.</li>
                        <li><strong>YouTube Embed:</strong> Customize YouTube players with advanced options.</li>
                        <li><strong>Responsive Checker:</strong> Verify your embeds look great on all devices.</li>
                    </ul>

                    <p>
                        Thank you for using our tools. We are constantly improving and adding new features based on your feedback.
                    </p>
                </div>
            </ContentSection>
        </div>
    );
}
