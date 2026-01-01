/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // ✅ Enable static export for GitHub Pages
  images: {
    unoptimized: true,  // ✅ Use original image URLs (no server optimization)
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
  // Uncomment and set this if your repo is NOT a user site
  basePath: "/scaffolding",
};

module.exports = nextConfig;
