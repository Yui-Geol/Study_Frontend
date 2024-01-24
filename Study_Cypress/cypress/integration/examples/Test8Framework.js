//cyress - Spec file == Test1.js
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"

describe('My Third Test Suite', function() {
  before(function() {
    cy.fixture('example').then(function(data){
      this.data = data
    })
    //runs once before all tests in the block
  })
  it('My SecondTest case', function()  {
    Cypress.config('defaultCommandTimeout',8000) //이 spec에서만 config가 적용됨
    const homePage = new HomePage()
    const productPage = new ProductPage()
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    homePage.getEditBox().type(this.data.name)
    // cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
    cy.get('select').select(this.data.gender)
    cy.get('#inlineRadio3').should('be.disabled')
    homePage.getEditBox().should('have.attr','minlength','2')
    cy.get(':nth-child(2) > .nav-link').click()
    // cy.get('h4.card-title').each(($el, index, $list) => {
    //   if($el.text().includes('Blackberry')){
    //     cy.get('button.btn.btn-info').eq(index).click()
    //   }
    // }) 
    //cy.pause()은 테스트 도중에 멈춤
    cy.selectProduct('Blackberry')
    cy.selectProduct('Nokia Edge')// cypress/support/commands.js에서 사용

    this.data.productName

    this.data.productName.forEach(function(element) {
      cy.selectProduct(element)
    });
    productPage.checkOutButton().click()

    var sum = 0

    cy.get('tr td:nth-child(4) strong').each(($el, index, $value) => {
      // cy.log($el.text())//element의 값 추출
      const amount = $el.text()
      var res = amount.split(" ")
      res = res[1].trim()//trim은 좌우 공백을 제거하는 함수이다
      cy.log(res)
      sum = Number(sum) + Number(res) 
    }).then(function() {
      cy.log(sum)
    })

    cy.get('h3 strong').then(function(element) {
      const amount2 = element.text()
      var res2 = amount2.split(" ")
      res2 = res2[1].trim()
    })

    cy.contains('Checkout').click()
    cy.get('#country').type("India")
    cy.wait(4000)
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force:true})
    cy.get('input[type="submit"]').click()
    // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element) {
      const actualText = element.text()
      var res = actualText.split(" ")
      res = res[1].trim()//trim은 좌우 공백을 제거하는 함수이다
      
      expect(actualText.includes("Success")).to.be.true
    })


  })
})