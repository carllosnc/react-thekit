describe('navigation', () => {
  it('Check home page', () => {
    cy.visit('/')
    cy.contains('thekit')
  })
})

export {}
