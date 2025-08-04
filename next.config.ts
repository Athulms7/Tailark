import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['cdn.dribbble.com',"api.dicebear.com","mdbcdn.b-cdn.net",
      "media2.dev.to",
      "encrypted-tbn0.gstatic.com",
     "miro.medium.com",
      "codrops-1f606.kxcdn.com",
      "www.delasign.com",
      "kinsta.com",
      "encrypted-tbn0.gstatic.com"],
      
      
  },
};

export default nextConfig;
