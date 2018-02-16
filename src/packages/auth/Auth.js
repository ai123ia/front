export default function (Vue) {

  let authenticatedUser = {};

  Vue.auth = {
    //set token
    //destroy token

    setToken(token, expiration) {
      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expiration);
    },

    getToken() {
      let token = localStorage.getItem('token');
      let expiration = localStorage.getItem('expiration');

      if (!token && !expiration) {
        return null
      }

      if (Date.now() > parseInt(expiration)) {
        this.destroyToken();
        return null;
      }

      return token;
    },

    destroyToken() {
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
    },

    isAuthenticated() {
      return this.getToken()
    },

    setAuthenticatedUser(data) {
      authenticatedUser = data;
    },

    getAuthenticatedUser() {
      return authenticatedUser;
    }
  };

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get() {
        return Vue.auth
      }
    }
  })
}