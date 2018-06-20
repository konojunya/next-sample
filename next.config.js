const withSass = require('@zeit/next-sass')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env
const withPlugins = require("next-compose-plugins")

module.exports = {
  webpack(config, { isServer }) {
    if(ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true
      }))
    }

    return config
  }
}

module.exports = withSass({
  cssModules: true
})