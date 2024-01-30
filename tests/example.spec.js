// @ts-check
import { test } from '@playwright/test';

test('can login', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel("Email").fill("test@mail.com");
  await page.getByLabel("Password").fill("security");
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.waitForResponse(resp => resp.status() === 200);
});