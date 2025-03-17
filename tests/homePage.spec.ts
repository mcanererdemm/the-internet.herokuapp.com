import { test, expect } from '@playwright/test';
import { PackageManager } from '../pages/packageManager';

test.describe('Home Page Suite @homepage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });


  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle("The Internet");
  });

  test('click link A/B Testing', async ({ page }) => {
    const pm = new PackageManager(page);
    const onHomePage = pm.onHomePage();
    await onHomePage.aAndBTesting();
  });

  test('homePage footbar link test case', async ({ page }) => {
    const pm = new PackageManager(page);
    const onHomePage = pm.onHomePage();
    await onHomePage.verifyFootbarLink();
  });

  test('homePage Knot link test case', async ({ page }) => {
    const pm = new PackageManager(page);
    const onHomePage = pm.onHomePage();
    await onHomePage.verifyKnotLink();
  });

  test('homePage Add Remove test case', async ({ page }) => {
    const pm = new PackageManager(page);
    const onHomePage = pm.onHomePage();
    await onHomePage.addRemoveElements();
  });

  test('homePage loop through all links test case', async ({ page }) => {
    test.slow();
    const pm = new PackageManager(page);
    const onHomePage = pm.onHomePage();
    await onHomePage.loopThroughLinks()
  });
});