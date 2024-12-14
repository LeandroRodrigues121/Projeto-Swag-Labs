/**
 * Elementos da página de produtos e carrinho
 * Contém os seletores e valores associados às funcionalidades de produtos e carrinho
 * na aplicação, centralizando os dados para facilitar a manutenção e reutilização.
 */

export const elements = {
        produto_1: ':nth-child(1) > [data-test="inventory-item-description"]',
        produto_2: ':nth-child(2) > [data-test="inventory-item-description"]',
        produto_3: ':nth-child(3) > [data-test="inventory-item-description"]',
        produto_4: ':nth-child(4) > [data-test="inventory-item-description"]',
        produto_5: ':nth-child(5) > [data-test="inventory-item-description"]',
        produto_6: ':nth-child(6) > [data-test="inventory-item-description"]',

        nameProduto_1: 'Sauce Labs Backpack',
        nameProduto_2: 'Sauce Labs Bike Light',
        nameProduto_3: 'Sauce Labs Bolt T-Shirt',
        nameProduto_4: 'Sauce Labs Fleece Jacket',
        nameProduto_5: 'Sauce Labs Onesie',
        nameProduto_6: 'Test.allTheThings() T-Shirt (Red)',

        adiProduto_1:  '[data-test="add-to-cart-sauce-labs-backpack"]',
        adiProduto_2:  '[data-test="add-to-cart-sauce-labs-bike-light"]',

        carrinho: '[data-test="shopping-cart-link"]',
        buttonVoltarTelaHome: '[data-test="continue-shopping"]',
        titulo: '[data-test="title"]',

        buttonFiltro: '[data-test="product-sort-container"]',
        menorParaMaior: 'Price (low to high)',
        maiorParaMenor: 'Price (high to low)',
        ordenar_Z_A:    'Name (Z to A)',
        ordenar_A_Z:    'Name (A to Z)',

        produto: '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]',
        descricaoProduto_4: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
        adicionarCarrinho: '[data-test="add-to-cart"]',
        buttonVoltar:     '[data-test="back-to-products"]',
        addToCart: (Name) => `[data-test="add-to-cart-${Name}"]`
}

function transform(texto){

    return texto.replaceAll(' ', '-').toLowerCase()
}