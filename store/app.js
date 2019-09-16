import Cookies from 'js-cookie'

export const state = () => ({
  userInfo: {},
  imageBaseUrl: 'http://xieliaobaba.oss-cn-hangzhou.aliyuncs.com',
  isSuperManager: false, // 超级管理员
  agentName: '', // 中介公司名称
  agentCusNum: '', // 中介公司客户数量
  agentPhone: '' // 中介公司电话
})
export const mutations = {
  SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  SET_isSuperManager(state, local) {
    state.isSuperManager = local
  },
  SET_agent(state, local) {
    state.agentName = local.companyName
    state.agentPhone = local.companyPhone
    state.agentCusNum = local.customerCount
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
  },
  // 获取中介信息
  getAgentMsg({ commit }, companyId) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get("/api/compang/getbyid", {
          params: {
            id: companyId
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            commit("SET_agent", res.data.result)
            resolve()
          } else {
            let msg = res.data.msg || '获取中介信息失败'
            reject(msg)
          }
        })
    })
  }
}
