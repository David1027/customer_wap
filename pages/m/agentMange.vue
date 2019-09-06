<template>
  <!-- 中介管理 -->
  <div id="agentMange">
    <img src="~/assets/images/logo.jpg" class="logo" />
    <h2 class="agent-name">21世纪中介公司</h2>
    <div class="agent-msg">
      <p class="agent-customer">客户数：{{agent.num}}</p>
      <button v-if="agent.num == 0">添加客户</button>
      <p class="agent-contact" v-else>
        联系方式：
        <span>13060006000</span>
      </p>
    </div>
    <div class="bottom-con">
      <div class="no-customer flexCC" v-if="false">暂无客户数据...</div>
      <div class="customer-join">
        <h3>添加客户</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agent: {
        num: 30
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixin.scss";
#agentMange {
  background-repeat: no-repeat;
  background-size: pxToRem(524);
  background-image: url("../../assets/images/banner-back.png");
  background-position: pxToRem(386) pxToRem(-238);
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
      background-color: #ffffff;
      box-shadow: 0px 0px pxToRem(16) 0px rgba(50, 50, 50, 0.29);
      border-radius: pxToRem(20);
    }
    .no-customer {
      height: pxToRem(708);
      @include font-dpr(28);
      color: #666666;
    }
    .customer-join {
      h3 {
        padding: pxToRem(60) 0 pxToRem(56);
        text-align: center;
        @include font-dpr(42);
        color: #333333;
      }
    }
  }
}
</style>