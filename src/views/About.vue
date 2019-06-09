<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
    routes: number[] | undefined;

    created() {
      this.routes = (this.$router as any).options.routes;
      console.log(this.routes);
    }

  }

</script>
