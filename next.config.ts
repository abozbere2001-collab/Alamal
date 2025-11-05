/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Alamal';
const basePath = isProd ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: basePath,
  assetPrefix: basePath,
  devIndicators: {
    allowedDevOrigins: [
        '*.cloudworkstations.dev',
    ],
  },
};

module.exports = nextConfig;
