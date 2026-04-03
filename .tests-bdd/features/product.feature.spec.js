// Generated from: features\product.feature
import { test } from "playwright-bdd";

test.describe('Go to tab Product on Milwaukee', () => {

  test('Display correctly Product screen', { tag: ['@regression'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I open the Milwaukee website', null, { page }); 
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
  {"pwTestLine":6,"pickleLine":3,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the Milwaukee website","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I go to the search screen","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the searching bar","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And Url should has search","stepMatchArguments":[]}]},
]; // bdd-data-end