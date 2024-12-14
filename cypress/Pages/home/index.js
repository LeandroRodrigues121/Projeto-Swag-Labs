import { elements as el } from "./elementos"
/**
 * Classe Home
 * Representa a página principal da aplicação (Home), incluindo métodos para validar acesso,
 * listar produtos, adicionar produtos ao carrinho, ordenar e consultar informações dos produtos.
 */

class Home{
 /**
     * Valida o acesso à página inicial.
     * Verifica se o título da página é "Products" e tira um screenshot da tela.
     */
    validarAcessoPagina(){
        cy.get('[data-test="title"]').should('contain','Products')

        cy.screenshot('acesso a página home ')
    }

/**
     * Valida a lista de produtos exibida na página inicial.
     * Confere se os nomes dos produtos correspondem aos esperados.
     */
    validarListaDeProduto(){
        cy.get(el.produto_1).should('contain',el.nameProduto_1) // Valida o nome do produto 1
        cy.get(el.produto_2).should('contain',el.nameProduto_2)// Valida o nome do produto 2
        cy.get(el.produto_3).should('contain',el.nameProduto_3)// Valida o nome do produto 3
        cy.get(el.produto_4).should('contain',el.nameProduto_4)// Valida o nome do produto 4
        cy.get(el.produto_5).should('contain',el.nameProduto_5)// Valida o nome do produto 5
        cy.get(el.produto_6).should('contain',el.nameProduto_6)// Valida o nome do produto 6

    }

  /**
     * Adiciona produtos ao carrinho.
     * Clica nos botões para adicionar dois produtos ao carrinho.
     */
    adicionarProduto(){
        cy.get(el.adiProduto_1).click()// Adiciona o produto 1
        cy.get(el.adiProduto_2).click()// Adiciona o produto 2
    }

/**
     * Retorna para a página inicial a partir da tela do carrinho.
     * Clica no botão de voltar e valida se está na página inicial.
     */

    voltarParaTelaHome(){
        cy.get(el.carrinho).click()// Acessa o carrinho
        cy.get(el.buttonVoltarTelaHome).click()// Clica no botão de voltar
        cy.get(el.titulo).should('contain','Products')// Verifica se está na tela inicial
    }

   /**
     * Ordena os produtos do menor para o maior preço.
     * Seleciona a opção de filtro "Menor para Maior".
     */
    ordenarMenorParaMaior(){
        cy.get(el.buttonFiltro).select(el.menorParaMaior) // Aplica o filtro "Menor para Maior"
    }

    /**
     * Ordena os produtos do maior para o menor preço.
     * Seleciona a opção de filtro "Maior para Menor".
     */
    ordenarMaiorParaMenor(){
        cy.get(el.buttonFiltro).select(el.maiorParaMenor) // Aplica o filtro "Maior para Menor"
    }

    /**
     * Ordena os produtos em ordem alfabética inversa (Z a A).
     */
    ordenarDo_Z_ate_A(){
        cy.get(el.buttonFiltro).select(el.ordenar_Z_A) // Aplica o filtro "Z a A"
    }

    /**
     * Ordena os produtos em ordem alfabética (A a Z).
     */

    ordenarDo_A_ate_Z(){
        cy.get(el.buttonFiltro).select(el.ordenar_A_Z) // Aplica o filtro "A a Z"
    }


    /**
     * Consulta um produto específico.
     * Clica no produto para abrir seus detalhes e verifica a descrição.
     */
    consutarProduto(){
        cy.get(el.produto).click() // Seleciona o produto
        cy.get('[data-test="inventory-item-desc"]').should('contain',el.descricaoProduto_4) // Valida a descrição

    }

     /**
     * Adiciona um produto ao carrinho a partir da página de detalhes do produto.
     */

    adicionarProduto(){
        cy.get(el.adicionarCarrinho).click()// Adiciona o produto ao carrinho
    }


    /**
     * Volta para a página inicial a partir de uma página de detalhes.
     * Clica no botão de voltar e valida se está na página inicial.
     */

    funcaoVoltar(){
        cy.get(el. buttonVoltar).click()// Clica no botão de voltar
        cy.get(el.titulo).should('contain','Products')// Verifica se está na tela inicial
    }

}

export default new Home()