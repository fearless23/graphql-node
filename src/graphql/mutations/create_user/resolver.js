export const resolver = async ({ logger, input }) => {
  const { user, client_id } = input;

  return {
    status: client_id ? `requested from ${client_id}` : 'created',
    code: '100',
    data: {
      user,
    },
  };
};
