import Vue from 'vue';
import App from '@/App.vue';
import Router from 'vue-router';
import store from '@/store';
Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/index.vue'),
            meta: {title: '首页'}
        }
    ]
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
