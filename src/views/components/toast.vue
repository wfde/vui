<template>
    <div class="toast-page">
        <h1>{{this.$route.meta.title}}</h1>
        <div>
            <h3>成功</h3>
            <a href="javascript:;" @click="openToast('top','success','恭喜你，这是一条成功消息')">上</a>
            <a href="javascript:;" @click="openToast('middle','success','恭喜你，这是一条成功消息')">中</a>
            <a href="javascript:;" @click="openToast('bottom','success','恭喜你，这是一条成功消息')">下</a>
        </div>
        <div>
            <h3>错误</h3>
            <a href="javascript:;" @click="openToast('top','error','抱歉，这是一条错误消息')">上</a>
            <a href="javascript:;" @click="openToast('middle','error','抱歉，这是一条错误消息')">中</a>
            <a href="javascript:;" @click="openToast('bottom','error','抱歉，这是一条错误消息')">下</a>
        </div>
        <div>
            <h3>警告</h3>
            <a href="javascript:;" @click="openToast('top','warning','提示，这是一条警告消息')">上</a>
            <a href="javascript:;" @click="openToast('middle','warning','提示，这是一条警告消息')">中</a>
            <a href="javascript:;" @click="openToast('bottom','warning','提示，这是一条警告消息')">下</a>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Toast extends Vue {

        openToast(name: string, ty: string, msg: string) {
            this.$toast({
                message: msg,
                position: name,
                type: ty
            });
        }

    }

</script>
