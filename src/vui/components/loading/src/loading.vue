<template>
    <div
            class="v-loading"
            v-show="visible"
            :style="{background:background}"
    >
        <div class="v-loading-loader">

            <div class="ball-pulse">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="v-loading-title">
                {{title}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Loading extends Vue {
        title: string = '';
        visible: boolean = true;
        background: string = '';
    }

</script>