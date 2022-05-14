import pino from 'pino';

export const create_logger = (minimum_log_level = '') => {
  return pino({
    base: { },
    formatters: {
      level (label, number) {
        return { level: label || number };
      },
    },
    level: minimum_log_level || process.env.LOG_LEVEL || 'info',
    messageKey: 'title',
    nestedKey: 'payload',
    timestamp: process.env.NODE_ENV !== 'production', // off in production
    // might need another transport in production
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }
  });
};
