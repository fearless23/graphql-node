import { get_weather_of_city } from '../../weather_api/index.js';

export const get_locations_weather = async (root, args, request) => {
  const method = get_locations_weather.name;
  const logger = request._logger.child({ method });

  const { city } = args || {};
  logger.info({ city }, 'args');

  const data = await get_weather_of_city({ city });

  return {
    city,
    data
  };
};
