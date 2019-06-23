<template>
    <div :class="{
        'v-input': true,
        'clearable': clearable === true
    }">
        <input class="v-input-inner"
               :type="type"
               :placeholder="placeholder"
               :disabled="disabled"
               v-model="value"
               @input="inputHandle">
        <span v-if="clearable" class="v-input-clearable" @click="clearInputValue"></span>
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

<style scoped lang="scss">
    .v-input{
        display: inline-block;
        width: 200px;
        position: relative;
        .v-input-inner{
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            outline: none;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            width: 100%;
            &:focus{
                outline: none;
                border-color: #409eff;
            }
            &:disabled{
                background: #f5f5f5;
                cursor: not-allowed;
            }
        }
        .v-input-clearable{
            position: absolute;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            &:hover{
                &::after,&::before{
                    background: #000;
                }
            }
            &::after,&::before{
                content: '';
                display: block;
                background: #ccc;
                width: 1px;
                height: 10px;
                position: absolute;
                top: 1px;
                left: 8px;
            }
            &::after{
                transform: rotate(45deg);
            }
            &::before{
                transform: rotate(-45deg);
            }
        }
    }
    .clearable{
        .v-input-inner{
            padding-right: 24px;
        }
    }
</style>
