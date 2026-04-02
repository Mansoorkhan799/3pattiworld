import type { NextConfig } from "next";

/**
 * 3 Patti World - Next.js Configuration
 * Redirects old URLs to 3 Patti World routes
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320],
  },
  async redirects() {
    return [
      { source: "/download-card-rummy", destination: "/download-3-patti-world", permanent: true },
      { source: "/deposit-money-in-card-rummy", destination: "/deposit-money-in-3-patti-world", permanent: true },
      { source: "/withdraw-money-from-card-rummy", destination: "/withdraw-money-from-3-patti-world", permanent: true },
      { source: "/card-rummy-for-pc", destination: "/3-patti-world-for-pc", permanent: true },
      { source: "/blog/is-card-rummy-real-or-fake", destination: "/blog/is-3-patti-world-real-or-fake", permanent: true },
      { source: "/blog/create-card-rummy-account-and-login", destination: "/blog/create-3-patti-world-account-and-login", permanent: true },
      { source: "/blog/tips-to-win-big-in-card-rummy", destination: "/blog/tips-to-win-big-in-3-patti-world", permanent: true },
      { source: "/blog/card-rummy-app-review-2026", destination: "/blog/3-patti-world-app-review-2026", permanent: true },
      { source: "/blog/card-rummy-bonuses-vip-guide", destination: "/blog/3-patti-world-bonuses-vip-guide", permanent: true },
      { source: "/blog/card-rummy-tips-10-smart-tricks", destination: "/blog/3-patti-world-tips-10-smart-tricks", permanent: true },
      { source: "/blog/how-to-use-card-rummy-app-pakistan-guide-2026", destination: "/blog/how-to-use-3-patti-world-app-pakistan-guide-2026", permanent: true },
      { source: "/blog/is-card-rummy-safe-legal-pakistan", destination: "/blog/is-3-patti-world-safe-legal-pakistan", permanent: true },
      { source: "/blog/responsible-gaming-guide-card-rummy", destination: "/blog/responsible-gaming-guide-3-patti-world", permanent: true },
      { source: "/blog/3patti-blue-vs-card-rummy", destination: "/blog/3patti-blue-vs-3-patti-world", permanent: true },
      { source: "/blog/3patti-gold-vs-card-rummy", destination: "/blog/3patti-gold-vs-3-patti-world", permanent: true },
      { source: "/blog/3patti-lucky-vs-card-rummy", destination: "/blog/3patti-lucky-vs-3-patti-world", permanent: true },
      { source: "/blog/3patti-room-vs-card-rummy", destination: "/blog/3patti-room-vs-3-patti-world", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

export default nextConfig;
