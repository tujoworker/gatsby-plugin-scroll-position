/**
 * We also have included the same code "setPostBodyComponents"
 */
export function handleScrollPosition({ scrollBehavior = null } = {}) {
  if (typeof window === 'undefined') {
    return // stop here
  }

  try {
    getElements().forEach(({ selector, fallback, elements }) => {
      elements.forEach((element) => {
        const storedPos = parseFloat(
          window.localStorage.getItem('scroll-' + selector)
        )
        let scrollTop = storedPos || 0

        if (fallback) {
          const fallbackElement = document.querySelector(fallback)
          if (fallbackElement) {
            const offsetTop = fallbackElement.offsetTop

            const isInView =
              scrollTop <= offsetTop &&
              scrollTop >=
                offsetTop -
                  element.offsetHeight +
                  fallbackElement.offsetHeight

            if (!isInView) {
              scrollTop = offsetTop
            }
          }
        }

        element.style.scrollBehavior = 'auto'

        if (scrollBehavior === 'smooth') {
          element.scrollTop = storedPos
          element.style.scrollBehavior = 'smooth'
        }

        element.scrollTop = scrollTop
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
