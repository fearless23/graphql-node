import { GraphQLObjectType } from 'graphql';

// QUERIES
import { users } from './users/index.js';
import { weather } from './weather/index.js';
import { locations } from './locations/index.js';
import { locations_weather } from './locations_weather/index.js';

export const query = new GraphQLObjectType({
  name: 'query',
  fields: {
    users,
    weather,
    locations,
    locations_weather,
  },
});
