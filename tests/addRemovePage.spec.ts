import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test.describe('Add Remove Page Suite @addremove', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/add_remove_elements/');
  });


  test('Verify header text', async ({ page }) => {
    const pm = new PageManager(page);
    const addRemovePage = pm.onAddRemovePage()
    addRemovePage.verifyHeaderText
  });

  test('Add element', async ({ page }) => {
    const pm = new PageManager(page);
    const addRemovePage = pm.onAddRemovePage()
    await addRemovePage.clickAddElementbuttonAndVerifyDeleteButton()
  });

  test('Add threre elements', async ({ page }) => {
    const pm = new PageManager(page);
    const addRemovePage = pm.onAddRemovePage()
    await addRemovePage.clickAddElementbuttonAndVerifyDeleteButton()
    await addRemovePage.clickAddElementbuttonAndVerifyDeleteButton()
    await addRemovePage.clickAddElementbuttonAndVerifyDeleteButton()
  });

  test('Delete three elements', async ({ page }) => {
    const pm = new PageManager(page);
    const addRemovePage = pm.onAddRemovePage()
    await addRemovePage.clickAddElementbuttonAndVerifyDeleteButton()
  });
});