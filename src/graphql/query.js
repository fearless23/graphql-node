import graphql from 'graphql';
import { TYPES } from './types/index.js';
import { RESOLVERS } from './resolvers/index.js';

const { GraphQLObjectType } = graphql;

export const api_query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is a root query',
  fields: {
    get_users: {
      description:'This is a user query',
      type: TYPES.get_users.output,
      args: TYPES.get_users.input,
      resolve: RESOLVERS.get_user
    },
  }
});
