import Vue from 'vue';
import toast from './toast.vue';

// 定义返回值类型
interface GetAnInstanceFun {
    message: string;
    position: string;

    [propName: string]: any;
}

// 定义组件传参类型
interface ToastOption {
    message: string;
    position?: string;
    duration?: number;
}

const ToastInstance = Vue.extend(toast);
const getAnInstance = (): GetAnInstanceFun => {
    return new ToastInstance({
        el: document.createElement('div')
    });
};

let instance: any;

const Toast = (option: ToastOption) => {

    instance = getAnInstance();
    instance.message = option.message;
    instance.position = option.position as string;
    instance.duration = option.duration as number || 1500;
    instance.visible = true;
    instance.closed = () => {
        Toast.close();
    };
    document.body.appendChild(instance.$el);
    return instance;

};

// 关闭Toast
Toast.close = () => {
    document.body.removeChild(instance.$el);
};

export default Toast;
