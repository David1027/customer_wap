import Cookies from 'js-cookie'

export const state = () => ({
  userInfo: {}
})
export const mutations = {
  SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  }
}
export const actions = {
  // 获取用户信息
  InitUserInfo({ commit }) {
    commit('SET_USERINFO', {})
  },
  // 登出
  signOut({ commit }) {
    commit('SET_USERINFO', {})
  }
}
