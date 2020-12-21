import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/admin",
        name: "Admin",
        component: () => import("../views/Admin.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../components/Footer.vue"),
  },
];

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0, behavior: 'smooth' };
    },
});

export default router;
