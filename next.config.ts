import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: process.env.NODE_ENV === "production" ? "/seasoul-wellness" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
