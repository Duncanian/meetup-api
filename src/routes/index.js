import authRouter from './auth';
import meetupRouter from './meetup';

const apiPrefix = '/api/v1';

const route = (app) => {
  app.use(apiPrefix, authRouter);
  app.use(apiPrefix, meetupRouter);
};

export default route;
