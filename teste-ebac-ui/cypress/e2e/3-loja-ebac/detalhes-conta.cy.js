/// <reference types="cypress"/>


describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.login('eduardo.teste@gmail.com', 'Teste1234@')
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Eduardo', 'Figueiredo', 'Edu-QA' )
        
    });



});