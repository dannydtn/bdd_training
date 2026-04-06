Feature: Details product on SauceDemo
@smoke
  Scenario: Click to Product details
    Given I go to inventory page
    When I click on product 
    Then url should has inventory-item

