import { GraphQLList, GraphQLString } from 'graphql';
import { weather } from '../../entities/index.js';

export const output = {
  city: {
    type: GraphQLString,
    description: 'city for which query was performed',
  },
  weather_data: {
    type: GraphQLList(weather),
    description: 'weather data of locations',
  },
};
