import graphql from 'graphql';

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } = graphql;

export const weather = new GraphQLObjectType({
  name: 'Weather',
  description: 'represents a weather object',
  fields: () => {
    return {
      wid: {
        type: GraphQLInt,
        resolve: i => i.id
      },
      name: {
        type: GraphQLString,
      },
      country: {
        type: GraphQLString,
        resolve: i => i.sys.country
      },
      sunrise: {
        type: GraphQLString,
        resolve: i => i.sys && new Date(i.sys.sunrise * 1000).toLocaleString()
      },
      sunset: {
        type: GraphQLString,
        resolve: i => i.sys && new Date(i.sys.sunset * 1000).toLocaleString()
      },
      temp: {
        type: GraphQLFloat,
        resolve: i => i.main.temp
      },
      feels_like: {
        type: GraphQLFloat,
        resolve: i => i.main.feels_like
      },
      description: {
        type: GraphQLString,
        resolve: i => i.weather[0].description
      },
      main: {
        type: GraphQLString,
        resolve: i => i.weather[0].main
      },
      latitude: {
        type: GraphQLFloat,
        resolve: i => i.coord.lat
      },
      longitude: {
        type: GraphQLFloat,
        resolve: i => i.coord.lon
      },
    };
  }
});
