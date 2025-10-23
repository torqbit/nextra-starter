import nextra from "nextra";
const withNextra = nextra({
  staticImage: true,
  latex: true,
  search: { codeblocks: false },
  defaultShowCopyCode: true,
});

const nextConfig = withNextra({
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    domains: [
      "torqbit-dev.b-cdn.net",
      "lh3.googleusercontent.com",
      "iframe.mediadelivery.net",
      "torqbit.b-cdn.net",
      "cdn.torqbit.com",
    ],
  },
  productionBrowserSourceMaps: false,

  typescript: { ignoreBuildErrors: true },
});

module.exports = nextConfig;
