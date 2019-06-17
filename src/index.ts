import Button from '@/components/button';
import Toast from '@/components/toast';
// import Loader from '@/components/loader';

// 定义返回值类型
const install = (Vue: any) => {

    Vue.component(Button.name, Button);
    Vue.prototype.$toast = Toast;

};

if (typeof (window as any) !== 'undefined' && (window as any).Vue) {
    install((window as any).Vue);
}

export default {
    install
};

export {
    Toast
};
