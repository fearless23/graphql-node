export const get_user = async (root, args, context) => {
  const method = get_user.name;
  const logger = context._logger.child({ method });
  logger.info(args, 'args');

  const users = [
    { user_id: '213', name: 'John', email: 'ss@gmail.com' }
  ];
  return {
    users,
    count: users.length,
  }
};
