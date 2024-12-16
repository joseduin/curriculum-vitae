import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/curriculum/vitae',
  assetPrefix: '/curriculum/vitae',
  distDir: 'vitae',
};

export default nextConfig;
