<template>
  <div class="home">
    <div class="header back_box">
      <div class="img_cover logo">
        <img src="~/assets/images/logo.jpg" alt="">
      </div>
    </div>
    <div class="header_nav">
      <div class="nav_item" @click="changeNavShow(0)">
        <p class="number">{{ agencyTotal }}</p>
        <p class="nav_name">中介公司</p>
        <span class="nav_wire" :class="navShow === 0? 'item1' : ''"></span>
      </div>
      <div class="nav_item" @click="changeNavShow(1)">
        <p class="number">{{ clientTotal }}</p>
        <p class="nav_name">客户数</p>
        <span class="nav_wire" :class="navShow === 1? 'item2' : ''"></span>
      </div>
    </div>
    <agency-list v-show="navShow === 0" :agency-list="agencyList"></agency-list>
    <client-list v-show="navShow === 1" :client-list="clientList"></client-list>
    <toast :is-show="isShow" :message="message" />
  </div>
</template>

<script>
import toast from '~/components/toast'
import AgencyList from '~/components/agency-list'
import ClientList from '~/components/client-list'
import isReachBottom from '~/assets/js/isReachBottom'
export default {
  components: {
    toast,
    AgencyList,
    ClientList
  },
  data() {
    return {
      // 页码
      agencyCurr: 0,
      clientCurr: 0,
      // 每页条数
      limit: 20,
      navShow: 0,
      agencyTotal: 0,
      agencyList: [], // 中介公司列表
      clientTotal: 0,
      clientList: [], // 客户列表
      isShow: {
        toast: false
      },
      message: ''
    }
  },
  mounted() {
    this.gainAgencyList()
    this.gainClientList()
    window.addEventListener('scroll', this.scrollBottom)
  },
  methods: {
    // 滚动条到底事件
    scrollBottom() {
      if (isReachBottom()) {
        console.log('到底')
        this.cutNavShow()
      }
    },
    // 点击切换列表
    changeNavShow(num) {
      if (this.navShow !== num) {
        this.navShow = num
      }
    },
    // 切换列表
    cutNavShow() {
      if (this.navShow === 0) {
        this.agencyCurr++
        this.gainAgencyList()
      } else if (this.navShow === 1) {
        this.clientCurr++
        this.gainClientList()
      }
    },
    // 获取中介公司列表
    gainAgencyList() {
      const self = this
      this.$axios({
        url: '/api/compang/list',
        method: 'get',
        params: {
          page: self.agencyCurr,
          size: self.limit
        }
      }).then(res => {
        if (res.data.code === 200) {
          console.log('gainAgencyList ==>', res.data)
          self.agencyTotal = res.data.result.total
          if (!res.data.result.items.length > 0) {
            self.agencyCurr--
          }
          let arrayList = self.agencyList.concat(res.data.result.items)
          self.$set(self, 'agencyList', arrayList)
        } else {
          self.message = res.data.msg
          self.isShow.toast = true
        }
      })
    },
    // 获取客户列表
    gainClientList() {
      const self = this
      this.$axios({
        url: '/api/customer/list',
        method: 'get',
        params: {
          page: self.clientCurr,
          size: self.limit
        }
      }).then(res => {
        if (res.data.code === 200) {
          self.clientTotal = res.data.result.total
          if (!res.data.result.items.length > 0) {
            self.clientCurr--
          }
          let arrayList = self.clientList.concat(res.data.result.items)
          self.$set(self, 'clientList', arrayList)
        } else {
          self.message = res.data.msg
          self.isShow.toast = true
        }
      })
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollBottom)
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixin.scss";
.home{

  .header{
    width: 100%;
    height: pxToRem(174);
    background-image: url("~assets/images/banner-back.png");
    background-size: pxToRem(524);
    background-position: pxToRem(363) pxToRem(-250);
    display: flex;
    align-items: center;
    border-bottom: solid pxToRem(1) #d2d2d2;

    .logo{
      width: pxToRem(199);
      height: pxToRem(82);
      margin-left: pxToRem(35);
    }
  }
  .header_nav{
    width: 100%;
    padding: pxToRem(70) 0;
    display: flex;
    justify-content: space-between;

    .nav_item{
      width: 50%;
      text-align: center;
      .number{
        font-family: MicrosoftYaHei-Bold;
        @include font-dpr(54);
        color: #333333;
        font-weight: bolder;
      }
      .nav_name{
        @include font-dpr(24);
        color: #999999;
        line-height: pxToRem(50);
      }
      .nav_wire{
        display: inline-block;
        width: pxToRem(78);
        height: pxToRem(14);
        border-radius: pxToRem(7);
        background-color: rgba(255, 255, 255, 0);
        &.item1{
          background-image: linear-gradient(90deg, #0ca5db 0%, #a5cc2a 100%);
        }
        &.item2{
          background-image: linear-gradient(90deg, #ef7c4f 0%, #ea479d 100%);
        }
      }
    }
  }
}
</style>
