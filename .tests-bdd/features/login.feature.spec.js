// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login to SauceDemo', () => {

  test('Successful login with valid credentials', async ({ Given, When, Then, page }) => { 
    await Given('I open the login page', null, { page }); 
    await When('I fill "standard_user" as username and "secret_sauce" as password', null, { page }); 
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
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I fill \"standard_user\" as username and \"secret_sauce\" as password","stepMatchArguments":[{"group":{"start":7,"value":"\"standard_user\"","children":[{"start":8,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"secret_sauce\"","children":[{"start":40,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the dashboard","stepMatchArguments":[]}]},
]; // bdd-data-end