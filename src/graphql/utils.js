import { GraphQLNonNull, GraphQLObjectType, GraphQLInputObjectType, GraphQLString } from 'graphql';

export const query_input = (query_name, fields, options = {}) => {
  const input_params = new GraphQLInputObjectType({
    name: `${query_name}_input`,
    description: `input for ${query_name} query`,
    fields,
  });
  const input_type = options.empty_allowed ? input_params : new GraphQLNonNull(input_params);
  return { input: { type: input_type } };
};

export const query_output = (query_name, fields) => {
  const output = new GraphQLObjectType({
    name: `${query_name}_output`,
    description: `output of ${query_name} query`,
    fields: {
      status: {
        type: GraphQLString,
        description: 'status of query',
      },
      code: {
        type: GraphQLString,
        description: 'code of query',
      },
      message: {
        type: GraphQLString,
        description: 'message of query',
      },
      data: new GraphQLObjectType(fields),
    },
  });
  return output;
};

export const query_resolver = (query_name, resolver_function) => async (root, args, request) => {
  const logger = request._logger.child({ method: query_name });
  const method = `query:${query_name}`;
  try {
    const params = {
      logger,
      request_id: request._request_id,
      input: args.input || {},
      root,
      method,
    };
    logger.info(params.input, 'input');
    const output = await resolver_function(params);
    if (!output || !output.data) throw new Error('no data returned by query');
    return {
      status: output.status || 'pass',
      code: output.code || '1',
      message: output.user_message || 'query success',
      data: output.data,
    };
  } catch (error) {
    logger.error(error, method);
    return {
      status: 'fail',
      code: error.code || '100',
      message: error.user_message || 'query failed',
      data: null,
    };
  }
};

export const create_query = ({ description, query_name, input, output, resolver }) => {
  return {
    description,
    args: query_input(query_name, input),
    type: query_output(query_name, output),
    resolve: query_resolver(query_name, resolver),
  };
};

export const mutation_input = (mutation_name, fields, options = {}) => {
  const input_params = new GraphQLInputObjectType({
    name: `${mutation_name}_input`,
    description: `input for ${mutation_name} mutation`,
    fields,
  });
  const input_type = options.empty_allowed ? input_params : new GraphQLNonNull(input_params);
  return { input: { type: input_type } };
};

export const mutation_output = (mutation_name, fields) => {
  const output = new GraphQLObjectType({
    name: `${mutation_name}_output`,
    description: `output of ${mutation_name} mutation`,
    fields: {
      status: {
        type: GraphQLString,
        description: 'status of mutation',
      },
      code: {
        type: GraphQLString,
        description: 'shareable code of mutation',
      },
      message: {
        type: GraphQLString,
        description: 'message explaining the status of mutation',
      },
      data: new GraphQLObjectType(fields),
    },
  });
  return output;
};

export const mutation_resolver = (mutation_name, resolver_function) => async (root, args, request) => {
  const logger = request._logger.child({ method: mutation_name });
  const method = `mutation:${mutation_name}`;
  try {
    const params = {
      logger,
      request_id: request._request_id,
      input: args.input || {},
      root,
      method,
    };
    logger.info(params.input, 'input');
    const output = await resolver_function(params);
    if (!output || !output.data) throw new Error('no data returned by mutation');

    return {
      status: output.status || 'pass',
      code: output.code || '1',
      message: output.user_message || 'mutation success',
      data: output.data,
    };
  } catch (error) {
    logger.error(error, method);
    return {
      status: 'fail',
      code: error.code || '100',
      message: error.user_message || 'mutation failed',
      data: null,
    };
  }
};

export const create_mutation = ({ description, mutation_name, input, output, resolver }) => {
  return {
    description,
    args: mutation_input(mutation_name, input),
    type: mutation_output(mutation_name, output),
    resolve: mutation_resolver(mutation_name, resolver),
  };
};
