<template>
  <div class="login_index back_box">
    <div class="banner_logo">
      <div class="img_cover image">
        <img src="~/assets/images/login_logo.png" alt />
      </div>
    </div>
    <div class="msg-back" v-if="$route.query.type == 1">
      <img src="~/assets/images/error.png" alt />
      <p>
        你不是管理用户,没有权限登录
        <br />具体事项请联系平台
      </p>
    </div>
    <div class="msg-back" v-else>
      <img src="~/assets/images/error.png" alt />
      <p>
        你还没有注册
        <br />请先去注册
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixin.scss";
.login_index {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("~assets/images/banner-back.png");
  background-size: pxToRem(827) pxToRem(882);
  background-position: pxToRem(355) pxToRem(500);

  .banner_logo {
    width: 100%;
    margin-top: pxToRem(180);

    .image {
      width: pxToRem(260);
      margin: 0 auto;
    }
  }
  .msg-back {
    width: pxToRem(540);
    height: pxToRem(300);
    margin: 0 auto;
    margin-top: pxToRem(100);
    background-color: white;
    text-align: center;
    @include font-dpr(32);
    border-radius: pxToRem(20);
    box-shadow: 0px 0px pxToRem(10) 0 #00000077;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      margin-top: pxToRem(20);
      line-height: pxToRem(48);
    }
  }
}
</style>
