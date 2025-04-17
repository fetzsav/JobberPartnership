// @ts-check

/**
 * @type {import('next').NextConfig}
 */

import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/, // Match both `.md` and `.mdx` files
  options: {
    // Add any MDX-specific options here
  },
});

const nextConfig = withMDX({
  images: {
    unoptimized: true,
  },
  output: 'export',
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  webpack(config, options) {
    return config;
  },
});

export default nextConfig;