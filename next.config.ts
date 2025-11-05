/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/Alamal',
  assetPrefix: '/Alamal/',
  output: 'export',
  images: { unoptimized: true },
  devIndicators: {
    allowedDevOrigins: [
        '*.cloudworkstations.dev',
    ],
  },
};

module.exports = nextConfig;
