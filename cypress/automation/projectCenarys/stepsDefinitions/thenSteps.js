import { Then } from "@badeball/cypress-cucumber-preprocessor";
import PageHome from "../../projectSystem/pages/pageHome";
import PageCheckout from "../../projectSystem/pages/pageCheckout";

const pageHome = new PageHome();
const pageCheckout = new PageCheckout();

Then("devo ser redirecionado para a página principal", () => {
  pageHome.validateTitleHome();
});

Then("vou para o carrinho de compras", () => {
  pageHome.goToCart();
});

Then(
  "sou direcionado para a página de informações do cliente e preencho o formulário",
  () => {
    pageCheckout.validatePageCheckout();
    pageCheckout.insertDataInForm();
  }
);

Then("a compra deve ser finalizada com sucesso", () => {
  pageCheckout.validateOrderComplete();
});
