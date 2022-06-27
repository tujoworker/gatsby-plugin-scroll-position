# Gatsby Plugin for saving overflow scroll position

- Automatic persist CSS overflow scroll position
- Restores position before React has hydrated
- No flickering
- Performant – no event listener
- Uses localStorage by default

Live [Demo](https://tujoworker.github.io/gatsby-plugin-scroll-position/) 🚀 provided by the [example code](https://github.com/tujoworker/gatsby-plugin-scroll-position/tree/main/example-basic).

## How to use and Install

```bash
npm install gatsby-plugin-scroll-position
# or
yarn add gatsby-plugin-scroll-position
```

… and add it to your `gatsby-config.js` file:

```js
exports.plugins = [
  {
    resolve: 'gatsby-plugin-scroll-position',
    options: {
      elements: [
        '.class-selector',
        '#id-selector',
        '[data-testid="test-selector"]',
        {
          selector: '#fallback-position',
          ensureInView: '#fallback-position ul li.scroll-to-me', // ensure this element is in view
        },
      ],
    },
  },
]
```

## `ensureInView` smartness

When nothing is stored in the localStorage, the plugin tries to fulfill the scroll position of the defined selector given in `ensureInView`.

But when the user did scroll before, it will persist its position, as long as it is actually visible.

## How it works

It puts a script at the bottom of every page body in order to restore scroll position before React has hydrated. It stores and restores scroll position on every page transition.
