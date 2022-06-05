const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,

  images: {
    domains: ['unsplash.com', 'images.unsplash.com'],
  },

  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
})
