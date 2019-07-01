<template>

    <span
            class="v-label"
            :class="[
                type ? 'v-label-' +type : '',
                border ? 'is-border' : '',
            ]"
    >
        <slot></slot>
    </span>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class VLabel extends Vue {

        @Prop({
            type: String,
            default: 'default'
        })
        type: string | undefined;

        @Prop({
            type: Boolean,
            default: false
        })
        border: boolean | undefined;

    }

</script>
<style lang="scss">

</style>
