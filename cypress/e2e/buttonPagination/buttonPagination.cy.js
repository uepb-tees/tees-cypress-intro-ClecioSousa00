import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am on the character home page$/, () => {
	cy.visit('/')
});

Then(/^I should not see the "([^"]*)" button$/, (args1) => {
	cy.get('.mt-20 > :nth-child(1) > .relative').should('not.exist')
});

When(/^I click the "([^"]*)" button$/, (args1) => {
	cy.get('.mt-20 > .group > .relative').click()
});

Then(/^I should see the "([^"]*)" button$/, (args1) => {
	cy.get('.mt-20 > :nth-child(1) > .relative').should('exist')
});

