import { elements as el } from "./elementos"


class Home{

    validarAcessoPagina(){
        cy.get('[data-test="title"]').should('contain','Products')

        cy.screenshot('acesso a página home ')
    }


    validarListaDeProduto(){
        cy.get(el.produto_1).should('contain',el.nameProduto_1)
        cy.get(el.produto_2).should('contain',el.nameProduto_2)
        cy.get(el.produto_3).should('contain',el.nameProduto_3)
        cy.get(el.produto_4).should('contain',el.nameProduto_4)
        cy.get(el.produto_5).should('contain',el.nameProduto_5)
        cy.get(el.produto_6).should('contain',el.nameProduto_6)

    }


    adicionarProduto(){
        cy.get(el.adiProduto_1).click()
        cy.get(el.adiProduto_2).click()
    }


    voltarParaTelaHome(){
        cy.get(el.carrinho).click()
        cy.get(el.buttonVoltarTelaHome).click()
        cy.get(el.titulo).should('contain','Products')
    }

    ordenarMenorParaMaior(){
        cy.get(el.buttonFiltro).select(el.menorParaMaior)
    }

    ordenarMaiorParaMenor(){
        cy.get(el.buttonFiltro).select(el.maiorParaMenor)
    }

    ordenarDo_Z_ate_A(){
        cy.get(el.buttonFiltro).select(el.ordenar_Z_A)
        
    }

    ordenarDo_A_ate_Z(){
        cy.get(el.buttonFiltro).select(el.ordenar_A_Z)
    }

    consutarProduto(){
        cy.get(el.produto).click()
        cy.get('[data-test="inventory-item-desc"]').should('contain',el.descricaoProduto_4)

    }

    adicionarProduto(){
        cy.get(el.adicionarCarrinho).click()
    }

    funcaoVoltar(){
        cy.get(el. buttonVoltar).click()
        cy.get(el.titulo).should('contain','Products')
    }
   // adicionarProduto(Name){
     //   cy.get(el.addToCart(Name)).click()
     //   cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    //    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
   // }
}

export default new Home()