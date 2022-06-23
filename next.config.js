/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'static.wikia.nocookie.net',
            'storage.tarkov-database.com',
            'assets.tarkov-tools.com',
            'avatars.githubusercontent.com',
        ],
    },
}

module.exports = nextConfig
