/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/Alamal',
  assetPrefix: '/Alamal/',
  images: { unoptimized: true },
  devIndicators: {
    allowedDevOrigins: [
        '*.cloudworkstations.dev',
    ],
  },
};

module.exports = nextConfig;
