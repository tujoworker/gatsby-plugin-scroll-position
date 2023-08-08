import ReactDOM from 'react-dom/client'

export const replaceHydrateFunction = () => {
  // Added to solve the following errors, which prevented us from running screenshot tests
  // https://github.com/gatsbyjs/gatsby/discussions/36232
  return (element, container) => {
    const root = ReactDOM.createRoot(container)
    root.render(element)
  }
}
