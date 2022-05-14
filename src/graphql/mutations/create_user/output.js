import { user } from '../../entities/index.js';

export const output = {
  user: {
    type: user,
    description: 'user object returned as the result of the mutation',
    resolve: (payload) => payload.user,
  },
};
