import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/index.vue'),
            meta: {title: '首页'}
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/about.vue'),
            meta: {title: '关于我们'}

        }
    ]
});
