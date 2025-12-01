import { Metadata } from 'next';
import { ContentSection } from '@/components/content/ContentSection';

export const metadata: Metadata = {
    title: 'Terms of Service - Iframe Generator',
    description: 'Terms of Service for Iframe Generator. Rules and regulations for using our website.',
};

export default function TermsOfService() {
    return (
        <div className="container mx-auto px-4 max-w-4xl py-8">
            <ContentSection title="Terms of Service">
                <div className="prose dark:prose-invert max-w-none">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h3 className="text-xl font-semibold mb-2">1. Agreement to Terms</h3>
                    <p className="mb-4">
                        By accessing our website at Iframe Generator, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                        If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">2. Use License</h3>
                    <p className="mb-4">
                        Permission is granted to temporarily download one copy of the materials (information or software) on Iframe Generator's website for personal, non-commercial transitory viewing only.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">3. Disclaimer</h3>
                    <p className="mb-4">
                        The materials on Iframe Generator's website are provided on an 'as is' basis. Iframe Generator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">4. Limitations</h3>
                    <p className="mb-4">
                        In no event shall Iframe Generator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Iframe Generator's website.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">5. Accuracy of Materials</h3>
                    <p className="mb-4">
                        The materials appearing on Iframe Generator's website could include technical, typographical, or photographic errors. Iframe Generator does not warrant that any of the materials on its website are accurate, complete or current.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">6. Modifications</h3>
                    <p className="mb-4">
                        Iframe Generator may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                    </p>
                </div>
            </ContentSection>
        </div>
    );
}
