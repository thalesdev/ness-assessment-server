import { Router } from 'express';

import teamsRouter from './teams.routes'
import positionsRouter from './positions.routes'
import playersRouter from './players.routes'

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Welcome to ness-football server.' });
});


routes.use('/teams', teamsRouter);
routes.use('/positions', positionsRouter);
routes.use('/players', playersRouter);

export default routes;
