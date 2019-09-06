<template>
  <div class="login_index back_box">
    <div class="banner_logo">
      <div class="img_cover image">
        <img src="~/assets/images/login_logo.png" alt="">
      </div>
    </div>
    <h2 class="title">
      客户管理系统
    </h2>
    <div class="login_form">
      <div class="form_item">
        <label class="form_item_content">
          <input v-model="login.name" class="form_item_inner" type="text" placeholder="请输入管理账号">
        </label>
      </div>
      <div class="form_item">
        <label class="form_item_content">
          <input v-model="login.password" class="form_item_inner" type="text" placeholder="请输入登录密码">
        </label>
      </div>
      <div class="form_item">
        <span class="button" @click="logIn">
          登录
        </span>
      </div>
    </div>
    <toast :is-show="isShow" :message="message" />
  </div>
</template>

<script>
import toast from '~/components/toast'
export default {
  name: 'Index',
  components: {
    toast
  },
  data() {
    return {
      login: {
        name: '',
        password: ''
      },
      isShow: {
        toast: false
      },
      message: ''
    }
  },
  mounted() {
  },
  methods: {
    logIn() {
      const self = this
      this.message = '登录成功'
      this.isShow.toast = true
      setTimeout(function() {
        self.$router.push({ path: '/m' })
      }, 1500)
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
  background-position: pxToRem(355) pxToRem(500);

  .banner_logo{
    width: 100%;
    margin-top: pxToRem(110);

    .image{
      width: pxToRem(212);
      height: pxToRem(340);
      margin: 0 auto;
    }
  }
  .title{
    font-family: MicrosoftYaHei-Bold;
    @include font-dpr(42);
    color: #333333;
    margin-top: pxToRem(67);
    text-align: center;
  }
  .login_form{
    width: 100%;
    padding: 0 pxToRem(100);
    margin-top: pxToRem(140);

    .form_item{
      width: 100%;
      margin-bottom: pxToRem(36);
      .form_item_content{
        width: 100%;
        .form_item_inner{
          width: 100%;
          height: pxToRem(80);
          border: 1px solid #f08247;
          outline: none;
          padding-left: pxToRem(20);
          @include font-dpr(28);
          color: #999999;
        }
      }
      .button{
        display: inline-block;
        height: pxToRem(88);
        width: 100%;
        line-height: pxToRem(88);
        text-align: center;
        border-radius: pxToRem(44);
        background-image: linear-gradient(90deg, #e940a7 0%, #f08247 100%);
        @include font-dpr(34);
        color: #ffffff;
      }
    }
  }
}
</style>
