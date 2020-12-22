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
    // {
    //     path: "/gallerie",
    //     name: "Gallerie",
    //     component: () => import("../components/Gallerie.vue"),
    // },
    // {
    //     path: "/about",
    //     name: "About",
    //     component: () => import("../components/About.vue"),
    // },
    // {
    //     path: "/contact",
    //     name: "Contact",
    //     component: () => import("../components/Footer.vue"),
    // },
];

const router = new VueRouter({
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash,
                offset: { x: 0, y: 80 },
                behavior: 'smooth'
            }
        } else {
            return { x: 0, y: 0 }
        }
    },
});

export default router;
