<template>
    <div class="label-page">
        <h1>{{this.$route.meta.title}}</h1>

        <div class="btns">
            <v-label>默认</v-label>
            <v-label type="primary">主要</v-label>
            <v-label type="success">成功</v-label>
            <v-label type="warning">警告</v-label>
            <v-label type="danger">危险</v-label>
            <v-label type="info">信息</v-label>
        </div>

        <div class="btns">
            <v-label border>默认</v-label>
            <v-label type="primary" border>主要</v-label>
            <v-label type="success" border>成功</v-label>
            <v-label type="warning" border>警告</v-label>
            <v-label type="danger" border>危险</v-label>
            <v-label type="info" border>信息</v-label>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Label extends Vue {


    }

</script>
<style lang="scss" scoped="">
    .label-page{
        .btns{
            span{
                margin: 5px;
            }
        }
    }
</style>

