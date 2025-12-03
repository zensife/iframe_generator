import type { NextConfig } from 'next';

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

export default nextConfig;
