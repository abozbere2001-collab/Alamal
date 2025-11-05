/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export', // This line is removed as it's incompatible with server features
  images: { unoptimized: true },
};

module.exports = nextConfig;
