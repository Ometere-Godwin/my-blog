import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["via.placeholder.com", "picsum.photos"],
  },
};

export default nextConfig;
