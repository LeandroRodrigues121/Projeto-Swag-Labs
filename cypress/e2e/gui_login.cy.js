/// <reference types="cypress"/>
import Login from '../Pages/login'
import home from '../Pages/home';

describe('Testes Funcional de Login', () => {

    beforeEach(() => {
        Login.visitarPagina();
})

    it('Deve realizar o login com sucesso', () => {
        //ação
        Login.preencherCredenciaisValidas()

        //resposta
        home.validarAcessoPagina()
    });


    it('Validando Login Incorreta ', () => {

        Login.preencherCredenciaisLoginInvalidas()

        Login.validarErroCredenciaisInvalidas()

    });

    it('Validando Senha Incorreta ', () => {

        Login.preencherCredenciaisSenhaInvalidas()

        Login.validarErroCredenciaisInvalidas()
    });

    it('Validando login vazio ', () => {
         Login.preencherCredenciaisLoginVazio()

        Login.validarErroCredenciaisLoginVazia()
    });

    it('Validando Senha vazia vazio ', () => {
        Login.preencherCredenciaisSenhaVazia()

        Login.validarErroCredenciaisSenhaVazia()
    });

});