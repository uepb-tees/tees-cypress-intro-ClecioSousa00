Feature: Rick and Morty Character Search
  As a user
  I want to search for Rick and Morty characters
  To find information about them

  Scenario: Successful search for a character
    Given I am on the character search page
    When I type "Rick" in the search box
    And I press Enter
    Then I should see a list of "Rick" characters

   Scenario: Search with no results
     Given I am on the character search page
     When I type "NonExistentCharacter" in the search box
     And I press Enter
     Then I should see the text "Burrp!" indicating no results were found