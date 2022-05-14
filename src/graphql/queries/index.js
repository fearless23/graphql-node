import { GraphQLObjectType } from 'graphql';

// QUERIES
import { weather } from './weather/index.js';
import { locations_weather } from './locations_weather/index.js';
import { users } from './users/index.js';
import { locations } from './locations/index.js';

export const api_query = new GraphQLObjectType({
  name: 'query',
  fields: {
    users,
    locations,
    weather,
    locations_weather,
  },
});
