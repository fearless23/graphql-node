import express from 'express';
import router from './src/router.js';
import { config } from './src/config.js';
import { create_logger } from './src/logger.js';

const start_server = async () => {
  const logger = create_logger();
  // Initiation work here; if required
  // like database connections, etc.
  const url = `http://localhost:${config.PORT}`;
  logger.info(`Server started at ${url} ...`);
  logger.info(`See graphql at ${url}/graphql ...`);
};

const app = express();
app.use(router);
app.listen(config.PORT, start_server);
export default app;
