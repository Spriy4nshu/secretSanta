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

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Ensure tests pass and code is linted
4. Submit a pull request

## License

MIT
