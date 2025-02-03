/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example-apis.vercel.app",
        port: "",
      },
    ],
  },
  compiler: {
    styledComponents: true,
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

module.exports = nextConfig;

// images: {
//   remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "example.com",
//       port: "",
//       pathname: "/account123/**",
//       search: "",
//     },
//   ],
// },
