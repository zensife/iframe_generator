import { Metadata } from 'next';
import { ContentSection } from '@/components/content/ContentSection';
import { Card, CardContent } from '@/components/ui/Card';
import { Mail, MessageSquare } from 'lucide-react';

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

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="hover:border-primary/50 transition-colors">
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                            <p className="text-muted-foreground mb-4">
                                For general inquiries and support.
                            </p>
                            <a
                                href="mailto:support@iframegenerator.org"
                                className="text-primary hover:underline font-medium"
                            >
                                support@iframegenerator.org
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="hover:border-primary/50 transition-colors">
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full">
                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 text-secondary-foreground">
                                <MessageSquare size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Feedback</h3>
                            <p className="text-muted-foreground mb-4">
                                Have a feature request? Let us know!
                            </p>
                            <a
                                href="mailto:feedback@iframegenerator.org"
                                className="text-secondary-foreground hover:underline font-medium"
                            >
                                feedback@iframegenerator.org
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </ContentSection>
        </div>
    );
}
