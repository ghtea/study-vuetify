const authMutations = {
  putUser(state, token, user) {
    state.user = user;
  },
  deleteUser(state) {
    state.user = null;
  },
};

export default authMutations
