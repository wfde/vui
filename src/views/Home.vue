<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <HelloWorld msg="基于Vue.js开发的UI库 - Vui"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        created() {
            this.$toast({
                message: '测试成功'
            });
        }
    };
</script>
