  describe('Acessar blog', () => {
    it('Deve validar a disponibilidade do blog', () => {
      cy.visit('http://localhost:3000/')
      cy.url().should('eq', 'http://localhost:3000/')   
      cy.get('[name=post-title]').contains('Apocalyptic looks for your 2018 mood, from Rick Owens')  
    })
  })