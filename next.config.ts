import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignora erros de tipagem no build para poupar memória RAM (o Cursor/VS Code já valida isso)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
