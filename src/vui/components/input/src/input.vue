<template>
    <div :class="{
        'v-input': true,
        'clearable': clearable === true && value
    }">
        <input class="v-input-inner"
               :type="type"
               :placeholder="placeholder"
               :disabled="disabled"
               v-model="value"
               @input="inputHandle">
        <span v-if="clearable && value" class="v-input-clearable" @click="clearInputValue"></span>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class VInput extends Vue {

        @Prop({
            type: String,
            default: 'text'
        })
        type: string | undefined;

        @Prop({
            type: String,
            default: '请输入内容'
        })
        placeholder: string | undefined;

        @Prop({
            type: Boolean,
            default: false
        })
        disabled!: boolean;

        @Prop({
            type: Boolean,
            default: false
        })
        clearable!: boolean;

        inputHandle(event: any){
            this.$emit('input', event.target.value);
        }

        // 清除value
        clearInputValue() {
            this.value = '';
            this.$emit('input', '');
        }

        value: string | number = '';

    }

</script>
