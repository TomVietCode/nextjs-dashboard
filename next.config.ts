import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    ppr: 'incremental'
  }
};

export default nextConfig;
