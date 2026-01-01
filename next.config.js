/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,  // use original image URLs
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  // Remove output: "export" — Vercel handles SSR
  // Remove basePath unless you actually want it in a subfolder
};

module.exports = nextConfig;
