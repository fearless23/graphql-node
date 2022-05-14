import pino from 'pino';
import { config } from './config.js';

export const create_logger = (options = {}) => {
  return pino({
    base: {},
    formatters: {
      level(label, number) {
        return { level: label || number };
      },
    },
    level: options.log_level || config.LOG_LEVEL,
    messageKey: 'title',
    nestedKey: 'payload',
    timestamp: config.is_node_env_development, // off in production
    // might need another transport in production
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  });
};
