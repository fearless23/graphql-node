import { GraphQLInputObjectType, GraphQLString, GraphQLBoolean } from 'graphql';

const user_input = new GraphQLInputObjectType({
  name: 'user_input',
  description: 'this represents the user to be created',
  fields: () => {
    return {
      user_id: {
        description: 'user_id of the user',
        type: GraphQLString,
      },
      user_name: {
        description: 'user_name of the user',
        type: GraphQLString,
      },
      first_name: {
        description: 'first_name of the user',
        type: GraphQLString,
      },
      last_name: {
        description: 'last_name of the user',
        type: GraphQLString,
      },
      email: {
        description: 'email of the user',
        type: GraphQLString,
      },
      is_active: {
        description: 'is_active flag of the user',
        type: GraphQLBoolean,
      },
    };
  },
});

export const input = {
  client_id: {
    description: 'client_id of the caller',
    // frb app iOS, frb app Android, frb app web, frb app mobile
    type: GraphQLString,
  },
  client_method: {
    description: 'client_method of the caller',
    // signup flow, login flow, forgot password flow
    type: GraphQLString,
  },
  user: {
    description: 'model for the user input',
    type: user_input,
  },
};
