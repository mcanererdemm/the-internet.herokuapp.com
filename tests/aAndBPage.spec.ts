import { test, expect } from '@playwright/test';
import { PackageManager } from '../pages/packageManager';

test.describe('A and B Page Page Suite @homepage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/abtest');
  });


  test('Verify header text @abtest', async ({ page }) => {
    const pm = new PackageManager(page);
    const onHomePage = pm.onAandBPage()
    onHomePage.verifyHeaderText
  });
});