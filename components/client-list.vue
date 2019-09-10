<template>
  <div>
    <!-- 客户列表 -->
    <div class="client_list" v-if="clientList.length > 0">
      <div class="client_item" v-for="(item,index) in clientList" :key="index" @click="skip(item.id)">
        <div class="content">
          <p class="company_name">
            {{ item.customerName }}
          </p>
          <p class="client_text">
            客户姓名: {{ item.customerContact }}
          </p>
          <p class="client_text">
            联系方式: {{ item.customerPhone }}
          </p>
        </div>
        <div class="status">
          <div class="status_item item1" :class="{'item-show' : item.isRegister}">已登记</div>
          <div class="status_item item2" :class="{'item-show' : item.isSign}">已签约</div>
        </div>
      </div>
    </div>
    <div class="noData" v-else>
      暂无客户数据...
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientList',
  props: {
    clientList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
  },
  methods: {
    skip(clientId) {
      this.$router.push({ path: '/m/detail', query: { clientId: clientId }})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixin.scss";

.client_list{
  width: pxToRem(690);
  margin: 0 auto;
  box-shadow: 0px 0px 16px 0px rgba(50, 50, 50, 0.29);
  border-radius: pxToRem(20);
  padding: pxToRem(10) 0;
  margin-bottom: pxToRem(60);

  .client_item{
    height: pxToRem(165);
    padding: pxToRem(30) 0;
    margin: 0 pxToRem(30);
    border-bottom: pxToRem(1) solid #dddddd;
    display: flex;
    justify-content: space-between;

    &:last-of-type{
      border-bottom: pxToRem(1) solid rgba(221, 221, 221, 0);
    }
    .content{
      width: pxToRem(440);
      height: 100%;
      .company_name{
        @include font-dpr(28);
        color: #333;
        line-height: pxToRem(46);
      }
      .client_text{
        @include font-dpr(24);
        color: #666666;
        line-height: pxToRem(30);
      }
    }
    .status{
      width: pxToRem(180);
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .status_item{
        width: pxToRem(82);
        height: pxToRem(82);
        line-height: pxToRem(82);
        text-align: center;
        @include font-dpr(20);
        border: 1px solid rgba(255, 255, 255, 0);
        border-radius: 50%;
        overflow: hidden;
        opacity: 0;
        &.item1{
          border-color: #00a0e9;
          color: #00a0e9;
        }
        &.item2{
          border-color: #ed4855;
          color: #ed4855;
        }
        &.item-show{
          opacity: 1;
        }
      }
    }
  }
}

</style>
