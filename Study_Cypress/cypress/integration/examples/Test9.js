describe('First test case', function() {
  before( function() {
    cy.fixture('example').then(function(data){
      this.data = data
    });
    cy.clearLocalStorageSnapshot('speakeaseLocalStorage')
  })
  
  afterEach( () => {
    cy.saveLocalStorage('speakeaseLocalStorage');
  } )

  it('First test case', function() {

    cy.visit("https://app-testnets.speakease.co")
    cy.wait(5000)
    cy.get('a[href*="/giveName.html"]').click()
    cy.get('textarea').type('cream')
    cy.get('.input-and-btn button').click()
    cy.get('textarea').type('yes')
    cy.get('.input-and-btn button').click()
    cy.wait(4000)
    cy.get('a[href*="/setEmail.html"]').click()
    cy.get('textarea').type('gamoon777@naver.com')
    cy.get('.input-and-btn button').click()
    cy.get('textarea').type('yes')
    cy.get('.input-and-btn button').click()
    

    // cy.readFile('cypress/fixtures/sound/setdevicename.wav', 'base64').then((wav) => {
    //   const uri = 'data:audio/wav;base64,' + wav
    //   const audio = new Audio(uri)
    
    //   audio.play()
    // })
    // cy.wait(5000)
    // cy.get('speakease-response > .text').should('have.text',"How would you like to name your device?")
  })

  it('Check localstorage', function () {
    cy.restoreLocalStorage('speakeaseLocalStorage')
    cy.visit("https://app-testnets.speakease.co")
    cy.wait(5000);
    cy.getLocalStorage("name").should("equal", "cram")
    cy.getLocalStorage("email").should("equal", "gamoon777@naver.com")

  })
})