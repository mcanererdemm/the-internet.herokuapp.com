import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test.describe('Digest Auth Page Suite @digestauth', () => {

  test('Authenticate with new context', async ({ page, browser }) => {
    const pm = new PageManager(page);
    const onDigestAuthenticationPage = pm.onDigestAuthenticationPage()
    await onDigestAuthenticationPage.authenticateWithNewContext(browser)
  })

  test('Authenticate with request', async ({ page, request }) => {
    const pm = new PageManager(page);
    const onDigestAuthenticationPage = pm.onDigestAuthenticationPage()
    await onDigestAuthenticationPage.authenticateWithRequest(request)
  })
})