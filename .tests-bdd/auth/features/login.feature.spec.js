// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login to SauceDemo', () => {

  test.describe('Successful login with valid credentials', () => {

    test('Example #1', { tag: ['@smoke'] }, async ({ Given, When, Then, page }) => { 
      await Given('I open the login page', null, { page }); 
      await When('I fill username "standard_user" and password "secret_sauce"', null, { page }); 
      await Then('I should see the dashboard', null, { page }); 
    });

    test('Example #2', { tag: ['@smoke'] }, async ({ Given, When, Then, page }) => { 
      await Given('I open the login page', null, { page }); 
      await When('I fill username "problem_user" and password "secret_sauce"', null, { page }); 
      await Then('I should see the dashboard', null, { page }); 
    });

    test('Example #3', { tag: ['@smoke'] }, async ({ Given, When, Then, page }) => { 
      await Given('I open the login page', null, { page }); 
      await When('I fill username "error_user" and password "secret_sauce"', null, { page }); 
      await Then('I should see the dashboard', null, { page }); 
    });

    test('Example #4', { tag: ['@smoke'] }, async ({ Given, When, Then, page }) => { 
      await Given('I open the login page', null, { page }); 
      await When('I fill username "visual_user" and password "secret_sauce"', null, { page }); 
      await Then('I should see the dashboard', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":11,"tags":["@smoke"],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I open the login page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I fill username \"standard_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":16,"value":"\"standard_user\"","children":[{"start":17,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"secret_sauce\"","children":[{"start":46,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":12,"tags":["@smoke"],"steps":[{"pwStepLine":15,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I open the login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I fill username \"problem_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":16,"value":"\"problem_user\"","children":[{"start":17,"value":"problem_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":44,"value":"\"secret_sauce\"","children":[{"start":45,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":13,"tags":["@smoke"],"steps":[{"pwStepLine":21,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I open the login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I fill username \"error_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":16,"value":"\"error_user\"","children":[{"start":17,"value":"error_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"secret_sauce\"","children":[{"start":43,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":14,"tags":["@smoke"],"steps":[{"pwStepLine":27,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I open the login page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I fill username \"visual_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":16,"value":"\"visual_user\"","children":[{"start":17,"value":"visual_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"secret_sauce\"","children":[{"start":44,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the dashboard","stepMatchArguments":[]}]},
]; // bdd-data-end