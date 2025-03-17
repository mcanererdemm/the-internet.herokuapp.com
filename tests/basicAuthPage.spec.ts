import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test.describe('Basic Auth Page Suite @basicauth', () => {

  test("Authenticate with URL address", async ({ page }) => {
    await page.goto('http://admin:admin@the-internet.herokuapp.com/basic_auth');
    const pm = new PageManager(page)
    await pm.onBasicAuthPage().verifySuccessfulAuthMessage()
  })

  test("Authenticate with https credentials", async ({ page }) => {
    await page.context().setHTTPCredentials({ username: 'admin', password: 'admin' });
    await page.goto('/basic_auth');
    const pm = new PageManager(page)
    await pm.onBasicAuthPage().verifySuccessfulAuthMessage()
  })

  test("Authenticate with new Context", async ({ browser }) => {
    const context = browser.contexts()[0];
    await context.setHTTPCredentials({
      username: "admin",
      password: "admin"
    });
    const page = await context.newPage();
    await page.goto("/basic_auth");

    const pm = new PageManager(page);
    await pm.onBasicAuthPage().verifySuccessfulAuthMessage();
  })

  test("Authenticate with extra https header", async ({ page }) => {
    const auth = Buffer.from('admin:admin').toString('base64');
    await page.setExtraHTTPHeaders({ Authorization: `Basic ${auth}` })
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    const pm = new PageManager(page)
    await pm.onBasicAuthPage().verifySuccessfulAuthMessage()
  })
})