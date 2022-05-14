import { get_weather as get_weather_api } from '../../../weather_api/index.js';

export const resolver = async ({ logger, input }) => {
  const { latitude, longitude } = input;
  const weather = await get_weather_api({ latitude, longitude });
  const data = { latitude, longitude, weather };
  return { data };
};
