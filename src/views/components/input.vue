<template>
    <div class="input-page">
        <div>
            <v-input v-model="inputValue"></v-input>
        </div>
        <div style="margin-top: 10px">
            <v-input v-model="inputValue"  placeholder="禁止输入" disabled></v-input>
        </div>
        <div style="margin-top: 10px">
            <v-input v-model="clearableInputValue" placeholder="可清空输入" clearable></v-input>
        </div>
        <div style="margin-top: 10px">
            <v-input :maxLength="5" placeholder="限制长度5位"></v-input>
        </div>
        <div style="margin-top: 10px">
            <v-input type="textarea" :cols="21" :rows="5" placeholder="文本域输入" v-model="textareaValue" clearable></v-input>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {
        inputValue: string = '';
        clearableInputValue: string = '';
        textareaValue: string = '';

    }
</script>

<style scoped>

</style>
