import { handleScrollPosition } from './handleScrollPosition'
import { saveScrollPosition } from './saveScrollPosition'

export function onRouteUpdate() {
  handleScrollPosition()
}

export function onInitialClientRender() {
  try {
    window.addEventListener('beforeunload', saveScrollPosition)
  } catch (e) {}
}

export const onPreRouteUpdate = () => {
  saveScrollPosition()
}
