export const config = {
  PORT: process.env.PORT || 7000,
  NODE_ENV: process.env.NODE_ENV,
  APP_ENV: process.env.APP_ENV,
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  WEATHER_API_KEY: process.env.WEATHER_API_KEY,

  // node_env: 'production' or not
  is_node_env_production: process.env.NODE_ENV === 'production',
  is_node_env_development: process.env.NODE_ENV !== 'production',

  // app env: dev, uat, prod
  is_prod: process.env.APP_ENV === 'prod',
  is_dev: process.env.APP_ENV === 'dev',
};
