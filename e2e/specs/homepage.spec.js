const { test, expect } = require('@playwright/test');

test.describe('Portfolio Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Ahmad Hammoud/);
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    const heroSection = page.locator('#home');
    await expect(heroSection).toBeVisible();
    
    // Check for hero title
    const heroTitle = page.locator('.hero-title');
    await expect(heroTitle).toBeVisible();
  });

  test('should navigate to projects section', async ({ page }) => {
    await page.goto('/');
    
    // Click on "Explore Case Studies" or "View Projects" button
    const projectsButton = page.locator('a[href="#projects"]').first();
    await projectsButton.click();
    
    // Wait for navigation and check projects section is visible
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();
  });

  test('should navigate to contact section', async ({ page }) => {
    await page.goto('/');
    
    // Click on "Let's Connect" button
    const contactButton = page.locator('a[href="#contact"]').first();
    await contactButton.click();
    
    // Wait for navigation and check contact section is visible
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Test navbar navigation
    const navLinks = [
      { href: '#home', section: '#home' },
      { href: '#about', section: '#about' },
      { href: '#skills', section: '#skills' },
      { href: '#projects', section: '#projects' },
      { href: '#contact', section: '#contact' },
    ];

    for (const link of navLinks) {
      const navLink = page.locator(`a[href="${link.href}"]`).first();
      if (await navLink.isVisible()) {
        await navLink.click();
        await expect(page.locator(link.section)).toBeVisible();
      }
    }
  });
});

