// 全局过滤器
import Vue from 'vue'
import {
  state
} from '~/store/app.js'

Vue.filter('imgUrl', function(val) {
  return state().imageBaseUrl + val
})
