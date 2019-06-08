<style lang="scss">
   .toast{
        position: fixed;
        padding: 10px;
        top:10%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        border-radius: 5px;
        background: rgba(0,0,0,.7);
        color: #fff;
        box-sizing: border-box;
        text-align: center;
        z-index: 99999;
        -webkit-transition: opacity .3s linear;
        transition: opacity .3s linear;
        &.toast-top{
            top:10%;
        }
        &.toast-middle{
            top:50%;
        }
        &.toast-bottom{
            bottom:5%;
        }

    }
</style>

<template>

  <div class="toast " :class="customClass" v-show="visible">
        {{message}}
  </div>

</template>

<script lang="ts">
   import {Component, Prop, Vue} from 'vue-property-decorator';

   @Component
   export default class Toast extends Vue {
       name: string = 'toast';
       @Prop(String)
       message: string | undefined;

       @Prop({
           type: String,
           default: 'middle'
       })
       position: string | undefined;

       @Prop({
           type: Boolean,
           default: true
       })
       visible: boolean | undefined;

       customClass(){
           const classes = [];
           if (this.position) {
               classes.push('toast-' + this.position);
           }
       }

   }

</script>
