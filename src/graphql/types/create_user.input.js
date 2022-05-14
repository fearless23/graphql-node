import graphql from 'graphql';

const { GraphQLInputObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull } = graphql;

const user_input = new GraphQLInputObjectType({
  name: 'user_input',
  description: 'this represents the user to be created',
  fields: () => {
    return {
      user_id: {
        description: 'user_id of the user',
        type: GraphQLString
      },
      user_name: {
        description: 'user_name of the user',
        type: GraphQLString
      },
      first_name: {
        description: 'first_name of the user',
        type: GraphQLString
      },
      last_name: {
        description: 'last_name of the user',
        type: GraphQLString
      },
      email: {
        description: 'email of the user',
        type: GraphQLString
      },
      is_active: {
        description: 'is_active flag of the user',
        type: GraphQLBoolean
      }
    };
  }
});

const create_user_input = new GraphQLInputObjectType({
  name: 'create_user_input',
  description: 'represents the request to create a user',
  fields: () => {
    return {
      client_id: {
        description: 'client_id of the caller',
        // frb app iOS, frb app Android, frb app web, frb app mobile
        type: GraphQLString
      },
      client_method: {
        description: 'client_method of the caller',
        // signup flow, login flow, forgot password flow
        type: GraphQLString
      },
      user: {
        description: 'model for the user input',
        type: user_input
      }
    };
  }
});

export const create_user_args = {
  params: {
    description: 'Input to create user',
    type: new GraphQLNonNull(create_user_input)
  }
};
