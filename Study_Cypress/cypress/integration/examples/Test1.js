//cyress - Spec file == Test1.js

describe('My First Test Suite', function() {
  it('My FirstTest case', function()  {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');//ca를 입력 
    cy.wait(2000);
    //selenium get hit url in browser, cypress acts like findElement of selenium
    cy.get('.product:visible').should('have.length', 4);//:visible로 보이는 것만 테스트 함
    //Parent child chaining
    cy.get('.products').find('.product').should('have.length',4);
    //should를 통해 조건을 넣을 수 있음

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

    cy.get('.brand').should('have.text', 'GREENKART')

    //this is print in logs
    cy.get(':nth-child(4) > .stepper-input > .increment').click().then(function() {
      console.log('click increment')
    })
    cy.log('hello')

    cy.get('.products').find('.product').each(($e1, index, $list) => {
      const textVeg = $e1.find('product-name').text()
      if(textVeg.includes('Chashes')){
        cy.wrap($e1).find('button').click()
      }
    })
    cy.get('.brand').then(function(logoElement) {
      cy.log(logoElement.text())//resolve manually, text() is not cypress method[]
    })
    const logo = cy.get('.brand')
    //cy.log(logo.text())
  })
})

