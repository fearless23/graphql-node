import { GraphQLString, GraphQLNonNull } from 'graphql';

export const input = {
  city: {
    type: GraphQLNonNull(GraphQLString),
    description: 'name of location or city',
  },
  state: {
    type: GraphQLString,
    description: 'name of state for city like Punjab, Haryana, New Mexico',
  },
  country: {
    type: GraphQLString,
    description: 'code of country for city like IN, PK, US',
  },
};
