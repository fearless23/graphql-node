import { get_weather_of_city } from '../../../weather_api/index.js';

export const resolver = async ({ logger, input }) => {
  const { city, state, country } = input;
  const weather_data = await get_weather_of_city({ city, state, country });
  const data = {
    city,
    weather_data,
  };
  return {
    data,
    status: 'pass',
    code: '1',
    user_message: 'here are your weather of locations',
  };
};
