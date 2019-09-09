<template>
  <div class="home">
    <div class="header back_box">
      <div class="img_cover logo">
        <img src="~/assets/images/logo.jpg" alt="">
      </div>
    </div>
    <div class="header_nav">
      <div class="nav_item" @click="navShow = 0">
        <p class="number">15</p>
        <p class="nav_name">中介公司</p>
        <span class="nav_wire" :class="navShow === 0? 'item1' : ''"></span>
      </div>
      <div class="nav_item" @click="navShow = 1">
        <p class="number">15</p>
        <p class="nav_name">客户数</p>
        <span class="nav_wire" :class="navShow === 1? 'item2' : ''"></span>
      </div>
    </div>
    <agency-list v-show="navShow === 0"></agency-list>
    <client-list v-show="navShow === 1"></client-list>
  </div>
</template>

<script>
import AgencyList from '~/components/agency-list'
import ClientList from '~/components/client-list'
export default {
  components: {
    AgencyList,
    ClientList
  },
  data() {
    return {
      navShow: 0
    }
  },
  methods: {

  }
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
