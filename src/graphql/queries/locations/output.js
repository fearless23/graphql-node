import { location } from '../../entities/index.js';
import { GraphQLString, GraphQLList } from 'graphql';

export const output = {
  city: {
    type: GraphQLString,
    description: 'city which was queried',
    resolve: (payload) => payload.city,
  },
  locations: {
    type: new GraphQLList(location),
    description: 'locations data based on city query',
    resolve: (payload) => payload.data,
  },
};
