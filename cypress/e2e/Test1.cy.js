describe('Visit both pages', () => {
  it('Page 1', () => {
    cy.visit('index.html')
    cy.get("h1").should("contain.text", "First page")
  })

  it('Page 2', () => {
    cy.visit("second.html")
    cy.get("h1").should("contain.text", "Second page")
  })
})