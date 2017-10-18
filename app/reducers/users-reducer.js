export const activeUser = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.user;

    default:
      return state;
    }
};

export const postUser = (state = [], action) => {
  switch (action.type) {
    case 'POST_NEW_USER':
      return action.user;

    default:
      return state;
    }
};
