import { GraphQLString } from 'graphql';

export const input = {
  user_id: {
    description: 'user_id of the user',
    type: GraphQLString,
  },
  email: {
    description: 'email of the user',
    type: GraphQLString,
  },
};
