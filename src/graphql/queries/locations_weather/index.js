import { input } from './input.js';
import { output } from './output.js';
import { resolver } from './resolver.js';
import { create_query } from '../../utils.js';

const params = {
  query_name: 'locations_weather',
  description: 'get weather of all locations based on city query',
  input,
  output,
  resolver,
};

export const locations_weather = create_query(params);
