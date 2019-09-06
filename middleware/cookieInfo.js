/**
 * Created by IntelliJ IDEA.
 * User: Lijie HelloBox@outlook.com
 * Date: 2019/2/12
 * Time: 14:02
 * 用来恢复服务器渲染无法获取的cookie,从而导致的Cookie获取失效
 **/

import getCookie from '@/utils/serverGetCookie.js'

export default function({ store, route, redirect, req }) {
  const { cur_language } = getCookie(req)
  if (cur_language) {
    store.commit('app/SET_LANG', cur_language)
  }
}
