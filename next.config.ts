import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/career-recruit-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
