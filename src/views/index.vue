<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="基于Vue.js开发的UI库 - Vui"/>

        <div class="sidebar">
            <ul class="sidebar-list">
                <li class="sidebar-item" v-for="(item, index) in routes" :key="index">
                    <router-link :to="{name:item.name}">
                        {{item.meta.title}}
                    </router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script lang="ts">
    import HelloWorld from './HelloWorld.vue';
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {
            HelloWorld
        }
    })
    export default class Home extends Vue {
        routes: number[] | undefined;

        created() {
            this.routes = (this.$router as any).options.routes;
        }

    }

</script>
<style lang="scss" scoped>
    .sidebar {
        .sidebar-list {
            list-style: none;
            .sidebar-item {
                margin-bottom: 10px;
            }
        }
    }
</style>
