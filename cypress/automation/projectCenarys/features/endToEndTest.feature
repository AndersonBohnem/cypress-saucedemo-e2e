Feature: End to End Test

  Scenario: Realizar uma compra completa na loja
    Given que acesso a loja
    When eu informo usuário "<usuario>" e senha "<senha>"
    Then devo ser redirecionado para a página principal
    When adiciono o primeiro produto no carrinho
    Then vou para o carrinho de compras
    When clico em finalizar compra
    Then sou direcionado para a página de informações do cliente e preencho o formulário
    When finalizo a compra
    Then a compra deve ser finalizada com sucesso

    Examples:
      | usuario       | senha        |
      | standard_user | secret_sauce |
