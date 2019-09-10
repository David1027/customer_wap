module.exports = {
  dev: false,
  env: {
    baseUrl: '',
    timeout: 20000
  },
  HOST: '0.0.0.0',
  PORT: 3000,
  proxy: {
    '/api': 'http://192.168.100.48:81'
  }
}
