<template>
  <!-- 注册 -->
  <div id="register">
    <div class="top-title">
      <img src="~/assets/images/logo.jpg" alt />
      <h2>客户管理系统</h2>
    </div>
    <div class="register-con">
      <h3>请完善你的资料信息</h3>
      <input type="text" v-model="form.companyName" placeholder="请输入公司名称\姓名" />
      <input type="text" v-model="form.companyPhone" placeholder="请输入联系方式" />
      <button @click="submit">确定</button>
    </div>
    <toast :isShow="showMsg" :message="message"></toast>
  </div>
</template>

<script>
import toast from "~/components/toast";
export default {
  components: {
    toast
  },
  data() {
    return {
      showMsg: { toast: false },
      message: "已完成",
      form: {
        companyName: "",
        companyPhone: "",
        companyOpenid: "",
        createName: ""
      }
    };
  },
  mounted() {},
  methods: {
    submit() {
      this.form.companyOpenid = this.$route.query.Openid;
      this.form.createName = this.$route.query.SalesName;
      for (let i in this.form) {
        if (!this.testForm(i, this.form[i])) {
          return false;
        }
      }
      this.$axios.post("/api/compang/save", this.form).then(res => {
        if (res.data.code == 200) {
          this.showToast("注册成功");
          setTimeout(() => {
            this.$router.push({
              path: "/m/login/"
            });
          }, 2000);
        } else {
          let msg = res.data.msg || "注册失败";
          this.showToast(msg);
        }
      });
    },
    // 验证
    testForm(name, value) {
      let titles = {
        companyName: "公司名称\\姓名",
        companyPhone: "联系方式"
      };
      let reg = {
        companyPhone: /^1\d{10}$/
      };
      if (value == "") {
        this.showToast(titles[name] + "不能为空");
        return false;
      } else {
        if (reg[name]) {
          if (!reg[name].test(value)) {
            this.showToast(titles[name] + "错误");
            return false;
          }
        }
      }
      return true;
    },
    // 显示toast
    showToast(message) {
      this.showMsg.toast = true;
      this.message = message;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixin.scss";
#register {
  padding: 0 pxToRem(30) pxToRem(337);
  background-repeat: no-repeat;
  background-size: pxToRem(524);
  background-image: url("../../assets/images/banner-back.png");
  background-position: pxToRem(387) pxToRem(670);
  .top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: pxToRem(46) 0 pxToRem(108);
    img {
      width: pxToRem(200);
    }
    h2 {
      @include font-dpr(36);
      color: #333333;
    }
  }
  .register-con {
    width: pxToRem(690);
    background-color: #ffffff;
    border-radius: pxToRem(20);
    padding: pxToRem(84) pxToRem(70) pxToRem(90);
    box-shadow: 0px 0px 8px 2px rgba(50, 50, 50, 0.29);
    h3 {
      @include font-dpr(32);
      font-weight: 600;
      color: #333333;
      margin-bottom: pxToRem(70);
    }
    input {
      width: 100%;
      height: pxToRem(80);
      padding-left: pxToRem(36);
      background-color: #ffffff;
      border: solid pxToRem(1) #bfbfbf;
      margin-bottom: pxToRem(70);
      &:nth-child(1) {
        margin-bottom: pxToRem(50);
      }
      &:focus {
        outline: none;
      }
    }
    button {
      width: 100%;
      height: pxToRem(88);
      background-image: linear-gradient(90deg, #1ca9c8 0%, #93c73f 100%),
        linear-gradient(#f08247, #f08247);
      border-radius: pxToRem(44);
      border: none;
      @include font-dpr(34);
      color: #ffffff;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>