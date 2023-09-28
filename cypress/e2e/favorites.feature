Feature: Favorite Characters
  As a user
  I want to add Rick and Morty 
  characters to favorites

  Scenario: Adding characters to favorites and viewing favorites
    Given I am on the character home page
    When I add "Rick Sanchez" to my favorites
    And I navigate to the favorites page
    Then I should see "Rick Sanchez" in my favorites

  Scenario: Viewing an empty favorites list
    Given I am on the favorites page
    Then I should see o svg do "Morty"