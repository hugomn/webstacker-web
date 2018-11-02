import * as Express          from 'express';
import { Request, Response } from 'express';

export const HealthCheckRoutes = (app: Express.Application) => {
  app.get('/health', (req: Request, res: Response) => {
    res
    .status(200)
    .json({ status: 'UP' });
  });
};
