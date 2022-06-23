/**
 * We also have included the same code "setPostBodyComponents"
 */
export function handleScrollPosition() {
  if (typeof window === 'undefined') {
    return // stop here
  }

  try {
    getElements().forEach(({ selector, fallback, elements }) => {
      elements.forEach((element) => {
        const scrollTop = parseFloat(
          window.localStorage.getItem('scroll-' + selector)
        )

        element.style.scrollBehavior = 'auto'
        element.scrollTop = scrollTop

        if (fallback) {
          const fallbackElement = document.querySelector(fallback)
          if (fallbackElement) {
            const fallbackOffset =
              fallbackElement.getBoundingClientRect().top -
              element.getBoundingClientRect().top

            const isInView =
              fallbackOffset >= 0 &&
              fallbackOffset <=
                element.offsetHeight - fallbackElement.offsetHeight

            if (!isInView) {
              fallbackElement.style.scrollBehavior = 'auto'
              fallbackElement.scrollIntoView({ behavior: 'auto' })
              fallbackElement.style.scrollBehavior = ''
            }
          }
        }

        element.style.scrollBehavior = ''
      })
    })
  } catch (e) {
    console.error(e)
  }
}

export function getElements() {
  const elements = []

  try {
    const selectors = window.__SP_ELEMENTS__ || []
    selectors.forEach((props) => {
      const { selector, ensureInView: fallback = null } =
        typeof props === 'string' ? { selector: props } : props

      elements.push({
        selector,
        fallback,
        elements: Array.from(document.querySelectorAll(selector)),
      })
    })
  } catch (e) {
    console.error(e)
  }

  return elements
}
