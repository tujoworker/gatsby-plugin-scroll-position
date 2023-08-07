import { handleScrollPosition } from './handleScrollPosition'
import { saveScrollPosition } from './saveScrollPosition'

let isMounted = false

export function onPreRouteUpdate() {
  if (isMounted) {
    saveScrollPosition()
  }
}

export function onRouteUpdate({ prevLocation }) {
  if (isMounted && prevLocation) {
    handleScrollPosition()
  }
}

export function onInitialClientRender() {
  try {
    handleScrollPosition()

    window.addEventListener('beforeunload', saveScrollPosition)

    // Add iOS support
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      window.addEventListener('pagehide', saveScrollPosition)
    }
  } catch (e) {
    console.error(e)
  }

  isMounted = true
}
