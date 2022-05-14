import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';

export const location = new GraphQLObjectType({
  name: 'location',
  description: 'location entity',
  fields: () => {
    return {
      latitude: { type: GraphQLFloat },
      longitude: { type: GraphQLFloat },
      name: { type: GraphQLString },
      state: { type: GraphQLString },
      country: { type: GraphQLString },
    };
  },
});
