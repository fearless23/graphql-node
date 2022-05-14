import { get_users } from './get_users.js';
import { create_user } from './create_user.js';
import { get_weather } from './get_weather.js';
import { get_locations } from './get_locations.js';
import { get_locations_weather } from './get_locations_weather.js';

export const RESOLVERS = {
  get_users,
  create_user,
  get_weather,
  get_locations,
  get_locations_weather,
};
