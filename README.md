# Projeto de Testes Automatizados - SauceDemo

Este projeto foi desenvolvido para garantir a qualidade e a funcionalidade da aplicação **Sauce Demo**, uma plataforma de e-commerce fictícia utilizada para testar automação de testes. A aplicação oferece um ambiente ideal para realizar testes de ponta a ponta, como login, gerenciamento de carrinho de compras e finalização de pedidos.

Com o objetivo de validar as funcionalidades principais do site, foram implementados testes automatizados utilizando **Cypress**, uma poderosa ferramenta para automação de testes E2E (end-to-end). Os testes garantem que o fluxo de compra, login de usuários, adição e remoção de produtos do carrinho, bem como a ordenação dos produtos, funcionem corretamente. Este projeto visa melhorar a eficiência do processo de QA, proporcionando uma maneira rápida e confiável de detectar regressões e falhas.

## Tecnologias Utilizadas

- **Cypress**: Framework para automação de testes end-to-end (E2E), utilizado para simular a interação do usuário com a interface da aplicação.
- **JavaScript**: Linguagem de programação utilizada para escrever os testes, garantindo flexibilidade e facilidade de integração com o Cypress.
- **Node.js**: Ambiente de execução JavaScript utilizado para gerenciar as dependências e rodar os testes.
- **Git**: Sistema de controle de versão utilizado para o gerenciamento do código-fonte.

## Como Rodar o Projeto

### Pré-requisitos
- **Node.js**: Certifique-se de que o **Node.js** está instalado na sua máquina. Você pode verificar a instalação com:
  ```bash
  node -v

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

npm install

npx cypress open

npx cypress run

###Cenários de Testes####
Os testes no projeto cobrem os seguintes cenários principais:

Login:

Login com credenciais válidas: Testa se o usuário pode acessar a plataforma com um nome de usuário e senha corretos.
Login com credenciais inválidas: Testa o que acontece quando o usuário fornece um nome de usuário ou senha incorretos.
Login com campos vazios: Verifica se o sistema lida corretamente quando os campos de login estão vazios.
Carrinho de Compras:

Adicionar produtos ao carrinho: Testa a funcionalidade de adicionar produtos ao carrinho.
Remover produtos do carrinho: Valida se os produtos podem ser removidos corretamente do carrinho.
Finalização de compra: Testa o fluxo de checkout, desde o preenchimento dos dados até a confirmação da compra.
Ordenação de Produtos:

Ordenação por preço (menor para maior): Testa a funcionalidade de ordenar os produtos com base no preço, do mais barato para o mais caro.
Ordenação por preço (maior para menor): Testa a ordenação do preço de produtos, do mais caro para o mais barato.
Ordenação alfabética (A a Z e Z a A): Verifica se os produtos podem ser ordenados corretamente em ordem alfabética.
Consulta de Produtos:

Consulta detalhada de um produto: Testa a funcionalidade de visualizar os detalhes de um produto e verificar sua descrição.
Adicionar um produto ao carrinho diretamente da página de detalhes: Verifica se é possível adicionar um produto ao carrinho a partir da página de consulta de detalhes.
