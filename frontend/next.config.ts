import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Netlify doesn't support Next.js image optimization by default
  },
};

export default nextConfig;
