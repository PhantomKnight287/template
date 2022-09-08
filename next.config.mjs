import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "top-right",
  },
};

export default withContentlayer(nextConfig);
