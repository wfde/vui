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

const Toast = (option: ToastOption) => {

    instance = new ToastInstance({
        data: option
    });

    // instance.id = 'toast';
    instance.visible = true;
    instance.closed = () => {
        Toast.close();
    };
    instance.$mount();
    document.body.appendChild(instance.$el);
    return instance;

};

// 关闭Toast
Toast.close = () => {
    instance.visible = false;
    document.body.removeChild(instance.$el);
};

export default Toast;
