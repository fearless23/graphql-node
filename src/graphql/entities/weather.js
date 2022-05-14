import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } from 'graphql';

export const weather = new GraphQLObjectType({
  name: 'entity_weather',
  description: 'weather entity',
  fields: () => {
    return {
      latitude: { type: GraphQLFloat },
      longitude: { type: GraphQLFloat },
      // name: { type: GraphQLString },
      // state: { type: GraphQLString },
      // country: { type: GraphQLString },
      id: { type: GraphQLInt },
      visibility: { type: GraphQLFloat },
      timezone: { type: GraphQLFloat },
      main: { type: GraphQLString },
      description: { type: GraphQLString },
      temp: { type: GraphQLFloat },
      feels_like: { type: GraphQLFloat },
      temp_min: { type: GraphQLFloat },
      temp_max: { type: GraphQLFloat },
      pressure: { type: GraphQLFloat },
      humidity: { type: GraphQLFloat },
      sea_level: { type: GraphQLFloat },
      grnd_level: { type: GraphQLFloat },
      wind_speed: { type: GraphQLFloat },
      wind_deg: { type: GraphQLFloat },
      wind_gust: { type: GraphQLFloat },
      sunrise: {
        type: GraphQLString,
        resolve: (i) => i.sunrise && new Date(i.sunrise * 1000).toLocaleString(),
      },
      sunset: {
        type: GraphQLString,
        resolve: (i) => i.sunset && new Date(i.sunset * 1000).toLocaleString(),
      },
      clouds: { type: GraphQLFloat },
    };
  },
});
