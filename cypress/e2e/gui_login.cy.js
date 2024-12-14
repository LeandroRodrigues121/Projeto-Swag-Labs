/// <reference types="cypress"/>
import Login from '../Pages/login'
import home from '../Pages/home';

/**
 * Suite de Testes Funcionais de Login
 * Contém casos de teste relacionados ao processo de login na aplicação.
 */
describe('Testes Funcional de Login', () => {

    /**
     * Antes de cada teste, acessa a página de login.
     * Essa ação garante que os testes comecem sempre do mesmo ponto.
     */

    beforeEach(() => {
        Login.visitarPagina(); // Navega para a página de login
})

 /**
     * Teste: Realizar login com sucesso.
     * Cenário: O usuário insere credenciais válidas e acessa a página inicial.
     */

    it('Deve realizar o login com sucesso', () => {
        // Ação: Preenche as credenciais válidas
        Login.preencherCredenciaisValidas()

        // Validação: Verifica se o acesso à página inicial foi bem-sucedido
        home.validarAcessoPagina()
    });

/**
     * Teste: Validar mensagem de erro para login incorreto.
     * Cenário: O usuário insere um nome de usuário inválido.
     */

    it('Validando Login Incorreta ', () => {
    // Ação: Preenche credenciais inválidas (usuário errado)
        Login.preencherCredenciaisLoginInvalidas()

     // Validação: Verifica se a mensagem de erro para credenciais inválidas é exibida
        Login.validarErroCredenciaisInvalidas()

    });

/**
     * Teste: Validar mensagem de erro para senha incorreta.
     * Cenário: O usuário insere uma senha inválida.
     */
    it('Validando Senha Incorreta ', () => {
    // Ação: Preenche credenciais com senha inválida
        Login.preencherCredenciaisSenhaInvalidas()

     // Validação: Verifica se a mensagem de erro para credenciais inválidas é exibida
        Login.validarErroCredenciaisInvalidas()
    });

    /**
     * Teste: Validar mensagem de erro para login vazio.
     * Cenário: O usuário tenta fazer login sem preencher o campo de nome de usuário.
     */

    it('Validando login vazio ', () => {
        // Ação: Não preenche o campo de nome de usuário
         Login.preencherCredenciaisLoginVazio()

      // Validação: Verifica se a mensagem de erro é exibida
        Login.validarErroCredenciaisLoginVazia()
    });

    /**
     * Teste: Validar mensagem de erro para senha vazia.
     * Cenário: O usuário tenta fazer login sem preencher o campo de senha.
     */

    it('Validando Senha vazia vazio ', () => {
         // Ação: Não preenche o campo de senha
        Login.preencherCredenciaisSenhaVazia()

        // Validação: Verifica se a mensagem de erro é exibida
        Login.validarErroCredenciaisSenhaVazia()
    });

});