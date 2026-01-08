const { test, expect } = require('@playwright/test');

test.describe('Projects Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#projects');
  });

  test('should display projects section', async ({ page }) => {
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();
  });

  test('should display section title and subtitle', async ({ page }) => {
    const sectionTitle = page.locator('.section-title');
    await expect(sectionTitle).toBeVisible();
    await expect(sectionTitle).toContainText(/Featured Projects/i);
    
    const sectionSubtitle = page.locator('.section-subtitle');
    await expect(sectionSubtitle).toBeVisible();
  });

  test('should display project cards', async ({ page }) => {
    const projectCards = page.locator('.project-card');
    const count = await projectCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display project information', async ({ page }) => {
    const firstProject = page.locator('.project-card').first();
    
    // Check for project title
    const projectTitle = firstProject.locator('h3');
    await expect(projectTitle).toBeVisible();
    
    // Check for project description
    const projectDescription = firstProject.locator('p');
    await expect(projectDescription).toBeVisible();
    
    // Check for project tags
    const projectTags = firstProject.locator('.tag');
    const tagCount = await projectTags.count();
    expect(tagCount).toBeGreaterThan(0);
  });

  test('should display coffee shop project', async ({ page }) => {
    const coffeeProject = page.locator('.project-card').filter({ hasText: /Order Management System/i });
    await expect(coffeeProject).toBeVisible();
    
    // Verify it has the coffee icon
    const coffeeIcon = coffeeProject.locator('.fa-coffee');
    await expect(coffeeIcon).toBeVisible();
  });
});

