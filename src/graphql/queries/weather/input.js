import { GraphQLFloat, GraphQLNonNull } from 'graphql';

export const input = {
  latitude: {
    type: GraphQLNonNull(GraphQLFloat),
    description: 'latitude of location',
  },
  longitude: {
    type: GraphQLNonNull(GraphQLFloat),
    description: 'longitude of location',
  },
};
