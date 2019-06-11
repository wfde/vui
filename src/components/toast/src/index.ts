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
let instanceArr: number[] = [];
let num: number = 1;
const Toast = (options: ToastOption) => {

    instance = new ToastInstance({
        data: options
    });

    instance.id = 'toast-' + num++;
    instance.visible = true;
    instance.closed = () => {
        Toast.close(instance.id);
    };
    instance.$mount();
    instanceArr.push(instance);
    document.body.appendChild(instance.$el);
    return instance;

};

// 关闭Toast
Toast.close = (id) => {
    for(let i = 0; i <= instanceArr.length; i++ ){
        if(id == instanceArr[i].id){
            instance[i].visible = false;
            document.body.removeChild(instance[i].$el);
        }
    }
    // instance.visible = false;
    console.log(instance, 'instance');
    // document.body.removeChild(instance.$el);
};

export default Toast;
