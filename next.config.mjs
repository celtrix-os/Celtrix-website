/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { appDir: true },
  output: 'standalone',
  images: {
    domains: ["avatars.githubusercontent.com"], // allow GitHub avatars
  },
};

export default nextConfig;
