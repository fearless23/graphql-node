import pkg from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { query } from './queries/index.js';
import { mutation } from './mutations/index.js';

export const get_graphql_http = () => {
  const graphql_schema = new GraphQLSchema({ query, mutation });
  return pkg.graphqlHTTP({
    schema: graphql_schema,
    pretty: true,
    graphiql: process.env.NODE_ENV !== 'production',
  });
};
