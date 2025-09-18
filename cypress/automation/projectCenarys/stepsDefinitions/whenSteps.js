import { When } from "@badeball/cypress-cucumber-preprocessor";
import PageLogin from "../../projectSystem/pages/pageLogin";
import PageHome from "../../projectSystem/pages/pageHome";
import PageCart from "../../projectSystem/pages/pageCart";
import PageCheckout from "../../projectSystem/pages/pageCheckout";

const pageLogin = new PageLogin();
const pageHome = new PageHome();
const pageCart = new PageCart();
const pageCheckout = new PageCheckout();

When("eu informo usuário {string} e senha {string}", (usuario, senha) => {
  pageLogin.loginSuccess(usuario, senha);
});

When("adiciono o primeiro produto no carrinho", () => {
  pageHome.selectFirstProductInCart();
  pageHome.addToCart();
});

When("clico em finalizar compra", () => {
  pageCart.goToCheckout();
});

When("finalizo a compra", () => {
  pageCheckout.finishOrder();
});
