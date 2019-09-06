import Cookies from 'js-cookie'

export const state = () => ({
  device: 'desktop',
  // imageBaseUrl: 'http://shoestp.oss-us-west-1.aliyuncs.com',
  imageBaseUrl: 'http://velasy.oss-cn-hangzhou.aliyuncs.com',
  language:
    Cookies.get('cur_language') || 'en',
  languages:
    [],
  country:
    [],
  currency:
    [
      { symbol: '$', value: 1, curName: 'USD' },
      { symbol: '€', value: 2, curName: 'EUR' },
      { symbol: '￡', value: 3, curName: 'GBP' },
      { symbol: 'CA$', value: 4, curName: 'CAD' },
      { symbol: 'AU$', value: 5, curName: 'AUD' },
      { symbol: 'CHF', value: 6, curName: 'CHF' },
      { symbol: 'HK$', value: 7, curName: 'HKD' },
      { symbol: '￥', value: 8, curName: 'JPY' },
      // { symbol: 'p.', value: 9, curName: 'RUB' },
      { symbol: 'R$', value: 10, curName: 'BRL' }
      // { symbol: '$', value: 11, curName: 'CLP' },
      // { symbol: 'kr.', value: 12, curName: 'NOK' },
      // { symbol: 'kr.', value: 13, curName: 'DKK' },
      // { symbol: 'kr.', value: 14, curName: 'SEK' },
      // { symbol: '₩', value: 15, curName: 'KRW' },
      // { symbol: '₪', value: 16, curName: 'ILS' },
      // { symbol: '$', value: 17, curName: 'MXN' }
    ],
  terms:
    [
      { label: 'FOB', value: 1, name: 'FOB' },
      { label: 'CIF', value: 2, name: 'CIF' },
      { label: 'CNF', value: 3, name: 'CNF' },
      { label: 'CRF', value: 4, name: 'CRF' }
    ],
  unit:
    [
      { label: 'Pairs', value: 1, name: 'PAIR' },
      { label: 'Twenty-Foot Container', value: 2, name: 'Twenty_Foot_Container' },
      { label: 'Forty-Foot Container', value: 3, name: 'Forty_Foot_Container' }
    ],
  payment:
    [
      { label: 'TT支付', value: 1, name: 'TT' },
      { label: 'L/C', value: 2, name: 'LC' },
      { label: 'D/P', value: 3, name: 'DP' },
      { label: 'Western Union', value: 4, name: 'WesternUnion' },
      { label: 'Money Gram', value: 5, name: 'MoneyGram' }
    ],
  testText:
    '代替梦想的也只能是勉为其难',
  navImgShow: 1,
  subNavShow: 0
})
export const mutations = {
  SET_LANG(state, locale) {
    state.language = locale
    Cookies.set('cur_language', locale)
    this.app.i18n.locale = locale
  },
  SET_NAVIMG(state, locale) {
    state.navImgShow = locale
  },
  SET_SUBNAV(state, locale) {
    state.subNavShow = locale
  }
}
export const actions = {
  setLanguage({ commit }, language) {
    commit('SET_LANG', language)
  },
  setNavImgShow({ commit }, navImgShow) {
    commit('SET_NAVIMG', navImgShow)
  },
  setSubNavShow({ commit }, subNavShow) {
    commit('SET_SUBNAV', subNavShow)
  }
}
