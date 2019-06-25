import Vue from 'vue';
import toast from './toast.vue';

const ToastInstance = Vue.extend(toast);

// 定义组件传参类型
interface ToastOption {
    message: string;
    position?: string;
    type?: string;
    duration?: number;
}

let instance: any;
const Toast = (options: ToastOption): void => {

    instance = new ToastInstance({
        data: options
    });
    instance.visible = true;
    instance.$mount();
    document.body.appendChild(instance.$el);

};

export default Toast;
