Cypress.config({
  baseUrl: 'http://localhost:8090/',
})

describe('example-basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('root page has wrapper with "main" element', () => {
    assert.exists(cy.get('main'))
  })

  it('class-selector has to restore its position', () => {
    const selector = '.class-selector'

    cy.get(selector).invoke('scrollTop').should('equal', 0)
    cy.get(selector)
      .invoke('attr', 'style', 'scrollBehavior: auto')
      .scrollTo(0, 100, { duration: 100 })
    cy.get(selector).invoke('scrollTop').should('equal', 100)
    cy.visit('/page-2')
    cy.get(selector).invoke('scrollTop').should('equal', 100)
  })

  it('id-selector has to restore its position', () => {
    const selector = '#id-selector'

    cy.get(selector).invoke('scrollTop').should('equal', 0)
    cy.get(selector)
      .invoke('attr', 'style', 'scrollBehavior: auto')
      .scrollTo(0, 100, { duration: 100 })
    cy.get(selector).invoke('scrollTop').should('equal', 100)
    cy.visit('/page-2')
    cy.get(selector).invoke('scrollTop').should('equal', 100)
  })

  it('attributes selector has to restore its position', () => {
    const selector = '[data-testid="test-selector"]'

    cy.get(selector).invoke('scrollTop').should('equal', 0)
    cy.get(selector)
      .invoke('attr', 'style', 'scrollBehavior: auto')
      .scrollTo(0, 100, { duration: 100 })
    cy.get(selector).invoke('scrollTop').should('equal', 100)
    cy.visit('/page-2')
    cy.get(selector).invoke('scrollTop').should('equal', 100)
  })

  it('fallback-position has to restore its position', () => {
    const selector = '#fallback-position'

    const visiblePos = 1110
    const inView = 100
    const outOfView = 200
    const appr = 40

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.gte', visiblePos)
      .should('be.lte', visiblePos + appr)

    cy.get(selector).scrollTo(
      0,
      visiblePos + outOfView,
      { duration: 100 },
      { duration: 100 }
    )

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.gte', visiblePos + outOfView)
      .should('be.lte', visiblePos + outOfView + appr)

    cy.visit('/page-2')

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.gte', visiblePos)
      .should('be.lte', visiblePos + appr)

    cy.get(selector).scrollTo(
      0,
      visiblePos - inView,
      { duration: 100 },
      { duration: 100 }
    )

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.gte', visiblePos - inView)
      .should('be.lte', visiblePos - inView + appr)

    cy.visit('/')

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.gte', visiblePos - inView)
      .should('be.lte', visiblePos - inView + appr)

    cy.get(selector).scrollTo(
      0,
      outOfView,
      { duration: 100 },
      { duration: 100 }
    )

    cy.visit('/')

    cy.get(selector)
      .invoke('scrollTop')
      .should('be.gte', visiblePos)
      .should('be.lte', visiblePos + appr)
  })
})
