Feature: Login to SauceDemo

  @smoke
  Scenario Outline: Successful login with valid credentials
    Given I open the login page
    When I fill username "<username>" and password "<password>"
    Then I should see the dashboard

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |
      | error_user    | secret_sauce |
      | visual_user   | secret_sauce |