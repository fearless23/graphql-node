import pkg from 'express-graphql';
import { config } from '../config.js';
import { GraphQLSchema } from 'graphql';
import { query } from './queries/index.js';
import { mutation } from './mutations/index.js';

export const graphql_api = () =>
  pkg.graphqlHTTP({
    schema: new GraphQLSchema({ query, mutation }),
    pretty: config.is_node_env_development,
    graphiql: config.is_node_env_development,
  });
