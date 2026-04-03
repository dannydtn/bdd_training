Feature: Login to SauceDemo
@smoke
  Scenario: Successful login with valid credentials
    Given I open the login page
    When I fill "standard_user" as username and "secret_sauce" as password
    Then I should see the dashboard
