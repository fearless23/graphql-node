import { input } from './input.js';
import { output } from './output.js';
import { resolver } from './resolver.js';
import { create_mutation } from '../../utils.js';

const params = {
  mutation_name: 'create_user',
  description: 'create user mutation',
  input,
  output,
  resolver,
};

export const create_user = create_mutation(params);
