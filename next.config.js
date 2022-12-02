/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  images: {
    domains: ["192.168.88.247"],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPlugins([
  nextConfig,
  [
    withPWA,
    {
      pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        runtimeCaching,
        disable: process.env.NODE_ENV === "development",
      },
    },
  ],
]);
