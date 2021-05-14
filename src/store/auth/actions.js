import router from '../../router/index';

const authActions = {
  logIn(context, user){
    return new Promise((resolve, reject) => {
      // context.commit('auth_request')
      axios({url: `${process.env.VUE_APP_BACKEND_URL}/auth/log-in`, data: user, method: 'POST' })
        .then(response => {
          const token = response.data.token
          const user = response.data.user
          localStorage.setItem('token', token);
          axios.defaults.headers.common['Authorization'] = token
          context.commit('putUser', token, user);
          router.push('/');
          resolve(response)
        })
        .catch(error => {
          context.commit('deleteUser');
          localStorage.removeItem('token');
          reject(error)
        })
    })
  },
  signUp(context, user){
    return new Promise((resolve, reject) => {
      //context.commit('auth_request')
      axios({url: `${process.env.VUE_APP_BACKEND_URL}/auth/sign-up`, data: user, method: 'POST' })
        .then(response => {
          const token = response.data.token
          const user = response.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          context.commit('putUser', token, user);
          router.push('/');
          resolve(response)
        })
        .catch(error => {
          context.commit('deleteUser');
          localStorage.removeItem('token');
          reject(error);
        })
    })
  },
  logOut(context){
    return new Promise((resolve, reject) => {
      context.commit('deleteUser');
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      resolve();
    })
  },

  async continueWithGoogle(context, googleIdToken){
    // context.commit('auth_request')
    try {
      // 구글 계정으로 회원가입하든 로그인하든 결과적으로 프론트엔드에서는 로그인
      const res = axios({url: `${process.env.VUE_APP_BACKEND_URL}/auth/continue-with-google`, data: {googleIdToken}, method: 'POST' });
      const token = response.data.token;
      const user = response.data.user;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = token
      context.commit('putUser', token, user);
      router.push('/');
    }
    catch (error){
      context.commit('deleteUser');
      localStorage.removeItem('token');
      console.debug(error);
    }
  }
};

export default authActions
// https://www.digitalocean.com/community/tutorials/handling-authentication-in-vue-using-vuex
