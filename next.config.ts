/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  // basePath and assetPrefix are removed as they conflict with manual path handling for GH pages.
  // The manifest path will be handled absolutely in layout.tsx.
  images: { unoptimized: true },
  devIndicators: {
    allowedDevOrigins: [
        '*.cloudworkstations.dev',
    ],
  },
};

module.exports = nextConfig;
