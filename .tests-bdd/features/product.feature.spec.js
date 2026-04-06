// Generated from: features\product.feature
import { test } from "playwright-bdd";

test.describe('Go to tab Product on Milwaukee', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I open the Milwaukee website', null, { page }); 
  });
  
  test('Display correctly Product screen', async ({ When, Then, And, page }) => { 
    await When('I go to the search screen', null, { page }); 
    await Then('I should see the searching bar', null, { page }); 
    await And('Url should has search', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\product.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the Milwaukee website","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I go to the search screen","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the searching bar","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And Url should has search","stepMatchArguments":[]}]},
]; // bdd-data-end