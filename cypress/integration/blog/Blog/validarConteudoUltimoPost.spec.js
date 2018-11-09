  describe('Validar conteúdo do último post', () => {
    it('Deve validar a disponibilidade do blog', () => {
    let url = "http://app-jmblog-front-test.s3-website.us-east-2.amazonaws.com/"  
      cy.visit(url)
      cy.url().should('eq',url)
    })

    it('Deve validar a existência da título do último post', () => {
      cy.get('[name=post-title]').last()
                                 .should(($div) => {
      const texto = $div.text()                                   
      expect(texto).not.to.be.empty
      })
    })

    it('Deve validar a existência da data para o último post', () => {
      cy.get('[name=post-date]').last()
                                .should(($div) => {
      const texto = $div.text()                                   
      expect(texto).not.to.be.empty
      })
    })

    it('Deve validar a existência da imagem do último post', () => {
      cy.get('[name=post-image]').last()
                                 .should('be.visible')
    })

    it('Deve validar a existência do sumário do último post', () => {
      cy.get('[name=post-summary]').last()
                                 .should(($div) => {
      const texto = $div.text()                                   
      expect(texto).not.to.be.empty
      })
    })
      
})