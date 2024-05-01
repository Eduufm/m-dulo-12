/// <referece types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
    });


    it.only('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Aether Gym Pant')
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});