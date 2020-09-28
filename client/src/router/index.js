import { createRouter, createWebHistory } from 'vue-router';
// import _ from 'lodash';
// import store from '../store';

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

// router.beforeEach((to, from, next) => {});

export default router;
