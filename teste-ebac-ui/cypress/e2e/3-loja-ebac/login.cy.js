/// <referece types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () =>{
        
        cy.get('#username').type('eduardo.teste@gmail.com') 
        cy.get('#password').type('Teste1234@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, eduardo.teste-1443 (não é eduardo.teste-1443? Sair)')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        
        cy.get('#username').type('eduardo.teste@gmail.com') 
        cy.get('#password').type('Teste1234@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        
        cy.get('#username').type('eduardo.teste@gmail.com') 
        cy.get('#password').type('teste1234@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        
    });

    it('Deve fazer login usando- massa de dados', () => {
        cy.get('#username').type(perfil.usuário) 
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, eduardo.teste-1443 (não é eduardo.teste-1443? Sair)')
    });
    
    
    it('Deve fazer login usando- Usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuário, {log:false}) 
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, eduardo.teste-1443 (não é eduardo.teste-1443? Sair)')
       })

    });

    it.only('Deve fazer login com sucesso usando comandos customizados', () => {
        cy.login('eduardo.teste@gmail.com', 'Teste1234@')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, eduardo.teste-1443 (não é eduardo.teste-1443? Sair)')

    });

})



