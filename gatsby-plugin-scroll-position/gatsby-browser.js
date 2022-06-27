import { handleScrollPosition } from './handleScrollPosition'
import { saveScrollPosition } from './saveScrollPosition'

let isReady = false

export function onRouteUpdate() {
  if (isReady) {
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

  isReady = true
}

export const onPreRouteUpdate = () => {
  if (isReady) {
    saveScrollPosition()
  }
}
