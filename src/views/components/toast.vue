<template>
  <div class="toast-page">
    <h1>{{this.$route.meta.title}}</h1>
    <a href="javascript:;" @click="openToast('top','提交成功')">top</a>
    <a href="javascript:;" @click="openToast('middle','提交成功')">middle</a>
    <a href="javascript:;" @click="openToast('bottom','提交成功')">bottom</a>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Toast extends Vue {

    openToast(name: string, msg: string){
        this.$toast({
            position: name,
            message: msg
        });
    }

  }

</script>
