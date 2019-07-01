import Button from './components/button';
import Label from './components/label';
import Toast from './components/toast';
import Switch from './components/switch';
import Input from './components/input';
// import Loader from '@/components/loader';

// 定义返回值类型
const install = (Vue: any) => {

    Vue.component(Button.name, Button);
    Vue.component(Label.name, Label);
    Vue.component(Switch.name, Switch);
    Vue.component(Input.name, Input);
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
