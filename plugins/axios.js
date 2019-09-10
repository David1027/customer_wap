const Qs = require('qs')
import {
  getToken
} from '@/utils/auth'
import getCookie from '@/utils/serverGetCookie.js'

export default function ({
  $axios,
  redirect,
  store,
  req
}) {
  $axios.onRequest(config => {
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      if (process.client) {
        config.headers['X-Token'] = getToken()
      } else {
        const {
          token
        } = getCookie(req)
        console.log(token)
        if (token) {
          config.headers['X-Token'] = token
        }
      }
    }

    if (config.method === 'post') {
      if (!config.json) {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
        if (!config.data) {
          config.data = {
            _dc: Math.random()
          }
        } else {
          config.data['_dc'] = Math.random()
          config.data = Qs.stringify(config.data, {
            allowDots: true
          })
        }
      }
    } else {
      if (!config.params) {
        config.params = {
          _dc: Math.random()
        }
      } else {
        config.params['_dc'] = Math.random()
      }
    }
    return config
  })

  $axios.onResponse(res => {
    if (res.data.code == 401) {
      setTimeout(() => {
        redirect('/m/login/')
      }, 2000);
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
    if (code === 500) {
      // 上传参数及URl到错误服务器
    }
  })
}
