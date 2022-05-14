import graphql from 'graphql';
import { user } from '../entities/user.js';

const { GraphQLList, GraphQLObjectType, GraphQLInt } = graphql;

export const get_users_output = new GraphQLObjectType({
  name: 'get_users',
  description: 'represents the payload after users are fetched',
  fields: {
    users: {
      type: new GraphQLList(user),
      description: 'users returned as the result of the get_users query',
      resolve: (payload) => payload.users,
    },
    count: {
      type: GraphQLInt,
      description: 'count of users returned as the result of the get_users query',
      resolve: (payload) => payload.count,
    },
  },
});
