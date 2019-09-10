<template>
  <!-- 中介 -- 添加客户 -->
  <div id="agentMange">
    <img src="~/assets/images/logo.jpg" class="logo" />
    <h2 class="agent-name">{{$store.state.app.agentName}}</h2>
    <div class="agent-msg">
      <p class="agent-customer">客户数：{{$store.state.app.agentCusNum}}</p>
      <p class="agent-contact">
        联系方式：
        <span>{{$store.state.app.agentPhone}}</span>
      </p>
    </div>
    <div class="bottom-con">
      <companyForm @sendSuccess="submitSuccess" :isChange="$route.query.id ? true : false"></companyForm>
    </div>
  </div>
</template>

<script>
import companyForm from "~/components/companyForm";
export default {
  components: {
    companyForm
  },
  data() {
    return {};
  },
  mounted() {

  },
  methods: {
    // 添加或者修改成功
    submitSuccess() {
      this.$router.push({
        path: "/m/agentMange",
        query: this.$route.query
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixin.scss";
#agentMange {
  background-repeat: no-repeat;
  background-size: pxToRem(524);
  background-image: url("../../assets/images/banner-back.png");
  background-position: pxToRem(386) pxToRem(-238);
  padding: 0 0 pxToRem(60);
  .logo {
    width: pxToRem(200);
    padding: pxToRem(48) pxToRem(0) pxToRem(69) pxToRem(35);
  }
  .agent-name {
    @include font-dpr(32);
    color: #333333;
    padding: pxToRem(0) pxToRem(0) pxToRem(12) pxToRem(45);
  }
  .agent-msg {
    height: pxToRem(92);
    padding: pxToRem(0) pxToRem(42) pxToRem(50) pxToRem(45);
    border-bottom: 1px solid#d2d2d2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .agent-customer {
      @include font-dpr(28);
      color: #24487d;
    }
    button {
      width: pxToRem(183);
      height: pxToRem(64);
      background-image: linear-gradient(90deg, #e940a7 0%, #f08247 100%),
        linear-gradient(#f08247, #f08247);
      border-radius: pxToRem(32);
      @include font-dpr(30);
      color: #ffffff;
    }
    .agent-contact {
      @include font-dpr(28);
      color: #999999;
      span {
        color: #333333;
        margin-left: 5px;
      }
    }
  }
  .bottom-con {
    padding: pxToRem(40) pxToRem(30) pxToRem(0);
    > div {
      width: 100%;
    }
    .no-customer {
      height: pxToRem(708);
      @include font-dpr(28);
      color: #666666;
    }
  }
}
</style>