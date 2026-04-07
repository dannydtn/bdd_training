Feature: Details product on SauceDemo
@regression
  Scenario: Click to Product details
    Given I go to inventory page
    When I click on product 
    Then url should has inventory-item

