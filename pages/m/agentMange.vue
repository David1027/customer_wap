<template>
  <!-- 中介管理 -->
  <div id="agentMange">
    <img src="~/assets/images/logo.jpg" class="logo" />
    <h2 class="agent-name">{{$store.state.app.agentName}}</h2>
    <div class="agent-msg">
      <p class="agent-customer">客户数：{{$store.state.app.agentCusNum}}</p>
      <button @click="$router.push({path:'/m/addCustome',query:$route.query})">添加客户</button>
    </div>
    <div class="bottom-con">
      <ClientList :client-list="clientList"></ClientList>
    </div>
  </div>
</template>

<script>
import ClientList from "~/components/client-list";
import isReachBottom from "~/assets/js/isReachBottom";
export default {
  components: {
    ClientList
  },
  data() {
    return {
      clientList: [],
      page: 0,
      size: 10
    };
  },
  mounted() {
    this.getCustomeList();
    document.addEventListener("scroll", this.getHeight);
  },
  methods: {
    // 获取客户列表
    getCustomeList() {
      this.$axios
        .get("/api/customer/list", {
          params: {
            companyId: this.$route.query.companyId,
            page: this.page,
            size: this.size
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            if (res.data.result.items.length != 0) {
              if (!this.page) {
                this.$set(this, "clientList", res.data.result.items);
              } else {
                let data = this.clientList.concat(res.data.result.items);
                this.$set(this, "clientList", data);
              }
            }else{
              this.page --
            }
          } else {
            let msg = res.data.msg || "获取客户列表失败";
            this.showToast(msg);
          }
        });
    },
    // 添加或者修改成功
    submitSuccess() {
      this.addCustome = true;
      this.page = 0
      this.getCustomeList()
    },
    // 监听文档是否到底
    getHeight() {
      if (isReachBottom()) {
        console.log("到底了");
        this.page++;
        this.getCustomeList();
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.getHeight);
  },
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