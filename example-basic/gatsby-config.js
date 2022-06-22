module.exports = {
  pathPrefix: '/gatsby-plugin-scroll-position',
  plugins: [
    {
      resolve: 'gatsby-plugin-scroll-position',
      options: {
        elements: [
          '.class-selector',
          '#id-selector',
          '[data-testid="test-selector"]',
        ],
      },
    },
  ],
  jsxRuntime: 'automatic',
  trailingSlash: 'always',
}
