<template>
  <div>
    <div class="main">
      <nuxt />
    </div>
  </div>
</template>

<script>
import rem from "~/assets/js/rem";

export default {
  data() {
    return {
    };
  },
  watch: {
    $route() {
      if (this.$route.query.companyId) {
        this.getAgentMsg();
      }
    }
  },
  mounted() {
    if (this.$route.query.companyId) {
      this.getAgentMsg();
    }
    rem();
  },
  methods: {
    getAgentMsg() {
      this.$store.dispatch("app/getAgentMsg", this.$route.query.companyId);
    }
  },
  head() {
    return {
      title: "客户管理系统"
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/css/_mixin.scss";

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 37.5px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1;
}
.img_cover {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.img_contain {
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}
button {
  border: none;
  &:focus {
    outline: none;
  }
}
input {
  &:focus {
    outline: none;
  }
}
.back_box {
  background-size: cover;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
}
/* 两行省略号 */
.ellipsis_2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/* 3行省略号 */
.ellipsis_3 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
// 绝对居中
.flexCC {
  display: flex;
  align-items: center;
  justify-content: center;
}

.noData {
  width: pxToRem(690);
  height: pxToRem(690);
  text-align: center;
  line-height: pxToRem(690);
  margin: 0 auto;
  box-shadow: 0px 0px 16px 0px rgba(50, 50, 50, 0.29);
  @include font-dpr(28);
  color: #666666;
  border-radius: pxToRem(20);
}
.main{
  background-color: white;
}
</style>
