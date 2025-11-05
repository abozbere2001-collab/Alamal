/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  // basePath and assetPrefix are removed as they can cause conflicts with GitHub Pages deployment in some cases.
  // The manifest path will be handled absolutely in layout.tsx.
  images: { unoptimized: true },
  devIndicators: {
    allowedDevOrigins: [
        '*.cloudworkstations.dev',
    ],
  },
};

module.exports = nextConfig;
