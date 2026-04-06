// Generated from: features\details.feature
import { test } from "playwright-bdd";

test.describe('Details product on SauceDemo', () => {

  test('Click to Product details', { tag: ['@smoke'] }, async ({ Given, When, Then, page }) => { 
    await Given('I go to inventory page', null, { page }); 
    await When('I click on product', null, { page }); 
    await Then('url should has inventory-item', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\details.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I go to inventory page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on product","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then url should has inventory-item","stepMatchArguments":[]}]},
]; // bdd-data-end