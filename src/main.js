import Vue from 'vue'
import App from './App.vue'
import Router from './routes'
import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth'
import VeeValidate from 'vee-validate'

Vue.use(VueResource);
Vue.use(Auth);
Vue.use(VeeValidate);

Vue.http.options.root = 'http://127.0.0.1:8000';
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken();

Vue.http.interceptors.push((request, next) => {
  next(resp => {
    if (resp.status === 404){
      swal(resp.status.toString(), 'Not found', "error")
    } else if (resp.status === 500) {
      swal(resp.status.toString(), 'Server error', "error")
    }
  })
});

Router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/feed'
        })
      } else next()
    } if (to.matched.some(record => record.meta.forAuth)) {
      if ( !Vue.auth.isAuthenticated()) {
        next({
          path: '/login'
        })
      } else next()
    }
    else next()
  }
);

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
});
