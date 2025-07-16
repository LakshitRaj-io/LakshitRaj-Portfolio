/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Useful for static hosting like GitHub Pages
  },
  basePath: "", // You can set this if you're deploying to a subpath
  trailingSlash: true,
};

module.exports = nextConfig;