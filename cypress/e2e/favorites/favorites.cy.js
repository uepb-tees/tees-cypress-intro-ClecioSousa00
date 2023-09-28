import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am on the character home page$/, () => {
	cy.visit('/')
});

When(/^I add "([^"]*)" to my favorites$/, (args1) => {
	cy.get(':nth-child(1) > .h-full > .relative > .w-full > .cursor-pointer').click()
});

When(/^I navigate to the favorites page$/, () => {
	cy.get('.mt-20 > :nth-child(2) > a').click()
});

Then(/^I should see "([^"]*)" in my favorites$/, (args1) => {
	cy.get('[data-test="card-character"] > .h-full > .relative').contains(args1)
});

Given(/^I am on the favorites page$/, () => {
	cy.visit('/favorites')
});

Then(/^I should see o svg do "([^"]*)"$/, (args1) => {
	cy.get('.flex > svg')
});
