# Git Flow Workflow

This project uses Git Flow for branch management and releases.

## Branch Structure

### Main Branches

- **`main`** - Production-ready code. Only accepts merges from `release/*` and `hotfix/*` branches.
- **`develop`** - Integration branch for features. Base for all feature development.

### Supporting Branches

- **`feature/*`** - New features and enhancements
  - Branch from: `develop`
  - Merge into: `develop`
  - Naming: `feature/description-of-feature`

- **`release/*`** - Release preparation
  - Branch from: `develop`
  - Merge into: `main` and `develop`
  - Naming: `release/v1.0.0`

- **`hotfix/*`** - Urgent production fixes
  - Branch from: `main`
  - Merge into: `main` and `develop`
  - Naming: `hotfix/fix-description`

## Workflow

### Starting a New Feature

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/your-feature-name

# Work on your feature
git add .
git commit -m "Add feature description"

# Push to remote
git push -u origin feature/your-feature-name
```

### Completing a Feature

```bash
# Update develop
git checkout develop
git pull origin develop

# Merge feature
git merge --no-ff feature/your-feature-name

# Push develop
git push origin develop

# Delete feature branch
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

### Creating a Release

```bash
# Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# Update version numbers, changelog, etc.
# Commit changes
git add .
git commit -m "Prepare release v1.0.0"

# Push release branch
git push -u origin release/v1.0.0
```

### Finishing a Release

```bash
# Merge to main
git checkout main
git merge --no-ff release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags

# Merge back to develop
git checkout develop
git merge --no-ff release/v1.0.0
git push origin develop

# Delete release branch
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

### Creating a Hotfix

```bash
# Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/fix-critical-bug

# Fix the bug
git add .
git commit -m "Fix critical bug"

# Merge to main
git checkout main
git merge --no-ff hotfix/fix-critical-bug
git tag -a v1.0.1 -m "Hotfix version 1.0.1"
git push origin main --tags

# Merge to develop
git checkout develop
git merge --no-ff hotfix/fix-critical-bug
git push origin develop

# Delete hotfix branch
git branch -d hotfix/fix-critical-bug
git push origin --delete hotfix/fix-critical-bug
```

## Branch Protection Rules (Recommended)

Configure these on GitHub:

### `main` branch
- Require pull request reviews before merging
- Require status checks to pass before merging
- Require branches to be up to date before merging
- Include administrators in restrictions

### `develop` branch
- Require pull request reviews before merging
- Require status checks to pass before merging
- Require branches to be up to date before merging

## Commit Message Convention

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(mobile): add user authentication
fix(web): resolve navigation issue
docs: update README with setup instructions
```

## Quick Reference

```bash
# Clone and setup
git clone <repo-url>
cd secretSanta
git checkout develop
yarn install

# Create feature
git checkout -b feature/my-feature develop

# Create release
git checkout -b release/v1.0.0 develop

# Create hotfix
git checkout -b hotfix/urgent-fix main
```
