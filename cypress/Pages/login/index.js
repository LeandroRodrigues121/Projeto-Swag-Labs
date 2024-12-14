import { elements as el } from "./elementos"
/**
 * Classe Login
 * Representa a página de login da aplicação, contendo métodos para interagir com seus elementos
 * e realizar testes relacionados ao processo de autenticação.
 */

class Login {
/**
     * Acessa a página de login.
     */

    visitarPagina(){

        cy.visit("https://www.saucedemo.com/") // Navega até a URL da página de login
    }

    /**
     * Realiza login com credenciais válidas.
     * Preenche os campos de usuário e senha com valores válidos e clica no botão de login.
     */
    preencherCredenciaisValidas(){
        cy.get(el.username).type("standard_user") // Digita o nome de usuário válido
        cy.get(el.password).type("secret_sauce") // Digita a senha válida
        cy.get(el.loginButton).click() // Clica no botão de login
    }

    /**
     * Tenta realizar login com um nome de usuário inválido.
     * Preenche os campos de usuário e senha com valores incorretos e clica no botão de login.
     */
    preencherCredenciaisLoginInvalidas(){
        cy.get(el.username).type("standard_user2323")// Digita um nome de usuário inválido
        cy.get(el.password).type("secret_sauce") // Digita uma senha válida
        cy.get(el.loginButton).click() // Clica no botão de login
    }

    /**
     * Tenta realizar login com uma senha inválida.
     * Preenche os campos de usuário com valor válido e senha inválida e clica no botão de login.
     */
    preencherCredenciaisSenhaInvalidas(){
        cy.get(el.username).type("standard_user")  // Digita um nome de usuário inválido
        cy.get(el.password).type("secret_sauce1223") // Digita uma senha válida
        cy.get(el.loginButton).click() // Clica no botão de login
    }

     /**
     * Tenta realizar login sem preencher o campo de nome de usuário.
     * Apenas o campo de senha é preenchido antes de clicar no botão de login.
     */
    preencherCredenciaisLoginVazio(){
        cy.get(el.password).type("secret_sauce1223")// Digita uma senha válida
        cy.get(el.loginButton).click() // Clica no botão de login sem preencher o campo de usuário
    }

     /**
     * Tenta realizar login sem preencher o campo de senha.
     * Apenas o campo de usuário é preenchido antes de clicar no botão de login.
     */
    preencherCredenciaisSenhaVazia(){
        cy.get(el.username).type("standard_user")// Digita um nome de usuário válido
        cy.get(el.loginButton).click() // Clica no botão de login sem preencher o campo de senha

    }

    /**
     * Valida a mensagem de erro exibida para credenciais inválidas.
     * Verifica o texto da mensagem de erro e garante que o usuário permanece na página de login.
     */

    validarErroCredenciaisInvalidas(){
        cy.get(el.erroMessage).should('contain','Epic sadface: Username and password do not match any user in this service')

        cy.url().should('eq','https://www.saucedemo.com/')
    } // Verifica se a mensagem de erro corresponde ao esperado


    /**
     * Valida a mensagem de erro exibida ao tentar login sem preencher o campo de nome de usuário.
     * Verifica o texto da mensagem de erro e garante que o usuário permanece na página de login.
     */

    validarErroCredenciaisLoginVazia(){
        cy.get(el.erroMessage).should('contain','Epic sadface: Username is required') // Verifica a mensagem de erro

        cy.url().should('eq','https://www.saucedemo.com/') // Garante que a URL continua sendo a da página de login
    }

     /**
     * Valida a mensagem de erro exibida ao tentar login sem preencher o campo de senha.
     * Verifica o texto da mensagem de erro e garante que o usuário permanece na página de login.
     */

    validarErroCredenciaisSenhaVazia(){
        cy.get(el.erroMessage).should('contain','Epic sadface: Password is required') // Verifica a mensagem de erro

        cy.url().should('eq','https://www.saucedemo.com/') // Garante que a URL continua sendo a da página de login
    }
}

export default new Login() // Exporta uma instância da classe Login