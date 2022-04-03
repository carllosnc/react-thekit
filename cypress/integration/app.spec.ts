describe('navigation', () => {
  it('Check home page', () => {
    cy.visit('/')
    cy.contains('loading...')
    cy.contains('home page')
  })
})

export { }
