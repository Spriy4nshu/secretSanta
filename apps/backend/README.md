# Secret Santa Backend API

Express.js backend API for Secret Santa application.

## Getting Started

### Prerequisites
- Node.js >= 18
- Yarn

### Installation

From the root directory:
```bash
yarn install
```

### Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update environment variables as needed

### Running the Server

Development mode:
```bash
cd apps/backend
yarn dev
```

The API will be available at [http://localhost:3001](http://localhost:3001)

### Building

```bash
yarn build
yarn start
```

## API Endpoints

- `GET /health` - Health check
- `GET /api/v1` - API information

## Tech Stack

- Node.js
- Express.js
- TypeScript
- tsx (development)
