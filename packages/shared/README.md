# Secret Santa Shared Package

Shared utilities, types, and business logic used across mobile, web, and backend applications.

## Contents

### Types
- User, Group, Assignment, Wishlist interfaces
- Common data models

### Utils
- `shuffleArray` - Fisher-Yates shuffle implementation
- `generateAssignments` - Secret Santa assignment generation
- `isValidEmail` - Email validation

## Usage

```typescript
import { User, generateAssignments, isValidEmail } from '@secret-santa/shared';

// Generate assignments
const userIds = ['user1', 'user2', 'user3', 'user4'];
const assignments = generateAssignments(userIds);

// Validate email
const valid = isValidEmail('test@example.com');
```

## Building

```bash
yarn build
```
