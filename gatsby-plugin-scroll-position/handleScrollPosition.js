/**
 * We also have included almost the same code in after "postBodyComponents" inside html.js in order to ea
 */
export function handleScrollPosition() {
  if (typeof window === 'undefined') {
    return // stop here
  }

  try {
    getElements().forEach(({ selector, elements }) => {
      elements.forEach((element) => {
        element.scrollTop = parseFloat(
          window.localStorage.getItem('scroll-' + selector)
        )
      })
    })
  } catch (e) {}
}

export function getElements() {
  const elements = []

  try {
    const selectors = window.__SP_ELEMENTS__ || []
    selectors.forEach((selector) => {
      elements.push({
        selector,
        elements: Array.from(document.querySelectorAll(selector)),
      })
    })
  } catch (e) {}

  return elements
}
