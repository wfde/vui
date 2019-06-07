<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <HelloWorld msg="基于Vue.js开发的UI库 - Vui"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue';

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    };
</script>
