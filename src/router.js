import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import health from 'express-healthcheck';
import { create_logger } from './logger.js';
import { graphql_api } from './graphql/index.js';

const intercept = async (request, response, next) => {
  const request_id = uuidv4(); // unique request_id
  const logger = create_logger().child({ request_id });
  logger.trace('request received');
  request._request_id = request_id;
  request._logger = logger;
  next();
};

// Standard Express Middlewares
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use('/healthcheck', health());
router.use(intercept);
router.use('/test', async (request, response) => {
  response.status(200).json({ message: 'hello world' });
});
router.use('/graphql', graphql_api());

export default router;
