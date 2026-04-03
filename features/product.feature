Feature: Go to tab Product on Milwaukee
  Scenario: Display correctly Product screen
    Given I open the Milwaukee website
    When I go to the search screen
    Then I should see the searching bar
    And Url should has search