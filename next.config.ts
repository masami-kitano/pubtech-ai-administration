import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Adobe Fontsのスクリプトを許可するためのCSP設定
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' https://use.typekit.net; style-src 'self' 'unsafe-inline' https://use.typekit.net https://p.typekit.net; font-src 'self' https://use.typekit.net https://p.typekit.net data:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
