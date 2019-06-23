<template>
    <div class="v-input">
        <input class="v-input-inner"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled">
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
    }
</style>
