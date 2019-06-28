import Vue from 'vue';
import loading from './loading.vue';

const LoadingInstance = Vue.extend(loading);

// 定义组件传参类型
interface LoadingOption {
    title?: string;
    background?: string;
}

let instance: any;
const Loading = (options: LoadingOption): void => {
    instance = new LoadingInstance({
        data: options
    });
    instance.visible = true;
    instance.hide = () => {
        Loading.hide();
    };
    instance.$mount();
    document.body.appendChild(instance.$el);
    return instance;
};

// 隐藏loading
Loading.hide = () => {
    instance.visible = false;
    document.body.removeChild(instance.$el);
};

export default Loading;
