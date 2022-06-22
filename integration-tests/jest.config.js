// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  verbose: true, // each individual test should be reported during the run
  testEnvironment: 'jsdom',
  roots: [
    '<rootDir>/__tests__/',
    '<rootDir>../gatsby-plugin-scroll-position/',
  ], // enables file watcher for gatsby-plugin-scroll-position
  projects: [
    '<rootDir>/__tests__/',
    '<rootDir>../gatsby-plugin-scroll-position/',
  ],
  transform: { '\\.[jt]sx?$': 'babel-jest' },
}
