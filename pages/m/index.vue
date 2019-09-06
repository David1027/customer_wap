<template>
  <div>
    lodlfkjl;kjl;kjl;kjlkj
    <p>opihpoihopihpoih</p>
  </div>
</template>

<script>

export default {

  data() {
    return {

    }
  },
  methods: {
    change() {
      if (this.$store.getters.language == 'zh') {
        this.$store.dispatch('setLanguage', 'en')
      } else {
        this.$store.dispatch('setLanguage', 'zh')
      }
    }
  },
  head() {
    return {
      title: '让我再看你一遍从南到北',
      meta: [
        { hid: 'description', name: 'description', content: '像是被五环路蒙住的双眼' }
      ],
      script: [
        { charset: 'utf-8', src: '../../static/rem.js' }
      ]
    }
  }
}
</script>

<style>
  :root{
    --bili: 0.027rem;
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: calc(var(--bili) * 100);
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
