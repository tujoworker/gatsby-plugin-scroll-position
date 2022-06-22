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
      elements: ['.class-selector', '#id-selector'],
    },
  },
]
```

## How it works

It puts a script at the bottom of every page body in order to restore scroll position before React has hydrated. It stores and restores scroll position on every page transition.
