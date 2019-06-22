<template>
    <section class="switch">
        <input class='switch-component' type='checkbox'/>
    </section>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class VSwitch extends Vue {

        @Prop({
            type: String,
            default: 'default'
        })
        type: string | undefined;
    }

</script>
<style lang="scss" scoped>
    // switch组件
    .switch-component {
        position: relative;
        width: 60px;
        height: 30px;
        background-color: #dadada;
        border-radius: 30px;
        border: none;
        outline: none;
        -webkit-appearance: none;
        transition: all .2s ease;
    }

    // 按钮
    .switch-component::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: #fff;
        border-radius: 50%;
        transition: all .2s ease;
    }

    .switch-component:checked {
        background-color: green;
    }

    .switch-component:checked::after {
        left: 50%;
    }
</style>
