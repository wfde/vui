<template>
    <input
            ref="switch"
            :id="id"
            :disabled="disabled"
            :class="setClassName()"
            v-model="checked"
            @change="handleChange"
            type='checkbox'/>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class VSwitch extends Vue {
        checked: boolean = false;

        @Prop({
            type: String,
            default: 'default'
        })
        id: string | undefined;

        // 是否禁用
        @Prop({
            type: Boolean,
            default: false
        })
        disabled: boolean | undefined;

        // 是否禁用
        @Prop({
            type: String,
            default: 'middle'
        })
        size: string | undefined;

        // 切换switch高亮颜色
        @Prop({
            type: String,
            default: ''
        })
        bgcolor: string | undefined;

        // 设置类名字
        setClassName() {
            return this.bgcolor
                ? `v-switch v-switch--${this.size} v-switch-bgcolor--${this.bgcolor}`
                : `v-switch v-switch--${this.size}`;
        }

        // 处理切换switch状态
        handleChange() {
            this.$emit('change', this.checked);
        }
    }
</script>
