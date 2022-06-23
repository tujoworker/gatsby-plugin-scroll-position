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
          {
            selector: '#fallback-position',
            ensureInView: '#fallback-position ul li.scroll-to-me',
          },
        ],
      },
    },
  ],
  jsxRuntime: 'automatic',
  trailingSlash: 'always',
}
