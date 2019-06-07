<template>
    <div class="hello">
        <h1>{{ msg }} </h1>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue {
        @Prop() private msg!: string;

    }
</script>

<style lang="scss" scoped>
    h3 {
        margin: 40px 0 0;
    }
</style>
