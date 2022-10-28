/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test'

test('check homepage ', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(page).toHaveTitle(/React Thekit/)

  await expect(page.getByText('Button')).toBeVisible()
})

test('check button page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const button = page.getByTestId('Button')

  await button.click()

  await expect(page).toHaveURL(/.*button/)
})
