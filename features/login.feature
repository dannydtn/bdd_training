Feature: Login to SauceDemo
@smoke
  Scenario: Successful login with valid credentials
    Given I open the login page
    When I fill username and password
    | field                 |       value         |
    | standard_user         |       secret_sauce  |
    Then I should see the dashboard

