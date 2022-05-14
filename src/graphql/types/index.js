import { get_users_args } from './get_users.input.js';
import { get_users_output } from './get_users.output.js';

import { create_user_args } from './create_user.input.js';
import { create_user_output } from './create_user.output.js';

import { get_locations_output } from './get_locations.output.js';
import { get_locations_weather_output } from './get_locations_weather.output.js';
import { get_weather_output } from './get_weather.output.js';

export const TYPES = {
  get_users: {
    input: get_users_args,
    output: get_users_output,
  },
  create_user: {
    input: create_user_args,
    output: create_user_output,
  },
  get_weather: {
    output: get_weather_output,
  },
  get_locations: {
    output: get_locations_output,
  },
  get_locations_weather: {
    output: get_locations_weather_output,
  },
};
