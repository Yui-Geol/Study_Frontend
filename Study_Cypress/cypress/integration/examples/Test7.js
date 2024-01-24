//cyress - Spec file == Test1.js

describe('My Third Test Suite', function() {
  it('My SecondTest case', function()  {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // cypresss는 한 테스트에 2가지 도메인을 허용하시 않는다

    cy.get('#opentab').then(function(e1){
      const url = e1.prop('href')//qaclickacademy.com
      cy.visit(url)
      cy.origin(url, () => 
      {
        cy.get("div.sub-menu-bar a[href*='about']").click()
      })
    })
  })
})

