import Vue from 'vue';
import toast from './toast.vue';

// 定义返回值类型
interface GetAnInstanceFun {
    message: string;
    position: string;

    [propName: string]: any;
}

// 定义组件传参类型
interface Option {
    message: string;
    position: string;
}

const ToastInstance = Vue.extend(toast);
const getAnInstance = (): GetAnInstanceFun => {
    return new ToastInstance({
        el: document.createElement('div')
    });
};

const Toast = (option: Option) => {

    const instance = getAnInstance();
    instance.message = option.message;
    instance.position = option.position;
    instance.visible = true;
    document.body.appendChild(instance.$el);

    // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
    Vue.nextTick(() => {
        setTimeout(() => {
            instance.visible = false;
            document.body.removeChild(instance.$el);
        }, 1500);
    });

};

export default Toast;
