import { GraphQLObjectType } from 'graphql';
import { create_user } from './create_user/index.js';

export const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    create_user,
  },
});
