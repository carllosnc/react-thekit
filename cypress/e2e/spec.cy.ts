describe('spec.cy.ts', () => {
  it('should visit', () => {
    cy.visit('/')
    cy.contains('thekit')
  })
})

export {}
