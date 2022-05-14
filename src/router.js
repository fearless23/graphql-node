import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import health from 'express-healthcheck';
import { create_logger } from './logger.js';
import { get_graphql_http } from './graphql/index.js';

const router = express.Router();

const intercept = async (request, response, next) => {
  const request_id = uuidv4(); // unique request_id
  const logger = create_logger().child({ request_id });
  logger.trace('request received');
  request._request_id = request_id;
  request._logger = logger;
  next();
};

// Express Middleware
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use('/healthcheck', health());
router.use(intercept);
router.use('/rest-api', async (request, response) => {
  response.status(200).json({ message: 'hello world' });
});
router.use('/graphql', get_graphql_http());

export default router;
