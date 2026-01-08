const { test, expect } = require('@playwright/test');

test.describe('Contact Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
  });

  test('should display all contact methods', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();

    // Check for contact cards
    const contactCards = page.locator('.contact-card');
    await expect(contactCards).toHaveCount(5); // Email, WhatsApp, Location, LinkedIn, GitHub
  });

  test('should have working email link', async ({ page }) => {
    const emailLink = page.locator('a[href^="mailto:"]');
    await expect(emailLink).toBeVisible();
    
    const href = await emailLink.getAttribute('href');
    expect(href).toContain('ahmad.hammoud.qa@hotmail.com');
  });

  test('should have working WhatsApp link', async ({ page }) => {
    const whatsappLink = page.locator('a[href*="wa.me"]');
    await expect(whatsappLink).toBeVisible();
    
    const href = await whatsappLink.getAttribute('href');
    expect(href).toContain('wa.me/96181610746');
  });

  test('should have working LinkedIn link', async ({ page, context }) => {
    const linkedinLink = page.locator('a[href*="linkedin.com"]');
    await expect(linkedinLink).toBeVisible();
    
    const href = await linkedinLink.getAttribute('href');
    expect(href).toContain('linkedin.com');
    
    // Verify it opens in new tab
    const target = await linkedinLink.getAttribute('target');
    expect(target).toBe('_blank');
  });

  test('should have working GitHub link', async ({ page }) => {
    const githubLink = page.locator('a[href*="github.com"]');
    await expect(githubLink).toBeVisible();
    
    const href = await githubLink.getAttribute('href');
    expect(href).toContain('github.com');
    
    // Verify it opens in new tab
    const target = await githubLink.getAttribute('target');
    expect(target).toBe('_blank');
  });
});

