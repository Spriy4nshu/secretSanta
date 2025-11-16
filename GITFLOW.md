# GitFlow Workflow

This repository follows the **GitFlow** branching model for managing development, releases, and hotfixes.

## Branch Structure

### Main Branches

#### `main`
- **Purpose**: Production-ready code
- **Lifespan**: Permanent
- **Protection**: Should be protected, no direct commits
- **Merges from**: `release/*` and `hotfix/*` branches only

#### `develop`
- **Purpose**: Integration branch for ongoing development
- **Lifespan**: Permanent
- **Protection**: Should be protected, no direct commits
- **Merges from**: `feature/*`, `release/*`, and `hotfix/*` branches

### Supporting Branches

#### `feature/*`
- **Purpose**: Develop new features
- **Naming**: `feature/<feature-name>` (e.g., `feature/user-authentication`)
- **Branches from**: `develop`
- **Merges into**: `develop`
- **Lifespan**: Temporary (deleted after merge)
- **Example**:
  ```bash
  git checkout develop
  git pull origin develop
  git checkout -b feature/user-authentication
  # ... work on feature ...
  git push -u origin feature/user-authentication
  # Create PR to develop
  ```

#### `release/*`
- **Purpose**: Prepare for a new production release
- **Naming**: `release/<version>` (e.g., `release/1.0.0`)
- **Branches from**: `develop`
- **Merges into**: `main` AND `develop`
- **Lifespan**: Temporary (deleted after merge)
- **Activities**: Bug fixes, documentation, version bumping (NO new features)
- **Example**:
  ```bash
  git checkout develop
  git pull origin develop
  git checkout -b release/1.0.0
  # ... prepare release, fix bugs, update version ...
  git push -u origin release/1.0.0
  # Create PR to main
  # After merge to main, also merge back to develop
  ```

#### `hotfix/*`
- **Purpose**: Quickly fix critical bugs in production
- **Naming**: `hotfix/<issue-description>` (e.g., `hotfix/critical-security-patch`)
- **Branches from**: `main`
- **Merges into**: `main` AND `develop`
- **Lifespan**: Temporary (deleted after merge)
- **Example**:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b hotfix/critical-security-patch
  # ... fix the bug ...
  git push -u origin hotfix/critical-security-patch
  # Create PR to main
  # After merge to main, also merge back to develop
  ```

## Workflow Diagram

```
main       ─────────────●────────────────●──────────────▶
                         ↑                ↑
                    release/1.0      hotfix/fix
                         │                │
develop    ─────●────────●────────●───────●──────●──────▶
                 │                │               │
            feature/A         feature/B       feature/C
                 │                │               │
                 ●                ●               ●
```

## Step-by-Step Workflows

### Starting a New Feature

1. Ensure your `develop` branch is up to date:
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. Create a feature branch:
   ```bash
   git checkout -b feature/my-new-feature
   ```

3. Work on your feature with regular commits:
   ```bash
   git add .
   git commit -m "Add: Implement user login functionality"
   ```

4. Push your feature branch:
   ```bash
   git push -u origin feature/my-new-feature
   ```

5. Create a Pull Request to `develop` branch

6. After approval and merge, delete the feature branch:
   ```bash
   git branch -d feature/my-new-feature
   git push origin --delete feature/my-new-feature
   ```

### Creating a Release

1. Ensure `develop` is up to date:
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. Create a release branch:
   ```bash
   git checkout -b release/1.0.0
   ```

3. Bump version numbers and prepare release:
   ```bash
   # Update version in package.json, setup.py, etc.
   git commit -m "Bump version to 1.0.0"
   ```

4. Push release branch:
   ```bash
   git push -u origin release/1.0.0
   ```

5. Create Pull Request to `main` branch

6. After merge to `main`, tag the release:
   ```bash
   git checkout main
   git pull origin main
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

7. Merge release changes back to `develop`:
   ```bash
   git checkout develop
   git merge release/1.0.0
   git push origin develop
   ```

8. Delete the release branch:
   ```bash
   git branch -d release/1.0.0
   git push origin --delete release/1.0.0
   ```

### Creating a Hotfix

1. Start from `main`:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a hotfix branch:
   ```bash
   git checkout -b hotfix/security-vulnerability
   ```

3. Fix the issue and commit:
   ```bash
   git commit -m "Fix: Patch security vulnerability"
   ```

4. Push hotfix branch:
   ```bash
   git push -u origin hotfix/security-vulnerability
   ```

5. Create Pull Request to `main`

6. After merge, tag the hotfix:
   ```bash
   git checkout main
   git pull origin main
   git tag -a v1.0.1 -m "Hotfix version 1.0.1"
   git push origin v1.0.1
   ```

7. Merge hotfix back to `develop`:
   ```bash
   git checkout develop
   git merge hotfix/security-vulnerability
   git push origin develop
   ```

8. Delete the hotfix branch:
   ```bash
   git branch -d hotfix/security-vulnerability
   git push origin --delete hotfix/security-vulnerability
   ```

## Commit Message Conventions

Follow these conventions for clear commit history:

- **feat**: New feature
  ```
  feat: Add user authentication system
  ```

- **fix**: Bug fix
  ```
  fix: Resolve login redirect issue
  ```

- **docs**: Documentation changes
  ```
  docs: Update API documentation
  ```

- **style**: Code style changes (formatting, missing semicolons, etc.)
  ```
  style: Format code with prettier
  ```

- **refactor**: Code refactoring
  ```
  refactor: Simplify user service logic
  ```

- **test**: Adding or updating tests
  ```
  test: Add unit tests for authentication
  ```

- **chore**: Maintenance tasks
  ```
  chore: Update dependencies
  ```

## Best Practices

1. **Never commit directly to `main` or `develop`**
   - Always use Pull Requests for code review

2. **Keep branches focused**
   - One feature = One branch
   - Keep changes small and manageable

3. **Regularly sync with `develop`**
   - Rebase or merge `develop` into your feature branch regularly
   ```bash
   git checkout feature/my-feature
   git pull origin develop
   ```

4. **Delete merged branches**
   - Keep the repository clean by removing stale branches

5. **Use descriptive branch names**
   - `feature/user-authentication` ✅
   - `feature/fix` ❌

6. **Write meaningful commit messages**
   - Describe what and why, not how

7. **Test before merging**
   - Ensure all tests pass before creating a PR

## Branch Protection Recommendations

Configure these settings in your repository:

### `main` branch:
- Require pull request reviews before merging
- Require status checks to pass
- Require branches to be up to date before merging
- Do not allow force pushes
- Do not allow deletions

### `develop` branch:
- Require pull request reviews before merging
- Require status checks to pass
- Require branches to be up to date before merging
- Do not allow force pushes

## Quick Reference

| Task | Command |
|------|---------|
| Start new feature | `git checkout -b feature/name develop` |
| Start release | `git checkout -b release/version develop` |
| Start hotfix | `git checkout -b hotfix/name main` |
| Merge to develop | Create PR to `develop` |
| Merge to main | Create PR to `main` |
| Tag release | `git tag -a v1.0.0 -m "Version 1.0.0"` |

## Resources

- [Original GitFlow Article](https://nvie.com/posts/a-successful-git-branching-model/)
- [Atlassian GitFlow Tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

---

**Remember**: GitFlow provides structure, but adapt it to your team's needs!
