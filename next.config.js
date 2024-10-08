/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "randomuser.me"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental:{
    reactRoot: true,
    suppressHydrationWarning: true,
  }
};

module.exports = nextConfig;
