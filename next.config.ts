import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves this as a static site — no Node.js runtime involved.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
