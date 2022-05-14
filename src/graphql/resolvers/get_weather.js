import { get_weather as get_weather_api } from '../../weather_api/index.js';

export const get_weather = async (root, args, request) => {
  const method = get_weather.name;
  const logger = request._logger.child({ method });

  const { latitude, longitude } = args || {};
  logger.info({ latitude, longitude }, 'args');
  const weather = await get_weather_api({ lat: latitude, lon: longitude });

  return {
    latitude,
    longitude,
    weather,
  };
};
