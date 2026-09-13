import type { NextConfig } from "next";

const repo = "web-designer-client-pack";
const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  poweredByHeader: false,
  ...(githubPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}`,
      }
    : {}),
};

export default nextConfig;
