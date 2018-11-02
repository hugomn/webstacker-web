import * as Express         from 'express';
import { applyMiddlewares } from './middlewares';
import { DemoRoutes }       from './routes/DemoRoutes';
import { CounterRoutes }    from './routes/CounterRoutes';
import { HealthCheckRoutes } from './routes/HealthCheckRoutes';
import { StaticRoutes }     from './routes/StaticRoutes';
import { SSRRoutes }        from './routes/SSRRoutes';

export const app: Express.Application = Express();

app.disable('x-powered-by');

applyMiddlewares(app);

HealthCheckRoutes(app);

/**
 * core routes, don't delete these
 */
StaticRoutes(app);
SSRRoutes(app);
