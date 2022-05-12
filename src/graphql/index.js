import graphql from 'graphql';
import pkg from 'express-graphql';
import { api_query as query } from './query.js';
import { api_mutation as mutation } from './mutation.js';

const { GraphQLSchema } = graphql;

export const get_graphql_http = () => {
  const graphql_schema = new GraphQLSchema({ query, mutation });
  return pkg.graphqlHTTP({
    schema: graphql_schema,
    pretty: true,
    graphiql: process.env.NODE_ENV !== 'production'
  });
};
