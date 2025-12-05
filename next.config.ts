import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/youtube-iframe-generator',
                destination: '/youtube-embed-code-generator',
                permanent: true,
            },
        ];
    },
};

export default withNextIntl(nextConfig);
