/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'static.wikia.nocookie.net',
            'storage.tarkov-database.com',
            'assets.tarkov-tools.com',
        ],
    },
}

module.exports = nextConfig
