import graphql from 'graphql';
import { location, weather } from '../entities/index.js';

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const wlData = new GraphQLObjectType({
  name: 'WLData',
  description: 'represents the payload after user is created',
  fields: () => {
    return {
      weather: {
        type: weather,
        description: 'status of the mutation for create user request',
        resolve: payload => payload.weather,
      },
      location: {
        type: location,
        description: 'code of the mutation for create user request',
      }
    };
  }
});

export const get_locations_weather_output = new GraphQLObjectType({
  name: 'get_locations_weather_output',
  description: 'represents the payload after user is created',
  fields: () => {
    return {
      city: {
        type: GraphQLString,
        description: 'status of the mutation for create user request',
        resolve: payload => payload.city,
      },
      data: {
        type: GraphQLList(wlData),
        description: 'code of the mutation for create user request',
        resolve: payload => payload.data,
      }
    };
  }
});
