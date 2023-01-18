const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
];

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
