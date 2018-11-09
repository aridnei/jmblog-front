  describe('Validar conteúdo do blog', () => {
    it('Deve validar a disponibilidade do blog', () => {
      let url = "http://app-jmblog-front-test.s3-website.us-east-2.amazonaws.com/"
      cy.visit(url)
      cy.url().should('eq',url)
    })

    it('Deve validar a existência da logo', () => {
        cy.get('#logo').should('be.visible')
    })

    it('Deve validar a existência da título do primeiro post', () => {
        cy.get('[name=post-title]').first()
                                   .should(($div) => {
        const texto = $div.text()                                   
        expect(texto).not.to.be.empty
        })
    })

    it('Deve validar a existência da data para o primeiro post', () => {
        cy.get('[name=post-date]').first()
                                   .should(($div) => {
        const texto = $div.text()                                   
        expect(texto).not.to.be.empty
        })
    })

    it('Deve validar a existência da imagem do primeiro post', () => {
        cy.get('[name=post-image]').first()
                                   .should('be.visible')
    })

    it('Deve validar a existência do sumário do primeiro post', () => {
        cy.get('[name=post-title]').first()
                                   .should(($div) => {
        const texto = $div.text()                                   
        expect(texto).not.to.be.empty
        })
    })
          
})