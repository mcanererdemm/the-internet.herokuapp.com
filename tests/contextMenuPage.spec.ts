import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test.describe('Context Menu Page Suite @contextmenu', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/context_menu');
  });


  test('Verify header text', async ({ page }) => {
    const pm = new PageManager(page);
    const onContextMenuPage = pm.onContextMenuPage()
    await onContextMenuPage.verifyHeaderText()
  });

  test('Right click black box', async ({ page }) => {
    const pm = new PageManager(page);
    const onContextMenuPage = pm.onContextMenuPage()
    await onContextMenuPage.rightClickBlackAreaAndVerify()
  });
});