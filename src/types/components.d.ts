
import Vue from 'vue';
declare module 'vue/types/vue' {
    interface Vue {
        $toast: any;
        $loading: any;
    }
}
