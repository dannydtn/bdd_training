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
npx playwright test -g "product"
```
**5. Run tag @smoke example**
```bash
-- edit scenarios with @tag
npx bddgen
npx playwright test -g "login.*@smoke"
npx playwright test -g "@smoke"  
```