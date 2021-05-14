import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

const authModule = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: { }
};

export default authModule;
