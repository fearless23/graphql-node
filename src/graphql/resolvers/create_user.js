export const create_user = async (root, args, context) => {
  const method = get_user.name;
  const logger = context._logger.new_child({ method });

  return {
    status: 'created',
    code: '100',
    user: { user_id: '213', name: 'John', email: 'gg@gmial.cpm' }
  }
};
