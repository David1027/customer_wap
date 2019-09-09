<template>
  <!-- toast弹窗 父组件传值 showMsg: { toast: false }, message: "已完成" -->
  <div id="myToast" v-show="isShow.toast">
    <div class="toast_transparent" @click="isShow.toast = false"></div>
    <div class="toast-con">
      <p class="toast__content">{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 提示内容
    message: {
      type: String,
      default: ""
    },
    // 提示框显示控制
    isShow: {
      type: Object,
      default() {
        return {
          toast: false
        }
      }
    }
  },
  watch: {
    'isShow.toast'(){
      if(this.isShow.toast){
        this.setTime = setTimeout(() => {
          this.isShow.toast = false
        }, 1500);
      }else{
        clearTimeout(this.setTime)
      }
    }
  },
  data() {
    return {
      setTime: null
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixin.scss";
#myToast {
  .toast_transparent {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  }
  .toast-con {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      white-space: pre-wrap;
      max-width: pxToRem(588);
      padding: pxToRem(50) pxToRem(100);
      background-color: #000000;
      border-radius: pxToRem(30);
      opacity: 0.8;
      @include font-dpr(32);
      line-height: pxToRem(40);
      color: #ffffff;
    }
  }
}
</style>
