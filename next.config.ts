import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/teachermi" : "",
  assetPrefix: isGitHubPages ? "/teachermi" : undefined,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: isGitHubPages },
};

export default nextConfig;
