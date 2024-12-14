/// <reference types="cypress"/>
import Login from '../Pages/login'
import home from '../Pages/home';

describe('Testes Funcional de Login', () => {

    beforeEach(() => {
       Login.visitarPagina()
       Login.preencherCredenciaisValidas()

    })

    it('Adicionar ao Carrinho', () => {

        home.adicionarProduto('sauce-labs-backpack')
      
        cy.get('[data-test="shopping-cart-link"]').click()
    });

    it('Remover do Carrinho', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    });

    
    it('Finalizar Compra:', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type("Anna Paula")
        cy.get('[data-test="lastName"]').type("Rodrigues")
        cy.get('[data-test="postalCode"]').type("072514")
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-text"]').should("contain",'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    });

    it('Consultar o Produto e adicionar no carrinho', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
        cy.get('[data-test="add-to-cart"]').click()
    });

    it('Consultar o Produto e adicionar no carrinho e visualizar o carrinho', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')
    });
});