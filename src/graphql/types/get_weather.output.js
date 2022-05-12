import graphql from 'graphql';
import { weather } from '../entities/index.js';

const { GraphQLObjectType, GraphQLString } = graphql;

export const get_weather_output = new GraphQLObjectType({
  name: 'get_weather_output',
  description: 'represents the payload after user is created',
  fields: () => {
    return {
      latitude: {
        type: GraphQLString,
        description: 'status of the mutation for create user request',
      },
      longitude: {
        type: GraphQLString,
        description: 'code of the mutation for create user request',
        resolve: payload => payload.longitude,
      },
      weather: {
        type: weather,
        description: 'weather returned as the result of the mutation',
        resolve: payload => payload.weather
      }
    };
  }
});
