Feature: Go to tab Product on Milwaukee

  Background:
    Given I open the Milwaukee website

  Scenario: Display correctly Product screen
    When I go to the search screen
    Then I should see the searching bar
    And Url should has search


