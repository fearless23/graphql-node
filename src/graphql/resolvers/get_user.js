// fake DB
const all_users = [
  { user_id: '1', first_name: 'John', email: 'john@gmail.com' },
  { user_id: '2', first_name: 'Eliot', email: 'eliot@gmail.com' },
  { user_id: '3', first_name: 'Williams', email: 'williams@gmail.com' },
];

export const get_user = async (root, args, context) => {
  const method = get_user.name;
  const logger = context._logger.child({ method });

  const params = args.params || {};
  logger.info(params, 'params');

  const user_id = params.user_id;
  const email = params.email;

  const users = all_users.filter(i => {
    let valid = false;
    if (user_id) valid = valid || i.user_id === user_id;
    if (email) valid = valid || i.email === email;
    return valid;
  });
  return {
    users,
    count: users.length,
  }
};
