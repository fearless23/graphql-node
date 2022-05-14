export const parse_error = (error, title = '') => {
  return {
    title,
    name: error.name || 'error',
    message: error.message,
    user_message: error.user_message,
    stack: error.stack && error.stack.split('\n').map((line, idx) => `${idx + 1}: ${line.trim()}`),
    id: error.id,
    data: error.data,
  };
};
