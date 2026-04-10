/**
 * Minimal Playwright smoke test for the Blop reference workflow.
 * Copy to your runner repo as e.g. `e2e/smoke.spec.ts` and run `npx playwright test`.
 * Set BASE_URL in the workflow (Blop dispatch input or BLOP_BASE_URL secret) to target your app.
 */
import { test, expect } from '@playwright/test';

test('smoke — landing responds', async ({ page }) => {
  const base = process.env.BASE_URL?.trim();
  const url = base && base.length > 0 ? base : 'https://example.com';
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).toBeVisible();
});
