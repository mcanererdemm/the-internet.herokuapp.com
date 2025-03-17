import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test.describe('Broken Image Page Suite @brokenimage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/broken_images');
  });


  test('Verify header text', async ({ page }) => {
    const pm = new PageManager(page);
    const onBrokenImagesPage = pm.onBrokenImagesPage()
    await onBrokenImagesPage.verifyHeaderText()
  });

  test('Verify third image src attribute', async ({ page }) => {
    const pm = new PageManager(page);
    const onBrokenImagesPage = pm.onBrokenImagesPage()
    await onBrokenImagesPage.verifyThirdImage()
  });
});