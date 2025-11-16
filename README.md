# Secret Santa

A modern Secret Santa gift exchange application with mobile (iOS & Android) and web support.

## Project Structure

This is a monorepo containing multiple applications and shared packages:

```
secret-santa/
├── apps/
│   ├── mobile/          # React Native app (iOS & Android)
│   ├── web/             # Next.js web application
│   └── backend/         # Express.js API server
├── packages/
│   └── shared/          # Shared utilities and types
└── package.json         # Root workspace configuration
```

## Tech Stack

### Mobile (iOS & Android)
- React Native 0.73
- TypeScript
- React 18

### Web
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- TypeScript

### Shared
- TypeScript
- Common types and utilities
- Business logic

## Prerequisites

- Node.js >= 18.0.0
- Yarn >= 1.22.0
- For mobile development:
  - iOS: Xcode and CocoaPods
  - Android: Android Studio and SDK

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd secretSanta
```

2. Install dependencies:
```bash
yarn install
```

### Running the Applications

#### Mobile App
```bash
# Start Metro bundler
yarn mobile

# In another terminal
cd apps/mobile

# For iOS
yarn ios

# For Android
yarn android
```

#### Web App
```bash
yarn web
```
Visit [http://localhost:3000](http://localhost:3000)

#### Backend API
```bash
yarn backend
```
API will be available at [http://localhost:3001](http://localhost:3001)

## Development

### Workspace Commands

Run commands in all workspaces:
```bash
yarn build        # Build all packages
yarn test         # Run all tests
yarn lint         # Lint all code
yarn clean        # Clean all build artifacts
```

### Project-Specific Commands

```bash
# Mobile
yarn workspace @secret-santa/mobile start
yarn workspace @secret-santa/mobile android
yarn workspace @secret-santa/mobile ios

# Web
yarn workspace @secret-santa/web dev
yarn workspace @secret-santa/web build

# Backend
yarn workspace @secret-santa/backend dev
yarn workspace @secret-santa/backend build

# Shared
yarn workspace @secret-santa/shared build
yarn workspace @secret-santa/shared dev
```

## Features (Planned)

- User authentication and profiles
- Create and manage Secret Santa groups
- Automated random assignment generation
- Wishlist creation and sharing
- Email notifications
- Budget tracking
- Anonymous messaging
- Mobile and web access

## Project Configuration

- `.nvmrc` - Node version specification
- `.prettierrc` - Code formatting rules
- `.eslintrc.js` - Linting configuration
- `.editorconfig` - Editor configuration
- `.gitignore` - Git ignore rules

## Git Flow Workflow

This project uses Git Flow for branch management:

- **`main`** - Production-ready code
- **`develop`** - Integration branch for development
- **`feature/*`** - Feature branches (branch from `develop`)
- **`release/*`** - Release preparation (branch from `develop`)
- **`hotfix/*`** - Production fixes (branch from `main`)

### Quick Start for Contributors

```bash
# Clone and checkout develop
git clone <repository-url>
cd secretSanta
git checkout develop
yarn install

# Create a feature branch
git checkout -b feature/your-feature-name

# After making changes
git add .
git commit -m "feat(scope): your changes"
git push -u origin feature/your-feature-name
```

See [GITFLOW.md](./GITFLOW.md) for detailed workflow documentation.

## Contributing

We welcome contributions! Please follow these steps:

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines
2. Create a feature branch from `develop` (follow Git Flow)
3. Make your changes following our coding standards
4. Ensure tests pass (`yarn test`) and code is linted (`yarn lint`)
5. Commit using conventional commit format
6. Submit a pull request to `develop` branch

### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Commit Message Format

```
<type>(<scope>): <description>

Examples:
feat(mobile): add user authentication
fix(web): resolve navigation issue
docs: update README
```

## License

MIT
