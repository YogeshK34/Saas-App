/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['your-saas-management-app.vercel.app'],
    },
}

module.exports = nextConfig


