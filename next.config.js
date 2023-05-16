/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias["@calculator"] = path.resolve(__dirname, "src");
    config.resolve.alias["@assets"] = path.resolve(__dirname, "public");
    return config;
  },
};

module.exports = nextConfig;
