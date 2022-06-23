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
})
