Feature: Character Pagination

  Background:
    Given I am on the character home page

  Scenario: Paginating forward
    When I click the "Avançar" button
    Then I should see the second page of characters
    And the "Voltar" button should be visible