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
    cy.get(selector).scrollTo(0, 100)
    cy.get(selector).invoke('scrollTop').should('equal', 100)
    cy.visit('/page-2')
    cy.get(selector).invoke('scrollTop').should('equal', 100)
  })

  it('id-selector has to restore its position', () => {
    const selector = '#id-selector'

    cy.get(selector).invoke('scrollTop').should('equal', 0)
    cy.get(selector).scrollTo(0, 100)
    cy.get(selector).invoke('scrollTop').should('equal', 100)
    cy.visit('/page-2')
    cy.get(selector).invoke('scrollTop').should('equal', 100)
  })

  it('attributes selector has to restore its position', () => {
    const selector = '[data-testid="test-selector"]'

    cy.get(selector).invoke('scrollTop').should('equal', 0)
    cy.get(selector).scrollTo(0, 100)
    cy.get(selector).invoke('scrollTop').should('equal', 100)
    cy.visit('/page-2')
    cy.get(selector).invoke('scrollTop').should('equal', 100)
  })

  it('fallback-position has to restore its position', () => {
    const selector = '#fallback-position'

    const visiblePos = 1110
    const scrollTo = 200
    const roundAbout = 50

    cy.get(selector).invoke('scrollTop').should('be.gte', visiblePos)
    cy.get(selector).scrollTo(0, visiblePos + scrollTo)
    cy.wait(1000)
    cy.get(selector)
      .invoke('scrollTop')
      .should('be.gte', visiblePos + scrollTo)

    cy.visit('/page-2')
    cy.get(selector)
      .invoke('scrollTop')
      .should('be.gte', visiblePos - roundAbout)
      .should('be.lte', visiblePos + roundAbout)
    cy.get(selector).scrollTo(0, scrollTo)
    cy.wait(1000)

    cy.visit('/')
    cy.get(selector)
      .invoke('scrollTop')
      .should('be.gte', visiblePos - roundAbout)
      .should('be.lte', visiblePos + roundAbout)
  })
})
