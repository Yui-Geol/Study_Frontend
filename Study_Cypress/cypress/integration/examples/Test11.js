import Test from "../pageObjects/Test";

describe('First test case', function() {
  before( function() {
    cy.fixture('example').then(function(data){
      this.data = data
    });
    // cy.restoreLocalStorage('speakeaseLocalStorage');
  })
  
  it('First test case', function() {

    cy.visit("https://app-testnets.speakease.co")
    // cy.getLocalStorage("name").should("equal","cream").log(cy.getLocalStorage("name")).pause();
    cy.wait(10000);

    

    cy.readFile('cypress/fixtures/sound/setdevicename.wav', 'base64').then((wav) => {
      const uri = 'data:audio/wav;base64,' + wav
      const audio = new Audio(uri)
      audio.play()
      const mediaStream = audio.captureStream();
      

    })
    cy.wait(10000)
    cy.get('speakease-response > .text').should('have.text',"How would you like to name your device?")
  })
})