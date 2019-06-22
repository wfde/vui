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
            path: '/button',
            name: 'button',
            component: () => import('@/views/components/button.vue'),
            meta: {title: '按钮'}
        },
        {
            path: '/toast',
            name: 'toast',
            component: () => import('@/views/components/toast.vue'),
            meta: {title: '提示框'}
        },
        {
            path: '/switch',
            name: 'switch',
            component: () => import('@/views/components/switch.vue'),
            meta: {title: '开关'}
        }
    ]
});
