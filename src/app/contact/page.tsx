import { Metadata } from 'next';
import { ContentSection } from '@/components/content/ContentSection';
import { Card, CardContent } from '@/components/ui/Card';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us - Iframe Generator',
    description: 'Get in touch with the Iframe Generator team for support, feedback, or inquiries.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 max-w-4xl py-8">
            <ContentSection title="Contact Us">
                <div className="prose dark:prose-invert max-w-none mb-8">
                    <p className="text-lg">
                        Have a question, suggestion, or found a bug? We'd love to hear from you!
                        While we are a small team, we try our best to respond to all inquiries within 24-48 hours.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Card className="hover:border-primary/50 transition-colors max-w-md w-full">
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                For support, feedback, feature requests, and general inquiries.
                            </p>
                            <a
                                href="mailto:support@iframegenerator.org"
                                className="text-primary hover:underline font-medium text-lg"
                            >
                                support@iframegenerator.org
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </ContentSection>
        </div>
    );
}
