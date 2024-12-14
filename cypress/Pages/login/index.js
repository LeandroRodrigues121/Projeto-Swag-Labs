import { elements as el } from "./elementos"


class Login {

    visitarPagina(){

        cy.visit("https://www.saucedemo.com/")
    }

    preencherCredenciaisValidas(){
        cy.get(el.username).type("standard_user")
        cy.get(el.password).type("secret_sauce")
        cy.get(el.loginButton).click()
    }

    preencherCredenciaisLoginInvalidas(){
        cy.get(el.username).type("standard_user2323")
        cy.get(el.password).type("secret_sauce")
        cy.get(el.loginButton).click()
    }

    preencherCredenciaisSenhaInvalidas(){
        cy.get(el.username).type("standard_user")
        cy.get(el.password).type("secret_sauce1223")
        cy.get(el.loginButton).click()
    }

    preencherCredenciaisLoginVazio(){
        cy.get(el.password).type("secret_sauce1223")
        cy.get(el.loginButton).click()
    }

    preencherCredenciaisSenhaVazia(){
        cy.get(el.username).type("standard_user")
        cy.get(el.loginButton).click()

    }

    validarErroCredenciaisInvalidas(){
        cy.get(el.erroMessage).should('contain','Epic sadface: Username and password do not match any user in this service')

        cy.url().should('eq','https://www.saucedemo.com/')
    }

    validarErroCredenciaisLoginVazia(){
        cy.get(el.erroMessage).should('contain','Epic sadface: Username is required')

        cy.url().should('eq','https://www.saucedemo.com/')
    }

    validarErroCredenciaisSenhaVazia(){
        cy.get(el.erroMessage).should('contain','Epic sadface: Password is required')

        cy.url().should('eq','https://www.saucedemo.com/')
    }
}

export default new Login()