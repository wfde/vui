<template>
    <div class="input-page">
        <v-input v-model="inputValue" clearable></v-input>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {
        inputValue: string = '';

    }
</script>

<style scoped>

</style>
