/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  devIndicators: {
    allowedDevOrigins: [
        '*.cloudworkstations.dev',
    ],
  },
};

module.exports = nextConfig;
