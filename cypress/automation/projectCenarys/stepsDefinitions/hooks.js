import { AfterStep } from "@badeball/cypress-cucumber-preprocessor";

AfterStep(() => {
  cy.screenshot({ capture: "runner" });
});
