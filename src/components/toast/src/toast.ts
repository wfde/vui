import Vue from 'vue';
import toast from './toast.vue';

let ToastInstance = Vue.extend(toast);

let getAnInstance = function () {
    return new ToastInstance({
        el: document.createElement('div')
    });
};

let Toast = function (option: any) {

    let instance = getAnInstance();

    instance.message = option.message;
    instance.position = option.position;
    instance.visible = true;
    document.body.appendChild(instance.$el);

    // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
    Vue.nextTick(function () {
        setTimeout(function () {
            instance.visible = false;
            document.body.removeChild(instance.$el)
        }, 1500);
    });
};

export default Toast;
