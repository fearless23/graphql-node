import { get_users_input } from './get_users.input.js';
import { get_users_output } from './get_users.output.js';

// import { create_user_input } from './create_user.input.js';
// import { create_user_output } from './create_user.output.js';

export const TYPES = {
  get_users: {
    input: get_users_input,
    output: get_users_output
  },
  // create_user: {
  //   input: create_user_input,
  //   output: create_user_output
  // }
}