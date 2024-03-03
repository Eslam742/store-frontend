/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["res.cloudinary.com", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
    },
};

module.exports = nextConfig;