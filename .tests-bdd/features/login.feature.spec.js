// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login to SauceDemo', () => {

  test('Successful login with valid credentials', { tag: ['@smoke'] }, async ({ Given, When, Then, page }) => { 
    await Given('I open the login page', null, { page }); 
    await When('I fill username and password', {"dataTable":{"rows":[{"cells":[{"value":"field"},{"value":"value"}]},{"cells":[{"value":"standard_user"},{"value":"secret_sauce"}]}]}}, { page }); 
    await Then('I should see the dashboard', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I fill username and password","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the dashboard","stepMatchArguments":[]}]},
]; // bdd-data-end