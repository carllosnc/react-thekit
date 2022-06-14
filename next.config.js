const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,

  images: {
    domains: ['unsplash.com', 'images.unsplash.com', 'res.cloudinary.com'],
  },

  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },

  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
})
