/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  runtimeCaching,
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'becafe.online',  // PROD
      'linkway.ma',     // PROD
      'bo.linkway.ma',  // PROD
      'becafe.site',    // PREPROD
      'pre-market-linkway.vercel.app',  // PREPROD
      'pre-bo-linkway.vercel.app',      // PREPROD
      'i.pravatar.cc',
      'xsgames.co',
      'localhost',
      '127.0.0.1',
      'maps.googleapis.com',
      's3.amazonaws.com',
      'pickbazarlaravel.s3.ap-southeast-1.amazonaws.com',
    ],
  },
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
});
