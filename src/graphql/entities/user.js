import graphql from 'graphql';

const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = graphql;

export const user = new GraphQLObjectType({
  name: 'user',
  description: 'represents a user',
  fields: () => {
    return {
      user_id: {
        type: GraphQLString,
        resolve: user => user.user_id
      },
      user_name: {
        type: GraphQLString,
        resolve: user => user.user_name
      },
      first_name: {
        type: GraphQLString,
        resolve: user => user.first_name
      },
      last_name: {
        type: GraphQLString,
        resolve: user => user.last_name
      },
      email: {
        type: GraphQLString,
        resolve: user => user.email
      },
      date_of_birth: {
        type: GraphQLString,
        resolve: user => user.date_of_birth
      },
      phone: {
        type: GraphQLString,
        resolve: user => user.phone
      },
      is_active: {
        type: GraphQLBoolean,
        resolve: user => user.is_active
      },
      created_at: {
        type: GraphQLString,
        resolve: user => user.created_at
      },
      updated_at: {
        type: GraphQLString,
        resolve: user => user.updated_at
      }
    };
  }
});
