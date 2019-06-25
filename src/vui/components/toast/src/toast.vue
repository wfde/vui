<template>

    <div
            class="v-toast"
            :class="customClass"
            v-show="visible"
            @mouseenter="clearTimer"
            @mouseleave="startTimer"
    >
        {{message}}
    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Toast extends Vue {
        message: string = '';
        position: string = 'middle';
        type: string = 'info';
        duration: number = 1500;
        visible: boolean = true;
        closed: any;
        timer: any;

        // 页面加载完
        mounted() {
            this.startTimer();
        }

        // 关闭提示
        close() {
            this.visible = false;
            document.body.removeChild(this.$el);
        }

        // 倒计时
        startTimer() {
            this.timer = setTimeout(() => {
                this.close();
            }, this.duration);
        }

        // 停止倒计时
        clearTimer() {
            clearTimeout(this.timer);
        }

        // 自定义class
        get customClass() {
            const classes = [];
            if (this.type) {
                classes.push('v-toast-' + this.type);
            }
            if (this.position) {
                classes.push('v-toast-' + this.position);
            }
            return classes.join(' ');
        }

    }

</script>