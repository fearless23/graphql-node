import pino from 'pino';
import { config } from './config.js';
import { parse_error } from './utils.js';

const create_pino_logger = (options = {}) => {
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

class Logger {
  #_logger;
  constructor(options) {
    if (options.logger) this.#_logger = options.logger;
    else this.#_logger = create_pino_logger(options);
  }

  trace(payload, title = '') {
    this.#_logger.trace(payload, title);
  }

  debug(payload, title = '') {
    this.#_logger.debug(payload, title);
  }

  info(payload, title = '') {
    this.#_logger.info(payload, title);
  }

  input(payload) {
    // for input to resolvers or request.body
    this.#_logger.info(payload, 'input');
  }

  tag_start(method, input = {}) {
    this.#_logger.info({ method, tag: 'start', data: input }, `START-${method}`);
  }

  tag_end_ok(method, output = {}) {
    this.#_logger.info({ method, tag: 'end_ok', data: output }, `END-OK-${method}`);
  }

  tag_end_error(method, error = {}) {
    const payload = parse_error(error, method);
    this.#_logger.error({ method, tag: 'end_error', data: payload }, `END-ERROR-${method}`);
  }

  warn(payload, title = '') {
    this.#_logger.warn(payload, title);
  }

  error(error, title = '') {
    this.#_logger.error(parse_error(error, title), title);
  }

  fatal(error, title = '') {
    this.#_logger.fatal(parse_error(error, title), title);
  }

  child(options) {
    // this might slow down the logger
    const logger = this.#_logger.child(options);
    return new Logger({ logger });
  }
}

export const create_logger = (options = {}) => {
  const logger = new Logger(options);
  return logger;
};
