  describe('Acessar post', () => {
    it('Deve validar o conteúdo do post', () => {
      cy.visit('http://app-jmblog-front-test.s3-website.us-east-2.amazonaws.com/')
      cy.wait(5000)
      cy.url().should('eq','http://app-jmblog-front-test.s3-website.us-east-2.amazonaws.com/')
      cy.get('#logo').should('be.visible')
      cy.get('[name=post-image]').should('be.visible')
      cy.get('[name=post-title]').first()
                                 .contains('Neymar');
      //cy.get('[name=post-summary]').contains('Alice was beginning to ')
    })
  })