// import graphql from 'graphql';
// import { TYPES } from './types/index.js';
// import { RESOLVERS } from './resolvers/index.js';

// const { GraphQLObjectType } = graphql;

// export const api_mutation = new GraphQLObjectType({
//   name: 'api_mutation',
//   description: 'available mutations',
//   fields: () => {
//     return {
//       create_user: {
//         description: 'Function to create a new user',
//         type: TYPES.create_user.output,
//         args: TYPES.create_user.input,
//         resolve: RESOLVERS.create_user,
//       },
//     };
//   },
// });