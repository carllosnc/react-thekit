/* eslint-disable testing-library/prefer-screen-queries */

import { test, expect, Page } from '@playwright/test'

async function checkPage(page: Page, pageLink: string, pageTitle: string) {
  await page.goto('http://localhost:3000')

  const link = page.getByTestId(pageLink)

  await expect(link).toBeVisible()

  await link.click()

  const title = page.getByTestId('page-title')

  await expect(title).toBeVisible()
  await expect(title).toHaveText(pageTitle)
}

test('Check Button page', async ({ page }) => {
  await checkPage(page, 'button-link', 'Button')
})

test('Check Carousel page', async ({ page }) => {
  await checkPage(page, 'carousel-link', 'Carousel')
})

test('Check Checkbox page', async ({ page }) => {
  await checkPage(page, 'checkbox-link', 'Checkbox')
})

test('Check Drawer page', async ({ page }) => {
  await checkPage(page, 'drawer-link', 'Drawer')
})

test('Check Expander page', async ({ page }) => {
  await checkPage(page, 'expander-link', 'Expander')
})

test('Check if page', async ({ page }) => {
  await checkPage(page, 'if-link', 'If (component)')
})

test('Check Image Expander page', async ({ page }) => {
  await checkPage(page, 'image-expander-link', 'Image Expander')
})

test('Check Input page', async ({ page }) => {
  await checkPage(page, 'input-link', 'Input')
})

test('Check Modal page', async ({ page }) => {
  await checkPage(page, 'modal-link', 'Modal')
})

test('Check Navbar page', async ({ page }) => {
  await checkPage(page, 'navbar-link', 'Navbar')
})

test('Check Radio page', async ({ page }) => {
  await checkPage(page, 'radio-link', 'Radio')
})

test('Check Regular Table page', async ({ page }) => {
  await checkPage(page, 'regular-table-link', 'Regular table')
})

test('Check Reveal page', async ({ page }) => {
  await checkPage(page, 'reveal-link', 'Reveal')
})

test('Check Select page', async ({ page }) => {
  await checkPage(page, 'select-link', 'Select')
})

test('Check Selectable page', async ({ page }) => {
  await checkPage(page, 'selectable-link', 'Selectable')
})

test('Check Syntax page', async ({ page }) => {
  await checkPage(page, 'syntax-link', 'Syntax')
})

test('Check Tabs page', async ({ page }) => {
  await checkPage(page, 'tabs-link', 'Tabs')
})

test('Check Vídeo Background page', async ({ page }) => {
  await checkPage(page, 'video-background-link', 'Video background')
})
