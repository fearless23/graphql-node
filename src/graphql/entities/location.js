import graphql from 'graphql';

const { GraphQLObjectType, GraphQLString, GraphQLFloat } = graphql;

export const location = new GraphQLObjectType({
  name: 'Location',
  description: 'represents a location',
  fields: () => {
    return {
      name: {
        type: GraphQLString,
      },
      latitude: {
        type: GraphQLFloat,
        resolve: i => i.lat
      },
      longitude: {
        type: GraphQLFloat,
        resolve: i => i.lon
      },
      country: {
        type: GraphQLString,
      },
      state: {
        type: GraphQLString,
      }
    };
  }
});