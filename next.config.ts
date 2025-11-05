
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Alamal';
const basePath = isProd ? `/${repoName}` : '';

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  display: 'fullscreen',
  scope: basePath,
  start_url: `${basePath}/`,
  theme_color: '#000000',
  background_color: '#000000',
  cacheOnFrontEndNav: true,
  extendDefaultRuntimeCaching: true,
  runtimeCaching: [
    {
      urlPattern: /\/api\/football\/.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-football-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
});

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

module.exports = withPWA(nextConfig);
