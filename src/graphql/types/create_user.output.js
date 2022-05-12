import graphql from 'graphql';
import { user } from '../entities/user.js';

const { GraphQLObjectType, GraphQLString } = graphql;

export const create_user_output = new GraphQLObjectType({
  name: 'create_user_payload',
  description: 'represents the payload after user is created',
  fields: () => {
    return {
      status: {
        type: GraphQLString,
        description: 'status of the mutation for create user request',
        resolve: payload => payload.status,
      },
      code: {
        type: GraphQLString,
        description: 'code of the mutation for create user request',
        resolve: payload => payload.code,
      },
      user: {
        type: user,
        description: 'user object returned as the result of the mutation',
        resolve: payload => payload.user
      }
    };
  }
});
