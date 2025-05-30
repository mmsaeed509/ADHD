/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ADHD' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 