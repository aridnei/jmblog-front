  describe('Acessar blog', () => {
    it('Deve validar a disponibilidade do blog', () => {
      let url = "http://app-jmblog-front-test.s3-website.us-east-2.amazonaws.com/"  
      cy.visit(url)
      cy.url().should('eq', url)   
      cy.get('[name=post-title]').last()
                                 .contains('Festa de Trabalho ainda é ambiente corporativo!')  
    })
  })