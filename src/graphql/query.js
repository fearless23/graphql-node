import graphql from 'graphql';
import { TYPES } from './types/index.js';
import { RESOLVERS } from './resolvers/index.js';

const { GraphQLObjectType, GraphQLString } = graphql;

export const api_query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is a root query',
  fields: {
    users: {
      description: 'This is a user query',
      type: TYPES.get_users.output,
      args: TYPES.get_users.input,
      resolve: RESOLVERS.get_users,
    },
    locations: {
      description: 'This is a locations query',
      type: TYPES.get_locations.output,
      args: {
        city: { type: GraphQLString },
      },
      resolve: RESOLVERS.get_locations,
    },
    weather: {
      description: 'This is a weather based on lat/lon query',
      type: TYPES.get_weather.output,
      args: {
        latitude: { type: GraphQLString },
        longitude: { type: GraphQLString },
      },
      resolve: RESOLVERS.get_weather,
    },
    locations_weather: {
      description: 'This is a weather of all locations',
      type: TYPES.get_locations_weather.output,
      args: {
        city: { type: GraphQLString },
      },
      resolve: RESOLVERS.get_locations_weather,
    },
  },
});
