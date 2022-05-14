import graphql from 'graphql';
import { weather } from '../../entities/index.js';

const { GraphQLString } = graphql;

export const output = {
  latitude: {
    type: GraphQLString,
    description: 'input latitude',
  },
  longitude: {
    type: GraphQLString,
    description: 'input longitude',
  },
  weather: {
    type: weather,
    description: 'weather returned as the result of query',
  },
};
