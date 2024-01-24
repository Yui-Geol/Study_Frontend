//cyress - Spec file == Test1.js
import 'cypress-iframe'

describe('My Third Test Suite', function() {
  it('My SecondTest case', function()  {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded('#courses-iframe')
    // cy.iframe().find("a[href*='mentorship']").eq(0).click()

    cy.iframe().find("a[href*='courses']").eq(0).click()
  })
})

