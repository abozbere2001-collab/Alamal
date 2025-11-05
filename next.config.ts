
/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  // PWA is disabled in development for faster hot-reloading.
  // It is automatically enabled in the production build.
  disable: process.env.NODE_ENV === 'development',
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
  fallbacks: {
    //image: "/static/images/fallback.png",
    //font: "/static/fonts/fallback.woff2",
  },
  workboxOptions: {
    skipWaiting: true,
  },
  register: true,
  display: 'standalone',
});

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Alamal';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  devIndicators: {
    allowedDevOrigins: [
        '*.cloudworkstations.dev',
    ],
  },
};

module.exports = withPWA(nextConfig);
