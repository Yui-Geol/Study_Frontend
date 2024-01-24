// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cy.get('h4.card-title').each(($el, index, $list) => {
//   if($el.text().includes('Blackberry')){
//     cy.get('button.btn.btn-info').eq(index).click()
//   }
// }) 
// 위 코드를 커스텀 커맨드로 등록하여 재사용 할 수 있음
Cypress.Commands.add('selectProduct', (ProductName) => {
  cy.get('h4.card-title').each(($el, index, $list) => {
    if($el.text().includes(ProductName)){
      cy.get('button.btn.btn-info').eq(index).click()
    }
  }) 
})
// cy.selectProduct('Blackberry')로 사용 할 수 있음