import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";


Given(/^I am on the character home page$/, () => {
	cy.visit('/')
});

When(/^I click the "([^"]*)" button$/, (args1) => {
	cy.get('.mt-20 > .group > .relative').click()
});

Then(/^I should see the second page of characters$/, () => {
	cy.get('.mt-60 > :nth-child(1) > .h-full > .relative').should('exist')
});

Then(/^the "([^"]*)" button should be visible$/, (args1) => {
	cy.get('.mt-20 > :nth-child(1) > .relative').should('exist')
});
