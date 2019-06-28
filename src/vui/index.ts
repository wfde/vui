import Button from './components/button';
import Toast from './components/toast';
import Switch from './components/switch';
import Input from './components/input';
import Loading from './components/loading';

// 定义返回值类型
const install = (Vue: any) => {

    Vue.component(Button.name, Button);
    Vue.component(Switch.name, Switch);
    Vue.component(Input.name, Input);
    Vue.prototype.$toast = Toast;
    Vue.prototype.$loading = Loading;

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
