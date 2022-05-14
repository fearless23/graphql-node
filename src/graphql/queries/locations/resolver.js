import { get_locations } from '../../../weather_api/index.js';

export const resolver = async ({ logger, input }) => {
  const { city, state, country } = input;
  const locations = await get_locations({ city, state, country });
  const data = { city, locations };
  return { data, status: 'pass', code: '1', user_message: 'here are your locations' };
};
