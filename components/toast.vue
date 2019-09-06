<template>
  <!-- toast弹窗 -->
  <div id="myToast" v-show="isShow.toast">
    <div class="toast_transparent"></div>
    <div class="toast-con">
      <p class="toast__content">{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ""
    },
    isShow: {
      type: Object,
      default: {
        toast: true
      }
    }
  },
  data() {
    return {};
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
      padding: pxToRem(50) pxToRem(100);
      background-color: #000000;
      border-radius: pxToRem(30);
      opacity: 0.8;
      @include font-dpr(32);
      line-height: pxToRem(25);
      color: #ffffff;
    }
  }
}
</style>