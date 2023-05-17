/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias['@src'] = path.resolve(__dirname, 'src')
    config.resolve.alias['@styles'] = path.resolve(__dirname, 'styles')
    config.resolve.alias['@public'] = path.resolve(__dirname, 'public')
    return config
  },
}

module.exports = nextConfig
