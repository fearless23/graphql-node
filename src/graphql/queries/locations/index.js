import { input } from './input.js';
import { output } from './output.js';
import { resolver } from './resolver.js';
import { create_query } from '../../utils.js';

const params = {
  query_name: 'locations',
  description: 'get locations based on city query',
  input,
  output,
  resolver,
};

export const locations = create_query(params);
