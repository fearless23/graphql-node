import graphql from 'graphql';

const { GraphQLString, GraphQLInputObjectType, GraphQLNonNull } = graphql;

const get_users_input = new GraphQLInputObjectType({
  name: 'get_user_input',
  description: 'represents the request to get users',
  fields: () => {
    return {
      user_id: {
        description: 'user_id of the user',
        type: GraphQLString
      },
      // user_name: {
      //   description: 'user_name of the user',
      //   type: GraphQLString
      // },
      // first_name: {
      //   description: 'first_name of the user',
      //   type: GraphQLString
      // },
      // last_name: {
      //   description: 'last_name of the user',
      //   type: GraphQLString
      // },
      // email: {
      //   description: 'email of the user',
      //   type: GraphQLString
      // },
      // is_active: {
      //   description: 'is_active flag of the user',
      //   type: GraphQLBoolean
      // }
    };
  }
});

export const get_users_args = {
  params: {
    description: 'Input to get users',
    type: new GraphQLNonNull(get_users_input)
  }
};