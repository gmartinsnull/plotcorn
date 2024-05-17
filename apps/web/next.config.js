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
  transpilePackages: ["packages/movies-pkg", "packages/subjects-pkg"],
};
