describe('navigation', () => {
  it('Check home page', () => {
    cy.visit('/')
    cy.contains('the kit')
  })
})

export {}
