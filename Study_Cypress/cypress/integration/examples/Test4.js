//cyress - Spec file == Test1.js

describe('My Third Test Suite', function() {
  it('My SecondTest case', function()  {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    //window:alert
    cy.on('window:alert',(str) => {
      //Mocha
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm',(str) => {
      //Mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

    //링크를 켤 때 새로운 탭에 켜지면 cypress는 test를 진행할 수 없음

    cy.get('#opentab').invoke('removeAttr','target').click()//html의 속성에 _blank 속성이 있는데 이것은 새로운 탭을 열어서 실행하므로 삭제하였음

    cy.url().should('include','qaclickacademy')
    cy.go('back')
  
    // cy.go('back')//cy.go('back')은 뒤로가기, cy.go('forward')는 앞으로 가기이다


  })
})

