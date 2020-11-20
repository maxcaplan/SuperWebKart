import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

// Home Menu
import Main from "../views/HomeMenu/Main.vue";
import Play from "../views/HomeMenu/Play.vue";
import Host from "../views/HomeMenu/Host.vue";
import Join from "../views/HomeMenu/Join.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        name: "Home",
        component: Main,
      },
      {
        path: "/play",
        name: "Play",
        component: Play,
      },
      {
        path: "/host",
        name: "Host",
        component: Host,
      },
      {
        path: "/join",
        name: "Join",
        component: Join,
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
