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
          context.commit('logInSuccess', token, user);
          router.push('/');
          resolve(response)
        })
        .catch(error => {
          context.commit('logInFailure')
          localStorage.removeItem('token');
          reject(error)
        })
    })
  },

  register(context, user){
    return new Promise((resolve, reject) => {
      //context.commit('auth_request')
      axios({url: `${process.env.VUE_APP_BACKEND_URL}/auth/sign-up`, data: user, method: 'POST' })
        .then(response => {
          const token = response.data.token
          const user = response.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          context.commit('signUpSuccess', token, user);
          router.push('/');
          resolve(response)
        })
        .catch(error => {
          context.commit('signUpFailure');
          localStorage.removeItem('token');
          reject(error);
        })
    })
  },
  logOut(context){
    return new Promise((resolve, reject) => {
      context.commit('logOut')
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      resolve();
    })
  },
};

export default authActions
// https://www.digitalocean.com/community/tutorials/handling-authentication-in-vue-using-vuex
