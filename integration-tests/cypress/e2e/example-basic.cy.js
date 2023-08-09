Cypress.config({
  baseUrl: 'http://localhost:8090/',
})

describe('example-basic', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(600) // to ensure React is actaully mounted
  })

  it('root page has wrapper with "main" element', () => {
    assert.exists(cy.get('main'))
  })

  it('class-selector has to restore its position', () => {
    const selector = '.class-selector'

    cy.get(selector).invoke('scrollTop').should('equal', 0)
    cy.get(selector)
      .invoke('attr', 'style', 'scrollBehavior: auto')
      .scrollTo(0, 100)
    cy.get(selector).invoke('scrollTop').should('equal', 100)
    cy.visit('/page-2')
    cy.get(selector).invoke('scrollTop').should('equal', 100)
  })

  it('id-selector has to restore its position', () => {
    const selector = '#id-selector'

    cy.get(selector).invoke('scrollTop').should('equal', 0)
    cy.get(selector)
      .invoke('attr', 'style', 'scrollBehavior: auto')
      .scrollTo(0, 100)
    cy.get(selector).invoke('scrollTop').should('equal', 100)
    cy.visit('/page-2')
    cy.get(selector).invoke('scrollTop').should('equal', 100)
  })

  it('attributes selector has to restore its position', () => {
    const selector = '[data-testid="test-selector"]'

    cy.get(selector).invoke('scrollTop').should('equal', 0)
    cy.get(selector)
      .invoke('attr', 'style', 'scrollBehavior: auto')
      .scrollTo(0, 100)
    cy.get(selector).invoke('scrollTop').should('equal', 100)
    cy.visit('/page-2')
    cy.get(selector).invoke('scrollTop').should('equal', 100)
  })

  it('fallback-position has to use its initial given position', () => {
    const selector = '#fallback-position'

    const visiblePos = 1100
    const appr = 50

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.within', visiblePos, visiblePos + appr)

    cy.visit('/page-2')

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.within', visiblePos, visiblePos + appr)
  })

  it('fallback-position has to restore its "in view" position', () => {
    const selector = '#fallback-position'

    const visiblePos = 1100
    const inView = 100
    const appr = 50

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.within', visiblePos, visiblePos + appr)

    cy.get(selector).scrollTo(0, visiblePos - inView)

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.within', visiblePos - inView, visiblePos)

    cy.visit('/page-2')

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.within', visiblePos - inView, visiblePos)
  })

  it('fallback-position has to restore its "out of view" position', () => {
    const selector = '#fallback-position'

    const visiblePos = 1100
    const outOfView = 200
    const appr = 50

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.within', visiblePos, visiblePos + appr)

    cy.get(selector).scrollTo(0, visiblePos - outOfView)

    cy.visit('/page-2')

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.within', visiblePos, visiblePos + appr)
  })
})
