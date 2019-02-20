import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/sander",
      name: "sander",
      component: () =>
        import("./views/Sander.vue")
    },
    {
      path: "/nick",
      name: "nick",
      component: () =>
          import("./views/Nick.vue")
    },
    {
      path: "/max",
      name: "max",
      component: () =>
          import("./views/Max.vue")
    },
    {
      path: "/rosanne",
      name: "rosanne",
      component: () =>
          import("./views/Rosanne.vue")
    },
    {
      path: "/zillah",
      name: "zillah",
      component: () =>
          import("./views/Zillah.vue")
    },
    {
      path: "/timo",
      name: "timo",
      component: () =>
          import("./views/Timo.vue")
    }
  ]
});
