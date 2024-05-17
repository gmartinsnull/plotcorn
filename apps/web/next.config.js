// @type {import('next').NextConfig}
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        port: "",
        pathname: "/b/id/**",
      },
    ],
  },
  transpilePackages: [
    "@plotcorn/packages/movies-pkg",
    "@plotcorn/packages/subjects-pkg",
    "@pllotcorn/packages/genre-pkg",
  ],
  experimental: {
    externalDir: true,
  },
};
