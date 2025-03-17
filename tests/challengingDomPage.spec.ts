import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test.describe('Challenging Dom Page Suite @cdompage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/challenging_dom');
  });


  test('Verify header text', async ({ page }) => {
    const pm = new PageManager(page);
    const onChallangingDomPage = pm.onChallangingDomPage()
    onChallangingDomPage.verifyHeaderText()
  });

  
  test('Verify left side buttons functinality', async ({ page }) => {
    const pm = new PageManager(page);
    const onChallangingDomPage = pm.onChallangingDomPage()
    await onChallangingDomPage.verifyClickLeftSideButtonChangeCanvas()
  });

  test('Verify left side buttons functinality with two button click', async ({ page }) => {
    const pm = new PageManager(page);
    const onChallangingDomPage = pm.onChallangingDomPage()
    await onChallangingDomPage.verifyClickLeftSideButtonChangeCanvas()
  });

  test('Verify table row items size', async ({ page }) => {
    const pm = new PageManager(page);
    const onChallangingDomPage = pm.onChallangingDomPage()
    await onChallangingDomPage.verifyRowItemSize()
  });
    test('Verify table first column of first row of table', async ({ page }) => {
    const pm = new PageManager(page);
    const onChallangingDomPage = pm.onChallangingDomPage()
    await onChallangingDomPage.verifyFirstRowOftable()
  });
});