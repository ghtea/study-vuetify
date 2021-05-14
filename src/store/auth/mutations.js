const authMutations = {
  logInSuccess(state, token, user) {
    state.user = user;
  },
  logInFailure(state) {
    state.user = null;
  },
  logOut(state) {
    state.user = null;
  },
  signUpSuccess(state, token, user) {
    state.user = user;
  },
  signUpFailure(state) {
    state.user = null;
  }
};

export default authMutations
