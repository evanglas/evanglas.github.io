const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Your existing custom webpack logic stays here
    return config;
  }}

module.exports = withContentlayer(nextConfig)
