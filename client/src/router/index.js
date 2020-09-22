import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
    {
        path: '/',
        name: 'Hero',
        component: () => import('../components/pages/Hero.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            requiresAuth: true,
        },
        component: () => import('../components/pages/Home.vue'),
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () => import('../components/Logout.vue'),
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('../components/pages/SignUp.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store.state.isSignedIn) {
            next({ path: '/' });
        } else {
            next(); // go to wherever I'm going
        }
    } else {
        next(); // does not require auth, make sure to always call next()!
    }
});

export default router;
