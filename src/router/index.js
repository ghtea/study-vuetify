import Vue from "vue";
import VueRouter from "vue-router";

import UserSignIn from "../components/user/SignIn";



Vue.use(VueRouter);

const routes = [

    {
        path: '/',
        name: '',
        components: {
            //menu: Menus,
            //content: Main,
        }
    },

    {
        path: '/user/sign-in',
        name: 'userSignIn',
        components: {
            // menu: Menus,
            content: UserSignIn,
        }
    },

]

const router = new VueRouter({
    mode: "history",
    routes
});


export default router;