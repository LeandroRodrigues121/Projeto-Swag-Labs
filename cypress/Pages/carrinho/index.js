
/**
 * Classe Carrinho
 * Representa as interações relacionadas ao carrinho de compras na aplicação.
 * Contém métodos para adicionar, consultar, remover produtos e finalizar a compra.
 */

import { elements as el } from "./elementos"

class Carrinho{
     /**
     * Adiciona um produto ao carrinho.
     * Clica no produto listado para adicioná-lo ao carrinho.
     */

    adicionarCarrinho(){
        cy.get(el.produto_1).click() // Clica no primeiro produto da lista
    }

     /**
     * Consulta o carrinho de compras.
     * Navega até a página do carrinho.
     */
    consultarCarrinho(){
        cy.get(el.buttonCarrinho).click() // Clica no botão para acessar o carrinho
    }

      /**
     * Remove um produto do carrinho.
     * Localiza o produto no carrinho e clica no botão de remoção.
     */

    removerProduto(){
        cy.get(el.produtoRemover).click() // Clica no botão de remover produto
    }
     /**
     * Preenche os dados do comprador e finaliza a compra.
     * Realiza o fluxo completo de checkout, desde o preenchimento de informações
     * até a conclusão da compra.
     */

    prencherDados(){

        cy.get(el.buttonCarrinho).click()// Acessa o carrinho
        cy.get('[data-test="checkout"]').click()// Inicia o processo de checkout
         // Preenche os dados pessoais necessários para finalizar a compra
        cy.get(el.primeiroNome).type("Anna Paula")
        cy.get(el.ultimoNome).type("Rodrigues")
        cy.get(el.CPE ).type("072514")
        cy.get('[data-test="continue"]').click()// Prossegue para o próximo passo
        cy.get('[data-test="finish"]').click()// Finaliza a compra
    }

     /**
     * Valida a mensagem de sucesso após finalizar a compra.
     * Verifica se a mensagem exibida na tela corresponde ao esperado.
     */
    validacaoMensagemSucesso(){
        cy.get(el.campoAviso).should("contain",el.menssangeCompra)
    }


    /**
     * Adiciona um produto ao carrinho a partir da página de detalhes do produto.
     * Localiza o botão de adicionar na página de detalhes e clica nele.
     */
    adicionarCarrinhoNoConsultar(){
        cy.get(el.addProdutoNoConsultar).click()
        // Adiciona o produto ao carrinho
    }
}


export default new Carrinho()// Exporta uma instância da classe Carrinho