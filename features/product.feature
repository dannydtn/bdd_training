Feature: Go to tab Product on Milwaukee

  Background:
    Given I open the Milwaukee website

  Scenario: Display correctly Product screen
    When I go to the search screen
    Then I should see the searching bar
    And Url should contain search path

  Scenario: Display product details
    When I go to tab pipeline screen
    And I click on the first product
    Then Url should contain details path

  Scenario: Display match with design
    When I go to M12 innovations
    Then Display match with image design