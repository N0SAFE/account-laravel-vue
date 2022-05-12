import { createWebHistory, createRouter } from "vue-router";
import Dashboard from '../view/DashboardView.vue';
import Login from '../view/LoginView.vue';
import Register from '../view/RegisterView.vue';
import $404 from "../view/404View.vue"

const routes = [{
        path: "/",
        name: "Home",
        component: Dashboard,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "About",
        component: Register,
    },
    {
        path: "/api/:pathMatch(.*)*",
        name: "api missed",
        component: $404
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not found",
        component: $404
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach(async(to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user token');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})

export default router;