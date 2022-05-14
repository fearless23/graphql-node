import { user } from '../../entities/user.js';
import { GraphQLList, GraphQLInt } from 'graphql';

export const output = {
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
};
