/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'tunis-next.netlify.app',
                pathname: '/assets/**',
                port: '',
                protocol: 'https'
            }
        ]
    }
};

export default nextConfig;
