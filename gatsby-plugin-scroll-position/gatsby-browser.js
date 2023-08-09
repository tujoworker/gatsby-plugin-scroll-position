import { useEffect } from 'react'
import { handleScrollPosition } from './handleScrollPosition'
import { saveScrollPosition } from './saveScrollPosition'

let isDev = false
try {
  isDev = process.env.NODE_ENV === 'development'
} catch (e) {}

export function onRouteUpdate({ prevLocation }) {
  if (prevLocation) {
    handleScrollPosition({ scrollBehavior: 'smooth' })
  }
}

export function wrapPageElement({ element }) {
  saveScrollPosition()
  return element
}

export function wrapRootElement({ element }) {
  return isDev ? (
    <>
      {element}
      <ScrollPositionDev />
    </>
  ) : (
    element
  )
}

export function onPostPrefetchPathname() {
  if (isDev) {
    saveScrollPosition()
  }
}

function ScrollPositionDev() {
  useEffect(() => {
    window.requestAnimationFrame(handleScrollPosition)
  }, [])
}

export function onInitialClientRender() {
  handleScrollPosition()

  try {
    window.addEventListener('beforeunload', saveScrollPosition)

    // Add iOS support
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      window.addEventListener('pagehide', saveScrollPosition)
    }
  } catch (e) {
    console.error(e)
  }
}
