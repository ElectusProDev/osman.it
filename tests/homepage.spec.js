import { test, expect } from '@playwright/test';

test('loads every original image without runtime errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Build Your SkillsWith Online Course');
  await expect(page.locator('.course-card')).toHaveCount(6);
  await expect(page.locator('.category-card')).toHaveCount(12);
  const broken = await page.evaluate(async () => {
    for (const img of document.images) img.loading = 'eager';
    await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
    return [...document.images].filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src);
  });
  expect(broken).toEqual([]);
  expect(errors).toEqual([]);
});

test('search and category filtering support empty results and reset', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('searchbox', { name: 'Search courses' }).fill('figma');
  await expect(page.locator('.course-card')).toHaveCount(1);
  await page.getByRole('searchbox', { name: 'Search courses' }).fill('no-such-course');
  await expect(page.getByRole('heading', { name: 'No matching courses' })).toBeVisible();
  await page.getByRole('button', { name: 'Show all courses' }).click();
  await expect(page.locator('.course-card')).toHaveCount(6);
  await page.locator('.category-card').filter({ hasText: 'Design' }).click();
  await expect(page.locator('.course-card')).toHaveCount(1);
  await page.getByRole('button', { name: 'All courses', exact: true }).click();
  await expect(page.locator('.course-card')).toHaveCount(6);
});

test('course selection persists locally and dialog closes with Escape', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'View Details', exact: true }).first().click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button', { name: 'Add to my courses', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Added to your courses');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await page.reload();
  await page.getByRole('button', { name: 'View Details', exact: true }).first().click();
  await page.getByRole('button', { name: 'Remove from my courses' }).click();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('osman-it-saved')))).toEqual([]);
});

test('registration validates while keeping credentials out of storage', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Register', exact: true }).click();
  await page.getByLabel('Full name').fill('Preview Student');
  await page.getByLabel('Email address').fill('student@example.com');
  await page.getByLabel('Password', { exact: true }).fill('preview-password');
  await page.getByRole('button', { name: 'Create account', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Form validated');
  expect(await page.evaluate(() => JSON.stringify(localStorage))).not.toContain('student@example.com');
  expect(await page.evaluate(() => JSON.stringify(localStorage))).not.toContain('preview-password');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Register', exact: true })).toBeFocused();
});

test('mobile navigation and all target widths have no horizontal page overflow', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth), `Overflow at ${width}px`).toBeLessThanOrEqual(width);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
  await page.getByRole('link', { name: 'About Us', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false');
});
