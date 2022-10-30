/* eslint-disable testing-library/prefer-screen-queries */

import { test, expect } from '@playwright/test'

test('Home page', async ({ page }) => {
  await page.goto('http://localhost:3000')

  const buttonLink = page.getByText('Button')

  await expect(buttonLink).toBeVisible()
})
