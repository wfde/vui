<template>
    <div class="hello">
        <h1>{{ msg }} {{num}}</h1>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue {
        private num = 4;
        @Prop() private msg!: string;

        private created() {
            this.calculation(6);
        }

        private calculation(num: number) {
            this.num = num * 4;
        }
    }
</script>

<style lang="scss" scoped>
    h3 {
        margin: 40px 0 0;
    }
</style>
