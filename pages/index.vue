<template>
  <no-ssr>
    <div>
      home
    </div>
  </no-ssr>
</template>

<script>
export default {
  name: 'Index',
  mounted() {
    this.$router.push({ path: '/m' })
  }
}
</script>

<style scoped>

</style>
