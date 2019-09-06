import Cookies from 'js-cookie'
const pkg = require('../package')
const crypto = require('crypto')
const hash = crypto.createHash('md5').update(pkg.name).digest('hex')
const TokenKey = hash

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
