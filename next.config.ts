/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  // add your own strategies to the existing ones
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
  display: 'fullscreen',
});

const nextConfig = {
  output: 'export',
};

module.exports = withPWA(nextConfig);
