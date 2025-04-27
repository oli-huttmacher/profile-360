import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignorer les erreurs ESLint pendant le build
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* tes autres options de config ici */
};

export default nextConfig;
