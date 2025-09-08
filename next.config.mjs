import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/landing",
  assetPrefix: "/landing",
  async rewrites() {
    return [
      {
        source: "/landing/:path*",
        destination: "/:path*",
      },
      {
        source: "/landing/_next/:path*",
        destination: "/_next/:path*",
      },
    ]
  },
}

export default withNextIntl(nextConfig)
