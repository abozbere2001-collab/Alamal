
import type {NextConfig} from 'next';
import withPWA from 'next-pwa';
import fs from 'fs';
import path from 'path';

const repoName = 'Alamal';
const isProd = process.env.NODE_ENV === 'production';

// Helper function to copy files
const copyFiles = (sourceDir: string, destDir: string) => {
  if (!fs.existsSync(sourceDir)) return;

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const files = fs.readdirSync(sourceDir);
  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    fs.copyFileSync(sourcePath, destPath);
  }
};


const nextConfig: NextConfig = {
  /* config options here */
  output: isProd ? 'export' : undefined,
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
  // This function is not standard in NextConfig, but `withPWA` might use it.
  // A webpack modification is more robust. We'll try this first.
  // If this doesn't work, we'll use a webpack config.
  webpack: (config, { isServer }) => {
    if (!isServer) {
        // This is a custom step to copy icons before the build proceeds.
        // It's a bit of a hack, but avoids complex webpack plugins for this simple task.
        const sourceDir = path.join(process.cwd(), 'assets');
        const destDir = path.join(process.cwd(), 'public', 'icons');
        copyFiles(sourceDir, destDir);
    }
    return config;
  },
};

const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: false, // Make sure PWA is enabled
  // We are using a static manifest, so we don't need to generate one
  // manifest: false, 
};

// Only wrap with PWA in production
const config = isProd 
  ? withPWA(pwaConfig)(nextConfig) 
  : nextConfig;


export default config;
