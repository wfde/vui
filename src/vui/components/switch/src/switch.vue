<template>
    <input
            ref="switch"
            :id="id"
            :name="name"
            :disabled="disabled"
            v-model="activeValue"
            :class="setClassName()"
            @change="handleChange"
            type='checkbox'/>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class VSwitch extends Vue {
        // 选择
        activeValue: boolean = false;

        // switch id
        @Prop({
            type: String,
            default: 'default'
        })
        id: string | undefined;

        // switch name
        @Prop({
            type: String,
            default: 'default'
        })
        name: string | undefined;

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
            default: 'primary'
        })
        bgcolor: string | undefined;

        // 设置类名字
        setClassName() {
            return `v-switch v-switch--${this.size} v-switch-bgcolor--${this.bgcolor}`;
        }

        // 处理切换switch状态
        handleChange() {
            this.$emit('change', this.activeValue);
        }
    }
</script>
