import Vue from "vue";
import VueRouter from "vue-router";

import DefaultLayout from "../layouts/default/Index";
import AuthLayout from "../layouts/auth/Index";

import AuthLogIn from "../views/auth/LogIn";
import AuthSignUp from "../views/auth/SignUp";

import ProductList from "../views/default/ProductList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    component: DefaultLayout,
    children: [
      {
        path: "product-list",
        name: "productList",
        component: ProductList,
      },
    ],
  },

  {
    path: "/auth",
    name: "auth",
    component: AuthLayout,
    children: [
      {
        path: "log-in",
        name: "authLogIn",
        component: AuthLogIn,
      },
      {
        path: "sign-up",
        name: "authSignUp",
        component: AuthSignUp,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
