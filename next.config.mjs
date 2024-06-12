/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "mahdi-alaee.stream.prepr.io",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
