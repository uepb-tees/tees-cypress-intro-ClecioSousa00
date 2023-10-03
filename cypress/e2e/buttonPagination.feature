Feature: Navigation between Pages

  Background:
    Given I am on the character home page

  Scenario: Verify initial state on the home page
    Then I should not see the "Voltar" button

  Scenario: Navigate to the second page of characters
    When I click the "Avançar" button
    Then I should see the "Voltar" button


