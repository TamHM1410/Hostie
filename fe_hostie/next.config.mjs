/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    appDir: true,
    reactStrictMode: false,
  },
  reactStrictMode: false,
};

export default nextConfig;
