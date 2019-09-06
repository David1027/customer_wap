<template>
  <div class="login_index back_box">
    <div class="banner_logo">
      <div class="img_cover image">
        <img src="~/assets/images/login_logo.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixin.scss";
.login_index{
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("~assets/images/banner-back.png");
  background-size: pxToRem(827) pxToRem(882);

  .banner_logo{
    width: 100%;
    margin-top: pxToRem(100);
    .image{
      width: pxToRem(212);
      height: pxToRem(340);
      margin: 0 auto;
    }
  }
}
</style>
