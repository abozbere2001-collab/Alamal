/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  assetPrefix: '/Alamal',
  basePath: '/Alamal',
  images: { unoptimized: true },
  devIndicators: {
    allowedDevOrigins: [
        '*.cloudworkstations.dev',
    ],
  },
};

module.exports = nextConfig;
