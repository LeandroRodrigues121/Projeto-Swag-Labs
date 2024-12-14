/// <reference types="cypress"/>
import Login from '../Pages/login'
import home from '../Pages/home';

describe('Testes Pagina Home', () => {

    beforeEach(() => {
        Login.visitarPagina();
    })

    it('Verificar a lista de produto', () => {

        Login.preencherCredenciaisValidas()
      
        home.validarListaDeProduto()
    });


    it('Adicionar ao Carrinho e volta para a tela pricipal', () => {
     Login.preencherCredenciaisValidas()

       home.adicionarProduto()
      
       home.voltarParaTelaHome()
    
    });
    
    it('Ordenação de Produtos de  menor para maior valor: ', () => {
        Login.preencherCredenciaisValidas()
    
        home.ordenarMenorParaMaior()
    });

    it('Ordenação de Produtos do maior para o menor valor: ', () => {
        Login.preencherCredenciaisValidas()

        home.ordenarMaiorParaMenor()
    });


    it('Ordenação de Produtos de A ate Z: ', () => {
        Login.preencherCredenciaisValidas()

        home.ordenarDo_A_ate_Z()
    });

    it('Ordenação de Produtos de Z ate A: ', () => {
        Login.preencherCredenciaisValidas()
        home.ordenarDo_Z_ate_A
    });

    it('Consultar o Produto', () => {
        Login.preencherCredenciaisValidas()
        
        home.consutarProduto()
    });


    it('Consultar o Produto e adicionar no carrinho', () => {
        Login.preencherCredenciaisValidas()
        
        home.consutarProduto()

        home.adicionarProduto()
    });

    it('Voltar para a tela de listagem ', () => {
        Login.preencherCredenciaisValidas()
        home.consutarProduto()
        home.funcaoVoltar()
    });

});