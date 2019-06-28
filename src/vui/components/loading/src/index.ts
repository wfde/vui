import Vue from 'vue';
import loading from './loading.vue';

const LoadingInstance = Vue.extend(loading);

// 定义组件传参类型
interface LoadingOption {
    title?: string;
    background?: string;
}

let instance: any;
let instanceArr: any = [];
const Loading = (options: LoadingOption): object => {
    Loading.hide();
    instance = new LoadingInstance({
        data: options
    });
    instance.visible = true;
    instance.hide = () => {
        Loading.hide();
    };
    instance.$mount();
    instanceArr.push(instance);
    document.body.appendChild(instance.$el);
    return instance;
};

// 隐藏loading
Loading.hide = () => {
    for (let item of instanceArr) {
        item.visible = false;
        document.body.removeChild(item.$el);
    }
    instanceArr = [];
};

export default Loading;
