//cyress - Spec file == Test1.js

describe('My Third Test Suite', function() {
  it('My SecondTest case', function()  {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

      const text=$e1.text()
      if(text.includes("Python")){
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) {
          const priceText = price.text()
          expect(priceText).to.equal('25')
        })//다음 형제 element로 넘어가는 법
      }
      
      })
    


  })
})

