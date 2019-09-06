<template>
  <div>
    <div class="main">
      <nuxt />
    </div>
  </div>
</template>

<script>
import rem from '~/assets/js/rem'

export default {
  data() {
    return {

    }
  },
  mounted() {
    rem()
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "~/assets/css/_mixin.scss";
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.img_cover{
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.img_contain{
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}
.back_box{
  background-size: cover;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
}
/* 两行省略号 */
.ellipsis_2{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/* 3行省略号 */
.ellipsis_3{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
