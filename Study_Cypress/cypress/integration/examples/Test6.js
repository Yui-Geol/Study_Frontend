//cyress - Spec file == Test1.js

describe('My Third Test Suite', function() {
  it('My SecondTest case', function()  {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // cy.get('.mouse-hover-content').invoke('show')  
    cy.contains('Top').click({ force: true})//force: true를 이용하면 숨겨진 element를 클릭할 수 있음
    cy.url().should('include','top')


  })
})

