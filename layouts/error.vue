<template>
  <div class="container">
    <div>
      <h1 v-if="error.statusCode === 404">
        页面不存在
      </h1>
      <h1 v-else>
        应用发生错误异常
        {{ error }}
      </h1>
    </div>
    <div>
      <nuxt-link to="/">
        首 页
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
  // ,
  // layout: 'blog' // 你可以为错误页面指定自定义的布局
}
</script>
