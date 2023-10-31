describe('Testa NameFunktioner', () => {

  //let btnName 

  beforeEach("test", () => {
    cy.visit('index.html');
    //btnName = document.getElementById("btnName");
  })

  it('Marcus', () => {
    cy.get("input").type("Marcus");
    cy.get('.btnName').click();
    cy.get("p").should("contain.text", "Hello Marcus");
  })

  it('Niklas', () => {
    cy.get("input").type("Niklas");
    cy.get("button").click();
    cy.get("p").should("contain.text", "Hello Niklas");
  })
})