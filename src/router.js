import Vue from "vue";
import Router from "vue-router";
import Overview from "./components/Overview.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "overview",
      component: Overview
    },
    {
      path: "/sander",
      name: "sander",
      component: () =>
        import("./components/Sander.vue")
    },
    {
      path: "/nick",
      name: "nick",
      component: () =>
          import("./components/Nick.vue")
    },
    {
      path: "/max",
      name: "max",
      component: () =>
          import("./components/Max.vue")
    },
    {
      path: "/rosanne",
      name: "rosanne",
      component: () =>
          import("./components/Rosanne.vue")
    },
    {
      path: "/zillah",
      name: "zillah",
      component: () =>
          import("./components/Zillah.vue")
    },
    {
      path: "/timo",
      name: "timo",
      component: () =>
          import("./components/Timo.vue")
    },
    {
      path: "/cms",
      name: "cms",
      component: () =>
          import("./components/Cms.vue")
    },
    {
      path: "/cms-detail",
      name: "cms-detail",
      component: () =>
          import("./components/CmsDetail.vue")
    }
  ]
});
