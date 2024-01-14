/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.pexels.com',
      'image.xportsnews.com',
      'dimg.donga.com',
      'cdn.gukjenews.com',
    ],
  },
  // Add or modify other configuration options here
  webpack: (config, { isServer }) => {
    // Custom webpack configuration for both client and server
    // Example: Add a new loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!isServer) {
      // Custom webpack configuration for the client
    }

    return config
  },
}

module.exports = nextConfig
