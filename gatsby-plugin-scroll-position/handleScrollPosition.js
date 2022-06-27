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
            element.style.position = 'relative'
            const offsetTop = fallbackElement.offsetTop

            const isInView =
              element.scrollTop <= offsetTop &&
              element.scrollTop >=
                offsetTop -
                  element.offsetHeight +
                  fallbackElement.offsetHeight

            if (!isInView) {
              element.scrollTop = offsetTop
            }

            element.style.position = ''
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
