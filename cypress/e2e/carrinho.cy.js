/// <reference types="cypress"/>
import Login from '../Pages/login'
import home from '../Pages/home';
import Carrinho from '../Pages/carrinho';
import carrinho from '../Pages/carrinho';

/**
 * Suite de Testes Funcionais do Carrinho
 * Testa funcionalidades relacionadas ao carrinho de compras e o fluxo de compra.
 */

describe('Testes Funcional de Login', () => {
 /**
     * Antes de cada teste, realiza login na aplicação.
     * Essa etapa inicializa todos os testes com um usuário logado.
     */

    beforeEach(() => {
       Login.visitarPagina()// Acessa a página de login
       Login.preencherCredenciaisValidas() // Faz login com credenciais válidas

    })

     /**
     * Teste: Adicionar produtos ao carrinho.
     * Cenário: O usuário adiciona itens ao carrinho e verifica sua presença.
     */
    it('Adicionar ao Carrinho', () => {
    // Ação: Adiciona produtos ao carrinho
      carrinho.adicionarCarrinho()

      // Validação: Consulta o carrinho e verifica os itens
      carrinho.consultarCarrinho()

    });


     /**
     * Teste: Remover produtos do carrinho.
     * Cenário: O usuário adiciona itens ao carrinho e os remove em seguida.
     */
    it('Remover do Carrinho', () => {
        // Ação: Adiciona produtos ao carrinho
        carrinho.adicionarCarrinho()

        // Ação: Remove os produtos do carrinho
        carrinho.removerProduto()
    });
/**
     * Teste: Finalizar compra.
     * Cenário: O usuário adiciona produtos ao carrinho, preenche os dados e conclui a compra.
     */
    
    it('Finalizar Compra:', () => {
        // Ação: Adiciona produtos ao carrinho
        carrinho.adicionarCarrinho()
// Ação: Preenche os dados de entrega e finaliza a compra
        carrinho.prencherDados()
        // Validação: Verifica se a mensagem de sucesso é exibida
        carrinho.validacaoMensagemSucesso()
    });


 /**
     * Teste: Consultar um produto e adicioná-lo ao carrinho.
     * Cenário: O usuário visualiza um produto específico e o adiciona ao carrinho.
     */

    it('Consultar o Produto e adicionar no carrinho', () => {
        // Ação: Consulta informações de um produto
        home.consutarProduto()
        // Ação: Adiciona o produto ao carrinho
        carrinho.adicionarCarrinhoNoConsultar()
    });
    /**
     * Teste: Consultar um produto, adicioná-lo ao carrinho e verificar o carrinho.
     * Cenário: O usuário visualiza um produto, o adiciona ao carrinho e verifica sua presença no carrinho.
     */

    it('Consultar o Produto e adicionar no carrinho e visualizar o carrinho', () => {
         // Ação: Consulta informações de um produto
        home.consutarProduto()
         // Ação: Adiciona o produto ao carrinho
        carrinho.adicionarCarrinhoNoConsultar()
        // Validação: Verifica se o produto adicionado está presente no carrinho
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')
    });
});