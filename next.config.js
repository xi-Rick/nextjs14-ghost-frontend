const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      `${process.env.NEXT_PUBLIC_GHOST_API_URL.replace(/(^\w+:|^)\/\//, "")}`, // Remove protocol from GHOST_API_URL
      "api.microlink.io",
      "danadavis.dev", // Add your domain here
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/xi-Rick",
        permanent: false,
      },
      {
        source: "/ghost/:path*",
        destination: `${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/:path*`,
        permanent: false,
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
