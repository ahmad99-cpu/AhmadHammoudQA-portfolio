# GitHub Actions CI/CD Workflows

This directory contains GitHub Actions workflows for automated testing, building, and deployment.

## Workflows

### 1. CI Pipeline (`.github/workflows/ci.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**What it does:**
- ✅ Runs Playwright end-to-end tests
- ✅ Builds the project
- ✅ Uploads test reports and screenshots as artifacts
- ✅ Validates that the project builds successfully

### 2. Deploy Pipeline (`.github/workflows/deploy.yml`)

**Triggers:**
- Push to `main` branch
- Manual trigger via GitHub Actions UI

**What it does:**
- ✅ Builds the production-ready project
- ✅ Deploys to GitHub Pages
- ✅ Makes your portfolio available at `https://[username].github.io/AhmadHammoudQA-portfolio`

## Setup Instructions

### For CI/CD (Testing & Building)

1. **Push the workflow files to your repository**
   ```bash
   git add .github/workflows/
   git commit -m "Add CI/CD workflows"
   git push
   ```

2. **Verify workflows are running**
   - Go to your GitHub repository
   - Click on the "Actions" tab
   - You should see the workflows running

### For GitHub Pages Deployment

1. **Enable GitHub Pages in repository settings:**
   - Go to your repository → Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Update repository name if needed:**
   - If your repository name is different from `AhmadHammoudQA-portfolio`, update the `PUBLIC_URL` in `deploy.yml`
   - Or update `package.json` homepage field to match your repository name

3. **Make repository public (if using free GitHub Pages):**
   - Free GitHub Pages only works with public repositories
   - Go to Settings → General → Danger Zone → Change repository visibility

4. **Trigger deployment:**
   - Push to `main` branch (automatic)
   - Or manually trigger via Actions → Deploy to GitHub Pages → Run workflow

## Workflow Status Badge

Add this to your README.md to show CI/CD status:

```markdown
![CI/CD](https://github.com/ahmad99-cpu/AhmadHammoudQA-portfolio/actions/workflows/ci.yml/badge.svg)
```

## Troubleshooting

### Tests failing?
- Check the Actions tab for detailed error logs
- Download test artifacts (screenshots/reports) to debug
- Ensure all dependencies are in `package.json`

### Deployment not working?
- Verify GitHub Pages is enabled in repository settings
- Check that the repository name matches the `PUBLIC_URL` in `deploy.yml`
- Ensure the repository is public (for free GitHub Pages)

### Build failing?
- Check Node.js version compatibility
- Verify all dependencies install correctly
- Review build logs in the Actions tab

