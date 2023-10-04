import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given(/^I am on the character search page$/, () => {
	cy.visit('/')
});

When(/^I type "([^"]*)" in the search box$/, (args1) => {
	cy.get('[data-test="input-search"]').type(args1)
});

When(/^I press Enter$/, () => {
	cy.get('[data-test="input-search"]').type('{enter}')
});

Then(/^I should see a list of "([^"]*)" characters$/, (args1) => {
	cy.get('.mt-60 >').first().should('contain', args1)
});


Then(/^I should see the text "([^"]*)" indicating no results were found$/, (args1) => {
	cy.get('.my-5').should('contain', args1)
});
