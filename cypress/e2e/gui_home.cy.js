/// <reference types="cypress"/>
import Login from '../Pages/login'
import home from '../Pages/home';
/**
 * Suite de Testes da Página Home
 * Contém casos de teste relacionados às funcionalidades da página principal (home) da aplicação.
 */

describe('Testes Pagina Home', () => {
/**
     * Antes de cada teste, acessa a página de login.
     * Essa ação garante que todos os testes comecem do mesmo ponto.
     */

    beforeEach(() => {
        Login.visitarPagina();// Navega para a página de login
    })

/**
     * Teste: Verificar a lista de produtos.
     * Cenário: Após o login, o usuário visualiza a lista de produtos disponíveis.
     */
    it('Verificar a lista de produto', () => {
    // Ação: Realiza login com credenciais válidas
        Login.preencherCredenciaisValidas()

      // Validação: Verifica se a lista de produtos é exibida corretamente
        home.validarListaDeProduto()
    });

/**
     * Teste: Adicionar produtos ao carrinho e voltar para a tela principal.
     * Cenário: O usuário adiciona itens ao carrinho e retorna para a página inicial.
     */

    it('Adicionar ao Carrinho e volta para a tela pricipal', () => {
     Login.preencherCredenciaisValidas()
    // Ação: Realiza login e adiciona produtos ao carrinho
       home.adicionarProduto()

      // Validação: Retorna para a tela inicial
       home.voltarParaTelaHome()
    
    });
    
     /**
     * Teste: Ordenar produtos do menor para o maior valor.
     * Cenário: O usuário organiza os produtos com base no preço, do menor para o maior.
     */

    it('Ordenação de Produtos de  menor para maior valor: ', () => {
        Login.preencherCredenciaisValidas()
    // Ação: Realiza login e ordena os produtos
        home.ordenarMenorParaMaior()
    });

    /**
     * Teste: Ordenar produtos do maior para o menor valor.
     * Cenário: O usuário organiza os produtos com base no preço, do maior para o menor.
     */
    it('Ordenação de Produtos do maior para o menor valor: ', () => {
        // Ação: Realiza login e ordena os produtos
        Login.preencherCredenciaisValidas()

        home.ordenarMaiorParaMenor()
    });

/**
     * Teste: Ordenar produtos de A a Z.
     * Cenário: O usuário organiza os produtos em ordem alfabética (A-Z).
     */

    it('Ordenação de Produtos de A ate Z: ', () => {
        Login.preencherCredenciaisValidas()

        home.ordenarDo_A_ate_Z()
    });
    /**
     * Teste: Ordenar produtos de Z a A.
     * Cenário: O usuário organiza os produtos em ordem alfabética inversa (Z-A).
     */

    it('Ordenação de Produtos de Z ate A: ', () => {
        Login.preencherCredenciaisValidas()
        home.ordenarDo_Z_ate_A
    });

    /**
     * Teste: Consultar um produto.
     * Cenário: O usuário seleciona um produto para visualizar suas informações.
     */

    it('Consultar o Produto', () => {
        Login.preencherCredenciaisValidas()
        
        home.consutarProduto()
    });

      /**
     * Teste: Consultar um produto e adicionar ao carrinho.
     * Cenário: O usuário visualiza um produto e o adiciona ao carrinho.
     */


    it('Consultar o Produto e adicionar no carrinho', () => {
         // Ação: Realiza login, consulta o produto e o adiciona ao carrinho
        Login.preencherCredenciaisValidas()
        
        home.consutarProduto()

        home.adicionarProduto()
    });
    
 /**
     * Teste: Voltar para a tela de listagem.
     * Cenário: O usuário visualiza um produto e retorna para a página inicial.
     */
    it('Voltar para a tela de listagem ', () => {
        Login.preencherCredenciaisValidas()
        home.consutarProduto()
        home.funcaoVoltar()
    });

});