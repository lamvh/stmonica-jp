import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A lockfile also exists in a parent directory; pin the workspace root
  // to this project so Turbopack stops warning about the ambiguity.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
