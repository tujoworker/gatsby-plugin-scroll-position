Cypress.config({
  baseUrl: 'http://localhost:8090/',
})

describe('example-basic', () => {
  const setPosition = async (selector) => {
    await cy.visit('/')

    cy.get(selector).invoke('scrollTop').should('equal', 0)

    cy.get(selector).scrollTo(0, 100)

    cy.get(selector).invoke('scrollTop').should('equal', 100)
  }

  const assertPosition = async (selector) => {
    await cy.visit('/page-2')

    cy.get(selector).invoke('scrollTop').should('equal', 100)
  }

  it('root page has wrapper with "main" element', () => {
    cy.visit('/')
    assert.exists(cy.get('main'))
  })

  it('class-selector will set its position', () => {
    setPosition('.class-selector')
  })
  it('class-selector will remember its position', () => {
    assertPosition('.class-selector')
  })

  it('id-selector will set its position', () => {
    setPosition('#id-selector')
  })
  it('id-selector will remember its position', () => {
    assertPosition('#id-selector')
  })

  it('attributes selector will set its position', () => {
    setPosition('[data-testid="test-selector"]')
  })
  it('attributes selector will remember its position', () => {
    assertPosition('[data-testid="test-selector"]')
  })
})
