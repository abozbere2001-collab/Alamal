/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  // Re-adding basePath and assetPrefix is the correct way for sub-path deployments.
  // This tells Next.js to prefix all assets and links correctly.
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
