/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    return config
  },

  async rewrites() {
    return [
      {
        source: '/api-web/:path*',
        destination: `${process.env.BASE_URL}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
