import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Feed from './components/Feed';
import ProductCreate from './components/product/Create';
import ProductUpdate from './components/product/Edit';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/login",
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/feed",
      component: Feed,
      meta: {
        forAuth: true
      }
    },
    {
      path: "/products/create",
      component: ProductCreate,
      meta: {
        forAuth: true
      }
    },
    {
      path: "/products/:product/edit",
      component: ProductUpdate,
      meta: {
        forAuth: true
      }
    },
  ],
  linkActiveClass: 'active',
  mode :'history'
});

export default router;