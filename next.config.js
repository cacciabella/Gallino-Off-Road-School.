/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensures that routes are correctly handled
  trailingSlash: false,
  // Add any environment variables you need
  env: {
    // your env variables here
  },
  // Configure image domains if you're using next/image
  images: {
    domains: [],
  },
}

module.exports = nextConfig