import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  assetPrefix: "http://localhost:3000",
  output: "standalone",
  productionBrowserSourceMaps: true,
  // We handle compression in our custom Express/gRPC server
  compress: false,

  // Our app was build without strict mode, so to reduce the changes caused by enabling
  // Next.js, we're disabling it. New pages should consider wrapping their pages in
  // <React.StrictMode> to catch potential issues.
  reactStrictMode: false,

  // By default, Next only accepts URLs that don't have a trailing slash (it will redirect requests that have one).
  // In staging/production, certain URLs - specifically the home page with/without locales - have a trailing slash
  // and the others don't (for SEO purposes). We want to allow for both cases.
  skipTrailingSlashRedirect: true,

  eslint: {
    // We run our eslint separately.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // We run our tsc separately.
    ignoreBuildErrors: true,
  },
  experimental: {
    // In next 15 stale times are set to 0 for dynamic values, which is not what we want
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
    // Tell next to ignore babel and use SWC instead.
    forceSwcTransforms: true,
    webpackBuildWorker: true,
    parallelServerCompiles: true,
    parallelServerBuildTraces: true,
    optimizeServerReact: true,
  },
  compiler: {
    styledComponents: true,
  },
};

export default withVanillaExtract(nextConfig);