<template>
  <div>
    <div class="detail back_box">
      <div class="header">
        <div class="img_cover logo">
          <img src="~/assets/images/logo.jpg" alt="">
        </div>
        <div class="company">
          <p class="company_name">{{$store.state.app.agentName}}</p>
          <p class="clients">客户数: <span>{{$store.state.app.agentCusNum}}</span></p>
        </div>
      </div>
      <div class="content">
        <div class="content_info">
          <div class="status">
            <div class="status_item item1">已签约</div>
            <div class="status_item item2">已登记</div>
          </div>
          <div class="status_text">
            <p class="text_item"><span class="key">公司名称:</span>温州千百梦鞋业有限公司</p>
            <p class="text_item"><span class="key">负责人:</span>温州千百梦鞋业有限公司</p>
            <p class="text_item"><span class="key">联系方式:</span>温州千百梦鞋业有限公司</p>
            <p class="text_item"><span class="key">登记时间:</span>温州千百梦鞋业有限公司</p>
          </div>
        </div>
        <div class="content_table">
          <p class="table_title">《客户信息登记表》</p>
          <div class="image_box">
            <div class="img_cover image">
              <img src="~/assets/images/banner-back.png" alt="">
            </div>
            <div class="img_cover image">
              <img src="~/assets/images/banner-back.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixin.scss";
.detail {
  width: 100%;
  /*height: pxToRem(174);*/
  background-image: url("~assets/images/banner-back.png");
  background-size: pxToRem(524);
  background-position: pxToRem(363) pxToRem(-250);

  .header{
    width: 100%;
    height: pxToRem(190);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
      width: pxToRem(199);
      height: pxToRem(82);
      margin-left: pxToRem(30);
    }
    .company{
      margin-right: pxToRem(40);
      text-align: right;
      .company_name{
        font-family: MicrosoftYaHei-Bold;
        @include font-dpr(32);
        line-height: pxToRem(50);
        color: #333333;
        font-weight: bold;
      }
      .clients{
        @include font-dpr(28);
        color: #24487d;
        line-height: pxToRem(40);
      }
    }
  }
  .content{
    width: pxToRem(690);
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0px 0px pxToRem(16) 0px rgba(50, 50, 50, 0.29);
    border-radius: 20px;
    padding: pxToRem(65) pxToRem(30);
    margin-bottom: pxToRem(60);
    .content_info{
      border-bottom: pxToRem(1) solid #dddddd;

      .status{
        display: flex;
        justify-content: center;

        .status_item{
          width: pxToRem(156);
          height: pxToRem(156);
          text-align: center;
          line-height: pxToRem(156);
          border-radius: 50%;
          border: 1px solid #ffffff;
          margin: pxToRem(20);
          @include font-dpr(32);

          &.item1{
            border-color: #f74444;
            color: #f74444;
          }
          &.item2{
            border-color: #00a0e9;
            color: #00a0e9;
          }
        }
      }
      .status_text{
        margin: pxToRem(60) 0;
        .text_item{
          line-height: pxToRem(40);
          @include font-dpr(28);
          color: #333;
          padding-left: pxToRem(20);

          .key{
            display: inline-block;
            width: pxToRem(120);
            color: #999999;
            margin-right: pxToRem(20);
          }
        }
      }
    }
    .content_table{
      padding-top: pxToRem(70);
      .table_title{
        @include font-dpr(28);
        color: #999999;
        text-align: center;
      }
    }
    .image_box{
      width: 100%;
      margin-top: pxToRem(40);

      .image{
        width: 100%;
        height: pxToRem(430);
        margin-bottom: pxToRem(30);
      }
    }
  }
}
</style>
