import { input } from './input.js';
import { output } from './output.js';
import { resolver } from './resolver.js';
import { create_query } from '../../utils.js';

const params = {
  query_name: 'users',
  description: 'query users',
  input,
  output,
  resolver,
};

export const weather = create_query(params);
