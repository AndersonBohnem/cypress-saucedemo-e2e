# 🚀 Cypress Saucedemo E2E

Bem-vindo ao repositório **Cypress Saucedemo E2E**!  
Este projeto tem como objetivo automatizar testes end-to-end (E2E) na aplicação [SauceDemo](https://www.saucedemo.com/), promovendo **qualidade, agilidade e confiança** no processo de desenvolvimento.

Foi criado uma breve estrutura no formato de framework para melhorar a usabilidade.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#️-como-executar)
- [Comandos Úteis](#-comandos-úteis)
- [Boas Práticas](#-boas-práticas)

---

## 📝 Sobre o Projeto

Este repositório contém **teste E2E automatizado** para o site SauceDemo, cobrindo cenários como:

- Login e autenticação
- Fluxo completo de compra
- Validações de tela e elementos
- Finalização de pedidos

O objetivo é garantir que as **funcionalidades principais** da aplicação estejam sempre funcionando corretamente.

---

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) — Framework de testes E2E
- **JavaScript** — Linguagem principal dos testes
- [Node.js](https://nodejs.org/pt) — Ambiente de execução

---

## 📁 Estrutura do Projeto

Exemplo da organização:

```
CYPRESS-SAUCEDEMO-E2E
├── cypress
│   ├── automation                      # Pasta principal de automação
│   │   ├── projectCenarys              # Define cenários de teste (BDD)
│   │   │   ├── features                # Arquivos .feature com os cenários em Gherkin
│   │   │   │   └── endToEndTest.feature
│   │   │   └── stepsDefinitions        # Implementação dos passos (Given, When, Then)
│   │   │       ├── givenSteps.js
│   │   │       ├── thenSteps.js
│   │   │       ├── whenSteps.js
│   │   │       └── hooks.js            # Define que a cada step tira uma screenshots
│   │   └── projectSystem               # Estrutura do sistema (Page Objects + atributos)
│   │       ├── attributes              # Mapeamento de elementos (selectors/locators)
│   │       │   ├── attributesCart.js
│   │       │   ├── attributesCheckout.js
│   │       │   ├── attributesHome.js
│   │       │   └── attributesLogin.js
│   │       └── pages                   # Page Objects (ações e interações com páginas)
│   │           ├── pageCart.js
│   │           ├── pageCheckout.js
│   │           ├── pageHome.js
│   │           └── pageLogin.js
│   ├── downloads                       # Armazena arquivos baixados nos testes
│   ├── engine
│   │   └── data                        # Manipulação de dados usados nos testes
│   │       └── dataController.js
│   ├── fixtures                        # Massa de dados fixa (JSON, mock de respostas, etc.)
│   ├── screenshots                     # Capturas de tela feitas durante os testes
│   └── support                         # Comandos customizados e configurações globais
├── node_modules                        # Dependências do projeto (npm/yarn)
├── .cypress-cucumber-preprocessorrc.json  # Configuração do preprocessor do Cucumber
├── .gitignore                          # Arquivos e pastas ignorados pelo Git
├── cypress.config.js                   # Configurações do Cypress
├── package-lock.json                   # Controle exato das versões instaladas (npm)
├── package.json                        # Dependências e scripts do projeto
└── readme.md                           # Documentação do projeto
```

---

## ▶️ Como Executar  

1. **Clone o repositório:**  
```bash
git clone https://github.com/AndersonBohnem/cypress-saucedemo-e2e.git
cd cypress-saucedemo-e2e
```

2. **Instale as dependências:**  
```bash
npm install
```

3. **Abra o Cypress no modo interativo:**  
```bash
npx cypress open
```

4. **Ou execute em modo headless:**  
```bash
npx cypress run
```

---

## 💻 Comandos Úteis  

- `npx cypress open` → Abre o Test Runner do Cypress  
- `npx cypress run` → Executa todos os testes em modo headless  
- `npm test` → Alias para rodar os testes (se configurado no `package.json`)  

---

## 🧩 Boas Práticas  

✔️ Utilize **Page Objects** para facilitar a manutenção dos testes  
✔️ Centralize os seletores em arquivos de **atributos**  
✔️ Escreva cenários claros e objetivos no **Gherkin**  
✔️ Sempre valide o **resultado esperado** após cada ação  
✔️ Mantenha os testes **independentes** uns dos outros  