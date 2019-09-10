import Cookies from 'js-cookie'

export const state = () => ({
  userInfo: {},
  imageBaseUrl: 'http://xieliaobaba.oss-cn-hangzhou.aliyuncs.com/',
  agentName: '', // 中介公司名称
  agentCusNum: '', // 中介公司客户数量
  agentPhone: '' // 中介公司电话
})
export const mutations = {
  SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  SET_agentName(state, local) {
    state.agentName = local
  },
  SET_agentPhone(state, local) {
    state.agentPhone = local
  },
  SET_agentCusNum(state, local) {
    state.agentCusNum = local
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
