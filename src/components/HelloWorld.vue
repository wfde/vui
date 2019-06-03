<template>
    <div class="hello">
        <h1>{{ msg }} </h1>
        <p>{{ str }}</p>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue {
        str = '';
        name = 'hwg';
        @Prop() private msg!: string;

        created() {
            this.sayHello(this.name);
        }

        sayHello(name: string) {
            this.str = '您好,' + name;
        }
    }
</script>

<style lang="scss" scoped>
    h3 {
        margin: 40px 0 0;
    }
</style>
