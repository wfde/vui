import Vue from 'vue';
import toast from './toast.vue';

const ToastInstance = Vue.extend(toast);

// 定义组件传参类型
interface ToastOption {
    message: string;
    position?: string;
    duration?: number;
}

let instance: any;
let num: number = 1;
const Toast = (options: ToastOption) => {

    instance = new ToastInstance({
        data: options
    });
    instance.id = 'toast-' + num++;
    instance.visible = true;
    instance.$mount();
    document.body.appendChild(instance.$el);
    return instance;

};

export default Toast;
