<template>
    <div class="toast-page">
        <h1>{{this.$route.meta.title}}</h1>

        <div>
            <a href="javascript:;" @click="openLoading('测试')">loading</a>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Loading extends Vue {

        openLoading(tit: string) {
            let loading = this.$loading({
                title: tit
            });

            setTimeout(() => {
                loading.hide();
            }, 3000);
        }

    }

</script>
