import { Given } from "@badeball/cypress-cucumber-preprocessor";
import PageLogin from "../../projectSystem/pages/pageLogin";

const pageLogin = new PageLogin();

Given("que acesso a loja", () => {
  pageLogin.accessStore("https://www.saucedemo.com/");
});

