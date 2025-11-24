import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/Tic-Tac-Toe",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;

