import graphql from 'graphql';
import { location } from '../entities/index.js';

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

export const get_locations_output = new GraphQLObjectType({
  name: 'get_locations_output',
  description: 'represents the payload after user is created',
  fields: () => {
    return {
      city: {
        type: GraphQLString,
        description: 'status of the mutation for create user request',
        resolve: payload => payload.city,
      },
      data: {
        type: new GraphQLList(location),
        description: 'code of the mutation for create user request',
        resolve: payload => payload.data,
      },

    };
  }
});
