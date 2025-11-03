
import type {NextConfig} from 'next';
import withPWA from 'next-pwa';

const repoName = 'Alamal';
const isProd = process.env.NODE_ENV === 'production';

const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  manifest: {
    name: 'نبض الملاعب',
    short_name: 'نبض الملاعب',
    description: 'عالم كرة القدم بين يديك',
    start_url: isProd ? `/${repoName}/` : '/',
    display: 'standalone',
    scope: isProd ? `/${repoName}/` : '/',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: isProd ? `/${repoName}/icons/icon-192x192.png` : '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: isProd ? `/${repoName}/icons/icon-512x512.png` : '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_API_FOOTBALL_KEY: process.env.NEXT_PUBLIC_API_FOOTBALL_KEY,
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_DATABASE_URL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  },
};

export default withPWA(pwaConfig)(nextConfig);
