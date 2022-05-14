export const create_user = async (root, args, request) => {
  const method = create_user.name;
  const logger = request._logger.child({ method });

  const { user, client_id } = args.params || {};
  logger.info({ user, client_id }, 'params');

  return {
    status: client_id ? `requested from ${client_id}` : 'created',
    code: '100',
    user,
  };
};
