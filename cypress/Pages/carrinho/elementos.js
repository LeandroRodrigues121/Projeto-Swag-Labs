/**
 * Elementos da página de carrinho e checkout
 * Contém os seletores dos elementos usados para interagir com o carrinho de compras,
 * finalizar a compra e exibir mensagens de sucesso.
 */

export const elements = {
        produto_1:  '[data-test="add-to-cart-sauce-labs-backpack"]',
        buttonCarrinho: '[data-test="shopping-cart-link"]',
        produtoRemover:  '[data-test="remove-sauce-labs-backpack"]',
        campoAviso:     '[data-test="complete-text"]',

        primeiroNome:    '[data-test="firstName"]',
        ultimoNome:      '[data-test="lastName"]',
        CPE:             '[data-test="postalCode"]',
        menssangeCompra:  'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
        addProdutoNoConsultar: '[data-test="add-to-cart"]'
}