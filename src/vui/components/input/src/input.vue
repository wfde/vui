<template>
    <div :class="{
        'v-input': true,
        'clearable': showClearable()
    }">
        <input class="v-input-inner"
               v-if="type !== 'textarea'"
               :type="type"
               :placeholder="placeholder"
               :disabled="disabled"
               :maxlength="maxLength"
               v-model="value"
               @input="inputHandle">
        <textarea class="v-input-inner textarea-inner"
                  v-if="type === 'textarea'"
                  v-model="value"
                  :placeholder="placeholder"
                  :cols="cols" :rows="rows"></textarea>
        <span v-if="showClearable()" class="v-input-clearable" @click="clearInputValue"></span>
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
        // textarea 默认列
        @Prop({
            type: Number,
            default: 0
        })
        cols: number | undefined;
        // textarea 默认行
        @Prop({
            type: Number,
            default: 0
        })
        rows: number | undefined;
        // 最大输入限制
        @Prop({
            type: Number,
            default: -1
        })
        maxLength: number | undefined;

        inputHandle(event: any){
            this.$emit('input', event.target.value);
        }

        showClearable() {
            return this.clearable && this.value && this.type !== 'textarea';
        }

        // 清除value
        clearInputValue() {
            this.value = '';
            this.$emit('input', '');
        }

        value: string | number = '';

    }

</script>
