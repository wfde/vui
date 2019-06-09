<template>

    <div
            class="toast "
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
        duration: number = 3000;
        visible: boolean = true;
        closed: any;
        timer: any;

        // 页面加载完
        mounted() {
            this.$nextTick(() => {
                this.startTimer();
            });
        }

        // 关闭提示
        close() {
            this.closed();
        }

        // 倒计时
        startTimer() {
            this.timer = setTimeout(() => {
                this.visible = false;
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
            if (this.position) {
                classes.push('toast-' + this.position);
            }
            return classes.join(' ');
        }

    }

</script>

<style lang="scss" scoped>
    .toast {
        position: fixed;
        padding: 10px;
        top: 10%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        border-radius: 5px;
        background: rgba(0, 0, 0, .7);
        color: #fff;
        box-sizing: border-box;
        text-align: center;
        z-index: 99999;
        -webkit-transition: opacity .3s linear;
        transition: opacity .3s linear;

        &.toast-top {
            top: 10%;
        }

        &.toast-middle {
            top: 40%;
        }

        &.toast-bottom {
            top: initial;
            bottom: 5%;
        }

    }
</style>
