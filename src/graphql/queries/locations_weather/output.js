import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { weather, location } from '../../entities/index.js';

const weather_location = new GraphQLObjectType({
  name: 'weather_location',
  description: 'weather and location entities combined',
  fields: {
    weather: { type: weather },
    location: { type: location },
  },
});

export const output = {
  city: {
    type: GraphQLString,
    description: 'city for which query was performed',
  },
  weather_data: {
    type: GraphQLList(weather_location),
    description: 'weather data of locations',
  },
};
