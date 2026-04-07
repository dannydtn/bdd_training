## 🚀 How to Run Tests

**1. Install dependencies**
```bash
npm install
npx playwright install chromium
```
**2. Run all tests**
```bash
npx playwright test
```
**4. Run a specific test case**
```bash
npx playwright test product
npx playwright test -g "product"
```
**5. Run tag @smoke example**
```bash
-- edit scenarios with @tag
npx bddgen
npx playwright test -g "login.*@smoke"
npx playwright test -g "@smoke"  
```
**6. Create Dashboard report with allure**
```bash
npx allure serve allure-results
-- if u want to del all old result before save new result
allure generate allure-results --clean
```
--- 
## 🏗️ Project Structure
```
playwright-bdd/
├── pages/                  ← chứa Page Objects
│   ├── LoginPage.ts        ← login, expect dashboard
│   ├── InventoryPage.ts    ← goto inventory, click product, expect URL
│   └── MilwaukeePage.ts    ← goto, search, pipeline, dismiss popup
├── steps/                  
│   ├── login.ts
│   ├── details.ts
│   └── product.ts
├── features/               
├── tests/                  
└── playwright.config.ts    
```
--- 
