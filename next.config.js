/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};
module.exports = {
  experimental: {
    images: {
      unoptimized: true,
      loader: "imgix",
      path: "/",
    },
  },
};
module.exports = nextConfig;
