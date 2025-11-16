# Project Setup Notes

## Git Flow Implementation

This repository has been configured with a complete Git Flow workflow.

### Branch Structure

#### Permanent Branches
- **`main`** - Production-ready, stable releases only
  - Tagged with version numbers (v1.0.0, v1.1.0, etc.)
  - Only accepts merges from `release/*` and `hotfix/*` branches

- **`develop`** - Main integration branch for development
  - All features merge here first
  - Base branch for all new feature development
  - Contains the latest delivered development changes

#### Temporary Branches
- **`feature/*`** - Feature development branches
  - Created from: `develop`
  - Merged back to: `develop`
  - Example: `feature/user-authentication`, `feature/wishlist-management`

- **`release/*`** - Release preparation branches
  - Created from: `develop`
  - Merged to: `main` AND `develop`
  - Example: `release/v1.0.0`, `release/v2.0.0`

- **`hotfix/*`** - Emergency production fixes
  - Created from: `main`
  - Merged to: `main` AND `develop`
  - Example: `hotfix/critical-security-patch`, `hotfix/payment-bug`

### Current Status

- ✅ `develop` branch created and pushed
- ✅ Git Flow documentation added (GITFLOW.md)
- ✅ Contributing guidelines added (CONTRIBUTING.md)
- ✅ Pull request templates created for different workflow types
- ✅ Issue templates created (bug reports, feature requests)
- ✅ CHANGELOG template created
- ✅ README updated with Git Flow quick start guide
- ⏳ `main` branch - to be created from first release

### Next Steps

1. **Continue Development**
   - All new work should branch from `develop`
   - Use feature branches: `git checkout -b feature/your-feature`

2. **First Release**
   - When ready for first production release:
     ```bash
     git checkout develop
     git checkout -b release/v1.0.0
     # Update version numbers, finalize CHANGELOG
     git checkout -b main  # Create main branch
     git merge --no-ff release/v1.0.0
     git tag -a v1.0.0 -m "Initial release"
     ```

3. **Ongoing Development**
   - Follow the workflow documented in GITFLOW.md
   - Use conventional commits for all changes
   - Keep CHANGELOG.md updated with each release

### Documentation Files

- **GITFLOW.md** - Detailed workflow instructions with examples
- **CONTRIBUTING.md** - Contribution guidelines and coding standards
- **CHANGELOG.md** - Version history and release notes
- **.github/pull_request_template.md** - General PR template
- **.github/PULL_REQUEST_TEMPLATE/** - Specific templates for features, releases, hotfixes
- **.github/ISSUE_TEMPLATE/** - Bug reports and feature request templates

### Workflow Quick Reference

```bash
# Start new feature
git checkout develop
git pull origin develop
git checkout -b feature/my-feature
# ... make changes ...
git commit -m "feat(scope): description"
git push -u origin feature/my-feature
# Create PR to develop

# Prepare release
git checkout develop
git checkout -b release/v1.1.0
# ... update versions, changelog ...
git commit -m "chore: prepare release v1.1.0"

# Finish release
git checkout main
git merge --no-ff release/v1.1.0
git tag -a v1.1.0 -m "Release v1.1.0"
git push origin main --tags
git checkout develop
git merge --no-ff release/v1.1.0
git push origin develop

# Hotfix
git checkout main
git checkout -b hotfix/critical-fix
# ... make fixes ...
git commit -m "fix: critical bug"
git checkout main
git merge --no-ff hotfix/critical-fix
git tag -a v1.0.1 -m "Hotfix v1.0.1"
git push origin main --tags
git checkout develop
git merge --no-ff hotfix/critical-fix
git push origin develop
```

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

Types: feat, fix, docs, style, refactor, test, chore
Scopes: mobile, web, backend, shared, docs, ci

Examples:
feat(mobile): add login screen
fix(backend): resolve token expiration
docs: update API documentation
```

### Protected Branch Rules (Recommended)

Configure on GitHub/GitLab:

**For `main`:**
- Require pull request reviews (at least 1-2 reviewers)
- Require status checks to pass
- Require branches to be up to date
- No direct pushes

**For `develop`:**
- Require pull request reviews (at least 1 reviewer)
- Require status checks to pass
- Allow maintainers to bypass temporarily if needed

## Monorepo Structure

```
secretSanta/
├── apps/
│   ├── mobile/          # React Native (iOS & Android)
│   ├── web/             # Next.js
│   └── backend/         # Express API
├── packages/
│   └── shared/          # Common utilities & types
├── .github/             # GitHub templates & workflows
├── GITFLOW.md           # Git Flow documentation
├── CONTRIBUTING.md      # Contribution guidelines
└── CHANGELOG.md         # Version history
```

## Technology Stack

- **Package Manager**: Yarn Workspaces
- **Mobile**: React Native 0.73, TypeScript
- **Web**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Shared**: TypeScript, common types and utilities
