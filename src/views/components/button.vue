<template>
    <div class="button-page">
        <h1>{{this.$route.meta.title}}</h1>

        <div class="btns">
            <v-button>默认</v-button>
            <v-button type="primary">主要</v-button>
            <v-button type="success">成功</v-button>
            <v-button type="warning">警告</v-button>
            <v-button type="danger">危险</v-button>
            <v-button type="info">信息</v-button>
        </div>

        <div class="btns">
            <v-button border>默认</v-button>
            <v-button type="primary" border>主要</v-button>
            <v-button type="success" border>成功</v-button>
            <v-button type="warning" border>警告</v-button>
            <v-button type="danger" border>危险</v-button>
            <v-button type="info" border>信息</v-button>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {


    }

</script>
<style lang="scss" scoped="">
    .button-page{
        .btns{
            button{
                margin: 5px;
            }
        }
    }
</style>

