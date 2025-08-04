import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['cdn.dribbble.com',"api.dicebear.com"],
  },
};

export default nextConfig;
