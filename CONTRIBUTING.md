# Contributing to Secret Santa

Thank you for your interest in contributing to Secret Santa! This document provides guidelines and instructions for contributing.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/secretSanta.git
   cd secretSanta
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/secretSanta.git
   ```
4. **Install dependencies**:
   ```bash
   yarn install
   ```

## Development Workflow

We use Git Flow for branch management. Please read [GITFLOW.md](./GITFLOW.md) for detailed workflow information.

### Quick Start

1. **Create a feature branch** from `develop`:
   ```bash
   git checkout develop
   git pull upstream develop
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:
   ```bash
   yarn test
   yarn lint
   ```

4. **Commit your changes** using conventional commits:
   ```bash
   git add .
   git commit -m "feat(scope): description of your changes"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** to the `develop` branch

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Maintain strict type safety
- Avoid using `any` type
- Document complex functions with JSDoc comments

### Code Style

- Follow the existing code style
- Use Prettier for formatting (configured in `.prettierrc`)
- Use ESLint for linting (configured in `.eslintrc.js`)
- Run `yarn lint` before committing

### File Organization

```
- Keep components small and focused
- Use descriptive file and variable names
- Group related files together
- Export from index files for cleaner imports
```

### Testing

- Write tests for new features
- Maintain or improve code coverage
- Run all tests before submitting PR: `yarn test`

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Tests pass locally (`yarn test`)
- [ ] Linting passes (`yarn lint`)
- [ ] Commit messages follow conventional commits format
- [ ] Branch is up to date with `develop`
- [ ] Documentation is updated if needed

### PR Title Format

Use conventional commits format:

```
<type>(<scope>): <description>
```

Examples:
- `feat(mobile): add login screen`
- `fix(web): resolve navigation bug`
- `docs: update API documentation`

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Screenshots (if applicable)
Add screenshots or GIFs

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests
- [ ] New and existing tests pass
```

## Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Changes to build process or auxiliary tools

### Scope

Indicate which part of the codebase:
- `mobile` - React Native app
- `web` - Next.js app
- `backend` - Express API
- `shared` - Shared package
- `docs` - Documentation
- `ci` - CI/CD changes

### Examples

```
feat(mobile): add user profile screen
fix(backend): resolve authentication token expiration
docs: add API endpoint documentation
refactor(shared): improve assignment algorithm efficiency
test(web): add unit tests for login component
```

## Project Structure

```
secretSanta/
├── apps/
│   ├── mobile/          # React Native (iOS & Android)
│   ├── web/             # Next.js web application
│   └── backend/         # Express.js API
├── packages/
│   └── shared/          # Shared utilities and types
├── .github/             # GitHub workflows and templates
└── docs/                # Additional documentation
```

## Development Tips

### Running the Applications

```bash
# Mobile
yarn mobile          # Start Metro
yarn mobile:ios      # Run iOS
yarn mobile:android  # Run Android

# Web
yarn web            # Start dev server

# Backend
yarn backend        # Start API server
```

### Working with Monorepo

```bash
# Install dependencies for all packages
yarn install

# Build all packages
yarn build

# Run tests for all packages
yarn test

# Clean all packages
yarn clean

# Run command in specific workspace
yarn workspace @secret-santa/mobile <command>
yarn workspace @secret-santa/web <command>
yarn workspace @secret-santa/backend <command>
yarn workspace @secret-santa/shared <command>
```

## Reporting Bugs

1. **Check existing issues** to avoid duplicates
2. **Use the bug report template** when creating an issue
3. **Include**:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, Node version, etc.)
   - Screenshots if applicable

## Requesting Features

1. **Check existing feature requests** to avoid duplicates
2. **Use the feature request template**
3. **Provide**:
   - Clear description of the feature
   - Use case and benefits
   - Possible implementation approach

## Code Review Process

1. Maintainers review PRs within a few days
2. Address review comments
3. Once approved, maintainers will merge
4. PRs must pass all CI checks

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

## Questions?

Feel free to open an issue for questions or reach out to maintainers.

## Thank You!

Your contributions make this project better!
