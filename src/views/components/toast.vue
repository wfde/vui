<template>
  <div class="toast-page">
    <h1>{{this.$route.meta.title}}</h1>
    <a href="javascript:;" @click="openToast('top')">top</a>
    <a href="javascript:;" @click="openToast('middle')">middle</a>
    <a href="javascript:;" @click="openToast('bottom')">bottom</a>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Toast extends Vue {

    openToast(name: string){
        this.$toast({
            message: name,
            position: name
        });
    }

  }

</script>
