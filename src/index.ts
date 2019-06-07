import Toast from '@/components/toast';
// import Loader from '@/components/loader';
const install = function (Vue: any) {
    // if (install.installed) return;
    // Vue.component(Loader.name, Loader);
    Vue.prototype.$toast = Toast;
};
if (typeof this !== 'undefined' && this.Vue) {
    install(this.Vue);
}

export default {
    install
}

export {
    Toast
}
