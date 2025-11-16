import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Secret Santa API is running' });
});

// API routes
app.get('/api/v1', (req: Request, res: Response) => {
  res.json({
    message: 'Secret Santa API v1',
    endpoints: {
      health: '/health',
      api: '/api/v1',
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎅 Secret Santa API running on port ${PORT}`);
});

export default app;
