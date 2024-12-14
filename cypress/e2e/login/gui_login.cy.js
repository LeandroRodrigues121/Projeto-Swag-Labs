/// <reference types="cypress"/>

describe('Testes Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('contain','Products')
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


});