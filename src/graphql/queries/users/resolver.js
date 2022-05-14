// fake DB
const all_users = [
  { user_id: '1', first_name: 'John', email: 'john@gmail.com' },
  { user_id: '2', first_name: 'Eliot', email: 'eliot@gmail.com' },
  { user_id: '3', first_name: 'Williams', email: 'williams@gmail.com' },
];

export const resolver = async ({ logger, input }) => {
  const { user_id, email } = input;

  const users = all_users.filter((i) => {
    let valid = false;
    if (user_id) valid = valid || i.user_id === user_id;
    if (email) valid = valid || i.email === email;
    return valid;
  });
  const data = { users, count: users.length };

  return { data };
};
