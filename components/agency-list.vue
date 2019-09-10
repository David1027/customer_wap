<template>
  <div>
    <!-- 中介公司列表 -->
    <div class="agency_list" v-if="agencyList.length > 0">
      <div v-for="(item,index) in agencyList" :key="index" class="agency_item" @click="skip(item.id)">
        <div class="title">
          <p class="company_name">
            {{ item.companyName }}
          </p>
          <p class="contract_name">
            {{ item.createName }}
          </p>
        </div>
        <div class="status">
          <div class="status_item item1">
            登记: <span class="number">
            {{ item.registerCount }}
          </span>
          </div>
          <div class="status_item item2">
            签约: <span class="number">
            {{ item.signCount }}
          </span>
          </div>
        </div>
      </div>
    </div>
    <div class="noData" v-else>
      暂无中介公司数据...
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgencyList',
  props: {
    agencyList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
  },
  methods: {
    skip(agencyId) {
      this.$router.push({ path: '/m/agentMange', query: { companyId: agencyId }})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixin.scss";

.agency_list{
  width: pxToRem(690);
  margin: 0 auto;
  box-shadow: 0px 0px 16px 0px rgba(50, 50, 50, 0.29);
  border-radius: pxToRem(20);
  padding: pxToRem(10) 0;
  margin-bottom: pxToRem(60);

  .agency_item{
    height: pxToRem(165);
    padding: pxToRem(30) 0;
    margin: 0 pxToRem(30);
    border-bottom: pxToRem(1) solid #dddddd;
    display: flex;
    flex-wrap: wrap;
    align-content: space-evenly;

    &:last-of-type{
      border-bottom: pxToRem(1) solid rgba(221, 221, 221, 0);
    }

    .title{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .company_name{
        @include font-dpr(30);
        color: #333333;
        line-height: pxToRem(40);
      }
      .contract_name{
        @include font-dpr(24);
        color: #999999;
      }
    }
    .status{
      width: 100%;
      display: flex;
      justify-content: flex-start;

      .status_item{
        @include font-dpr(24);
        color: #666666;
        margin-right: pxToRem(40);
        .number{
          margin-left: pxToRem(10);
        }

        &.item1{
          .number{
            color: #008fd7;
          }
        }
        &.item2{
          .number{
            color: #e62129;
          }
        }
      }
    }
  }
}
</style>
