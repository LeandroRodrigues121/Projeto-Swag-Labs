/// <reference types="cypress"/>

describe('Testes Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('contain','Products')
    });


    it('Validando Login Incorreta ', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user2323")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    });

    it('Validando Senha Incorreta ', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce1223")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    });

    it('Verificar a lista de produto', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Backpack')
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Bolt T-Shirt')
        cy.get(':nth-child(4) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Fleece Jacket')
        cy.get(':nth-child(5) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(6) > [data-test="inventory-item-description"]').should('contain','Test.allTheThings() T-Shirt (Red)')
    });

    it('Adicionar ao Carrinho', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
    });


    it('Adicionar ao Carrinho e volta para a tela pricipal', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('[data-test="title"]').should('contain','Products')
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

    it('Ordenação de Produtos de  menor para maior valor: ', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
    });

    it('Ordenação de Produtos do maior para o menor valor: ', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="product-sort-container"]').select('Price (high to low)')
    });


    it('Ordenação de Produtos de A ate Z: ', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="product-sort-container"]').select('Name (A to Z)')
    });

    it('Ordenação de Produtos de Z ate A: ', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
    });

    it('Consultar o Produto', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
        cy.get('[data-test="inventory-item-desc"]').should('contain','carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    });


    it('Consultar o Produto e adicionar no carrinho', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
        cy.get('[data-test="add-to-cart"]').click()
    });

});