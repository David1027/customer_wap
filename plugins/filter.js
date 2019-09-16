// 全局过滤器
import Vue from 'vue'
// import {
//   state
// } from '~/store/app.js'

export default ({ store }) => {
  Vue.filter('imgUrl', function (val) {
    return store.state.app.imageBaseUrl + val
  })
}