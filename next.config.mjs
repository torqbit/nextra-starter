import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra({
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.js",
    },
  },
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
  // ... Add regular Next.js options here
});
