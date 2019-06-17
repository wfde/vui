import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import Vui from '@/index';
import '@/styles/vui.scss';

Vue.use(Vui);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
