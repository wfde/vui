<template>
    <div class="toast-page">
        <h1>{{this.$route.meta.title}}</h1>
        <p><a href="javascript:;" @click="openToast('top','success','恭喜你，这是一条成功消息')">成功-top</a></p>
        <p><a href="javascript:;" @click="openToast('middle','error','抱歉，这是一条错误消息')">失败-middle</a></p>
        <p><a href="javascript:;" @click="openToast('middle','warning','提示，这是一条警告消息')">警告-bottom</a></p>
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
