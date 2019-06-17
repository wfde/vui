<template>

    <button
            class="btn"
            :class="[
                type ? 'btn-' +type : '',
                border ? 'is-border' : ''
            ]"
    >
        <slot></slot>
    </button>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class VButton extends Vue {

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
