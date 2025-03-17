import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test.describe('A and B Page Page Suite @abtest', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/abtest');
  });


  test('Verify header text', async ({ page }) => {
    const pm = new PageManager(page);
    const onHomePage = pm.onAandBPage()
    onHomePage.verifyHeaderText()
  });
});