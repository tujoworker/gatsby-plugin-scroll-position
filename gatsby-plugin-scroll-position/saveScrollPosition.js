import { getElements } from './handleScrollPosition'

export function saveScrollPosition() {
  try {
    getElements().forEach(({ selector, elements }) => {
      elements.forEach((element) => {
        window.localStorage.setItem(
          'scroll-' + selector,
          element.scrollTop
        )
      })
    })
  } catch (e) {}
}
