import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true, // enabling this will enable SSR for Tailwind
  },
};

export default nextConfig;
