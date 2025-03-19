import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test.describe('Checkboxes Page Suite @checkboxes', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/checkboxes');
  });


  test('Verify header text', async ({ page }) => {
    const pm = new PageManager(page);
    const onCheckboxesPage = pm.onCheckboxesPage()
    await onCheckboxesPage.verifyHeaderText()
  });

  test('Select first checkbox and unselect second checkbox', async ({ page }) => {
    const pm = new PageManager(page);
    const onCheckboxesPage = pm.onCheckboxesPage()
    await onCheckboxesPage.selectFirstCheckboxAndUnselectSecondCheckbox()
  });
});