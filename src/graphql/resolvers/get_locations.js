import { get_locations as get_locations_api } from '../../weather_api/index.js';

export const get_locations = async (root, args, request) => {
  const method = get_locations.name;
  const logger = request._logger.child({ method });

  const { city } = args || {};
  logger.info({ city }, 'args');

  const locations = await get_locations_api({ city });

  return {
    city,
    data: locations,
  };
};
